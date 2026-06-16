const CHEVRON_SVG = `<svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2812 8.64062L12.5 13.4115L7.71875 8.64062L6.25 10.1094L12.5 16.3594L18.75 10.1094L17.2812 8.64062Z" fill="currentColor"/></svg>`;
const WARNING_SVG = `<svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.04175 22.3958H23.9584L12.5001 2.60413L1.04175 22.3958ZM13.5417 19.2708H11.4584V17.1875H13.5417V19.2708ZM13.5417 15.1041H11.4584V10.9375H13.5417V15.1041Z" fill="currentColor"/></svg>`;

let _uid = 0;

function makeOptionEl(opt: HTMLOptionElement, uid: string, idx: number): HTMLElement {
  const el = document.createElement('div');
  el.id = `${uid}-opt-${idx}`;
  el.className = 'idsk-select__item';
  el.setAttribute('role', 'option');
  el.setAttribute('aria-selected', 'false');
  el.dataset.value = opt.value;
  if (opt.disabled) {
    el.setAttribute('aria-disabled', 'true');
    el.setAttribute('data-disabled', '');
  }
  // Mirror Radix: text wrapped in a span (ItemText)
  const span = document.createElement('span');
  span.textContent = opt.text;
  el.appendChild(span);
  return el;
}

