import './style/global.css';

/**
 * IDSK Registry pre vanilla komponenty.
 * Mápovanie component-name -> init function.
 */
const registry: Record<string, (element: HTMLElement) => void> = {};

/**
 * Inicializuje všetky IDSK komponenty v danom kontajneri.
 */
export function initIDSK(root: HTMLElement | Document = document) {
  const elements =
    (root as HTMLElement).querySelectorAll?.('*') || (root as Document).querySelectorAll('*');

  elements.forEach((el) => {
    if (el instanceof HTMLElement) {
      // Podpora pre data-idsk="name" alebo data-idsk-name
      for (const attr of Array.from(el.attributes)) {
        if (attr.name === 'data-idsk' || attr.name.startsWith('data-idsk-')) {
          const componentName =
            attr.name === 'data-idsk' ? attr.value : attr.name.replace('data-idsk-', '');

          if (registry[componentName.toLowerCase()]) {
            registry[componentName.toLowerCase()](el);
          }
        }
      }
    }
  });
}

// Dynamický import všetkých vanilla skriptov komponentov
// Hľadá súbory ako components/Accordion/vanilla.ts alebo components/Accordion/vanilla.js
const modules = import.meta.glob('./components/**/vanilla.{ts,js}', { eager: true });

type VanillaModule = {
  init?: (el: HTMLElement) => void;
  initAll?: (root?: HTMLElement) => () => void;
  default?: (el: HTMLElement) => void;
};

// Components that export initAll auto-discover by CSS class — no data-idsk needed.
const autoInitFns: Array<(root?: HTMLElement) => void> = [];

for (const path in modules) {
  const module = modules[path] as VanillaModule;
  const match = path.match(/\/components\/([^/]+)\//);
  if (!match?.[1]) continue;

  const componentName = match[1].toLowerCase();

  if (typeof module.initAll === 'function') {
    autoInitFns.push(module.initAll);
  }

  // init may be an alias of initAll — still register for data-idsk scoped usage
  const initFn = module.init || module.default;
  if (typeof initFn === 'function') {
    registry[componentName] = initFn;
  }
}

/**
 * Sleduje zmeny v DOM a automaticky inicializuje nové komponenty.
 */
function observeDOM() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          initIDSK(node);
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// Inicializácia pri načítaní
if (typeof window !== 'undefined') {
  const startup = () => {
    initIDSK();
    autoInitFns.forEach((fn) => fn(document.body));
    observeDOM();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startup);
  } else {
    startup();
  }
}

/**
 * Registruje nový komponent do IDSK systému manuálne.
 */
export function registerComponent(name: string, initFn: (element: HTMLElement) => void) {
  registry[name.toLowerCase()] = initFn;
  initIDSK();
}
