import React from 'react';
import { useChannel, useEffect } from 'storybook/preview-api';
import type { Preview, Decorator } from '@storybook/react-vite';
import { format } from 'prettier/standalone';
import htmlPlugin from 'prettier/plugins/html';
import '../../core/src/style/global.css';

const WithHtml: Decorator = (Story, context) => {
  const emit = useChannel({});

  useEffect(() => {
    const timer = window.setTimeout(async () => {
      const canvasEl = context.canvasElement;
      if (!canvasEl) return;

      let code = canvasEl.innerHTML;

      // Inject vanilla data attributes onto .idsk-tooltip__trigger for clean copy-paste HTML
      if (code.includes('idsk-tooltip__trigger') && context.args) {
        const content = String(context.args['content'] ?? '');
        const side = String(context.args['preferredPosition'] ?? 'top');
        if (content) {
          code = code.replace(
            /class="idsk-tooltip__trigger"/,
            `class="idsk-tooltip__trigger" data-content="${content}" data-side="${side}"`,
          );
        }
      }

      const params = (context.parameters?.html ?? {}) as {
        removeEmptyComments?: boolean;
        transform?: (c: string) => string;
      };

      if (params.removeEmptyComments) {
        code = code.replace(/<!--\s*-->/g, '');
      }
      if (typeof params.transform === 'function') {
        code = params.transform(code);
      }

      try {
        code = await format(code, {
          parser: 'html',
          plugins: [htmlPlugin],
          tabWidth: 2,
          useTabs: false,
          htmlWhitespaceSensitivity: 'ignore',
        });
      } catch {
        // emit unformatted HTML if prettier fails
      }

      emit('storybook/html/codeUpdate', { code });
    }, 50);

    return () => window.clearTimeout(timer);
  });

  return React.createElement(Story as React.ElementType);
};

const preview: Preview = {
  decorators: [WithHtml],
  parameters: {
    controls: {
      expanded: true,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    html: {
      removeEmptyComments: true,
      transform: (code: string) =>
        code
          .replace(/ data-react-helmet="true"/g, '')
          // Remove Radix-internal attributes
          .replace(/ aria-describedby="radix-[^"]*"/g, '')
          .replace(/ data-state="instant-open"/g, '')
          // Strip --radix-* CSS custom properties from inline styles
          .replace(/ style="([^"]*)"/g, (_match, styleValue: string) => {
            const cleaned = styleValue.replace(/--radix-[\w-]+:\s*[^;]+;?\s*/g, '').trim();
            return cleaned ? ` style="${cleaned}"` : '';
          }),
    },
  },
};

export default preview;