export function init(container: HTMLElement): void {
  if (container.dataset.selectInit) return;
  container.dataset.selectInit = 'true';

  const native = container.querySelector<HTMLSelectElement>('select.idsk-select');
  if (!native) return;
  const wrapper = native.closest<HTMLElement>('.idsk-select__wrapper');
  if (!wrapper) return;

  const uid = native.id || `idsk-sel-${++_uid}`;
  const listboxId = `${uid}-lb`;
  const isError = native.classList.contains('idsk-select--error');
  const isSm = native.classList.contains('idsk-select--sm');

  // Rename native id — trigger will take the original id so the <label for> still works
  native.id = `${uid}-native`;

  // Visually hide native select; kept for form submission
  Object.assign(native.style, {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    whiteSpace: 'nowrap',
    border: '0',
    opacity: '0',
  });
  native.setAttribute('aria-hidden', 'true');
  native.tabIndex = -1;

  // ── Trigger button (mirrors Radix Select.Trigger) ──────────────────────
  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.id = uid;
  trigger.setAttribute('role', 'combobox');
  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('aria-haspopup', 'listbox');
  trigger.setAttribute('aria-controls', listboxId);
  trigger.setAttribute('data-state', 'closed');
  trigger.setAttribute('data-placeholder', '');
  trigger.className = [
    'idsk-select',
    isError ? 'idsk-select--error' : 'idsk-select--default',
    isSm ? 'idsk-select--sm' : 'idsk-select--lg',
    'idsk-select--empty',
  ].join(' ');

  if (native.disabled) {
    trigger.disabled = true;
    trigger.setAttribute('data-disabled', '');
  }
  if (native.required) trigger.setAttribute('aria-required', 'true');

  // Forward ARIA attributes from the original native select
  ['aria-describedby', 'aria-invalid', 'aria-label'].forEach((attr) => {
    const val = native.getAttribute(attr);
    if (val) trigger.setAttribute(attr, val);
  });

  const valueSpan = document.createElement('span');
  valueSpan.style.pointerEvents = 'none';
  trigger.appendChild(valueSpan);

  if (isError) {
    const errIcon = document.createElement('span');
    errIcon.className = 'idsk-select__error-icon';
    errIcon.setAttribute('aria-hidden', 'true');
    errIcon.innerHTML = WARNING_SVG;
    trigger.appendChild(errIcon);
  }

  const chevron = document.createElement('span');
  chevron.className = 'idsk-select__chevron';
  chevron.setAttribute('aria-hidden', 'true');
  chevron.innerHTML = CHEVRON_SVG;
  trigger.appendChild(chevron);

  // ── Dropdown panel (mirrors Radix Select.Content + Viewport) ──────────
  const dropdown = document.createElement('div');
  dropdown.id = listboxId;
  dropdown.setAttribute('role', 'listbox');
  dropdown.className = 'idsk-select__dropdown';
  dropdown.hidden = true;
  // Radix positions via Portal + CSS vars; we position inline within the relative wrapper.
  // max-height comes from the .idsk-select__dropdown CSS class (--idsk-select-dropdown-max-height).
  Object.assign(dropdown.style, {
    position: 'absolute',
    top: '100%',
    left: '0',
    width: '100%',
    marginTop: '2px',
    overflowY: 'auto',
    zIndex: '50',
  });

  const viewport = document.createElement('div');
  viewport.className = 'idsk-select__dropdown-viewport';
  dropdown.appendChild(viewport);

  // Populate from native select children (options + optgroups)
  let optIdx = 0;
  Array.from(native.children).forEach((node) => {
    if (node instanceof HTMLOptGroupElement) {
      const gl = document.createElement('div');
      gl.className = 'idsk-select__group-label';
      gl.setAttribute('aria-hidden', 'true');
      gl.textContent = node.label;
      viewport.appendChild(gl);
      Array.from(node.children).forEach((opt) => {
        if (opt instanceof HTMLOptionElement) {
          viewport.appendChild(makeOptionEl(opt, uid, optIdx++));
        }
      });
    } else if (node instanceof HTMLOptionElement && node.value !== '') {
      viewport.appendChild(makeOptionEl(node, uid, optIdx++));
    }
  });

  wrapper.insertBefore(trigger, native);
  wrapper.appendChild(dropdown);

  // ── Runtime state ────────────────────────────────────────────────────
  const placeholder = Array.from(native.options).find((o) => o.value === '')?.text ?? '';
  let currentValue = '';
  let hlIdx = -1;

  const getItems = () =>
    Array.from(viewport.querySelectorAll<HTMLElement>('[role="option"]:not([data-disabled])'));

  const setHighlight = (idx: number) => {
    hlIdx = idx;
    getItems().forEach((el, i) => {
      if (i === idx) {
        el.setAttribute('data-highlighted', '');
        el.scrollIntoView({ block: 'nearest' });
        trigger.setAttribute('aria-activedescendant', el.id);
      } else {
        el.removeAttribute('data-highlighted');
      }
    });
    if (idx < 0) trigger.removeAttribute('aria-activedescendant');
  };

  const openDropdown = () => {
    if (trigger.disabled) return;
    trigger.setAttribute('aria-expanded', 'true');
    trigger.setAttribute('data-state', 'open');
    dropdown.hidden = false;
    const its = getItems();
    const cur = its.findIndex((el) => el.dataset.value === currentValue);
    setHighlight(cur >= 0 ? cur : 0);
    document.addEventListener('mousedown', onOutsideClick, true);
  };

  const closeDropdown = () => {
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('data-state', 'closed');
    dropdown.hidden = true;
    getItems().forEach((el) => el.removeAttribute('data-highlighted'));
    hlIdx = -1;
    trigger.removeAttribute('aria-activedescendant');
    document.removeEventListener('mousedown', onOutsideClick, true);
  };

  const pickValue = (val: string, label: string) => {
    currentValue = val;
    valueSpan.textContent = label;
    trigger.classList.remove('idsk-select--empty');
    trigger.removeAttribute('data-placeholder');

    viewport.querySelectorAll<HTMLElement>('[role="option"]').forEach((el) => {
      const sel = el.dataset.value === val;
      el.setAttribute('aria-selected', String(sel));
      if (sel) {
        el.setAttribute('data-state', 'checked');
      } else {
        el.removeAttribute('data-state');
      }
    });

    native.value = val;
    native.dispatchEvent(new Event('change', { bubbles: true }));
    closeDropdown();
    trigger.focus();
  };

  const onOutsideClick = (e: MouseEvent) => {
    if (!document.contains(wrapper) || !wrapper.contains(e.target as Node)) closeDropdown();
  };

  // ── Events ────────────────────────────────────────────────────────────
  trigger.addEventListener('click', () => (dropdown.hidden ? openDropdown() : closeDropdown()));

  trigger.addEventListener('keydown', (e: KeyboardEvent) => {
    if (trigger.disabled) return;
    const its = getItems();

    switch (e.key) {
      case ' ':
      case 'Enter':
        e.preventDefault();
        if (dropdown.hidden) {
          openDropdown();
        } else if (its[hlIdx]) {
          pickValue(its[hlIdx].dataset.value ?? '', its[hlIdx].textContent?.trim() ?? '');
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (dropdown.hidden) {
          openDropdown();
        } else {
          setHighlight(Math.min(hlIdx + 1, its.length - 1));
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (dropdown.hidden) {
          openDropdown();
        } else {
          setHighlight(Math.max(hlIdx - 1, 0));
        }
        break;
      case 'Home':
        e.preventDefault();
        if (!dropdown.hidden) setHighlight(0);
        break;
      case 'End':
        e.preventDefault();
        if (!dropdown.hidden) setHighlight(its.length - 1);
        break;
      case 'Escape':
        e.preventDefault();
        closeDropdown();
        break;
      case 'Tab':
        closeDropdown();
        break;
    }
  });

  viewport.addEventListener('mousedown', (e: MouseEvent) => {
    const item = (e.target as HTMLElement).closest<HTMLElement>('[role="option"]');
    if (!item || item.hasAttribute('data-disabled')) return;
    e.preventDefault(); // prevent trigger blur before pick
    pickValue(item.dataset.value ?? '', item.textContent?.trim() ?? '');
  });

  viewport.addEventListener('mousemove', (e: MouseEvent) => {
    const item = (e.target as HTMLElement).closest<HTMLElement>('[role="option"]');
    if (!item || item.hasAttribute('data-disabled')) return;
    setHighlight(getItems().indexOf(item));
  });

  // ── Init from pre-selected option ────────────────────────────────────
  const initOpt = native.options[native.selectedIndex];
  if (initOpt?.value) {
    currentValue = initOpt.value;
    valueSpan.textContent = initOpt.text;
    trigger.classList.remove('idsk-select--empty');
    trigger.removeAttribute('data-placeholder');
    viewport.querySelectorAll<HTMLElement>('[role="option"]').forEach((el) => {
      if (el.dataset.value === currentValue) {
        el.setAttribute('aria-selected', 'true');
        el.setAttribute('data-state', 'checked');
      }
    });
  } else {
    valueSpan.textContent = placeholder;
  }
}

export function initAll(root: HTMLElement = document.body): void {
  root.querySelectorAll<HTMLElement>('.idsk-select-container').forEach(init);
}
