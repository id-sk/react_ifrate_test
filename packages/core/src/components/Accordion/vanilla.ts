export function init(element: HTMLElement): void {
  if (element.dataset.accordionInit) return;
  element.dataset.accordionInit = 'true';

  const isSingleOpen = element.dataset.singleOpen === 'true';
  const items = element.querySelectorAll<HTMLElement>('.idsk-accordion__item');
  const toggleAllBtn = element.querySelector<HTMLButtonElement>('.idsk-accordion__toggle-all');

  function setOpen(button: HTMLButtonElement, content: HTMLElement, open: boolean): void {
    button.setAttribute('aria-expanded', String(open));
    content.hidden = !open;
    if (open) {
      content.classList.add('idsk-accordion__content--open');
    } else {
      content.classList.remove('idsk-accordion__content--open');
    }
  }

  function updateToggleAll(): void {
    if (!toggleAllBtn) return;
    const btns = Array.from(
      element.querySelectorAll<HTMLButtonElement>('.idsk-accordion__button:not(:disabled)'),
    );
    const allExpanded =
      btns.length > 0 && btns.every((btn) => btn.getAttribute('aria-expanded') === 'true');
    toggleAllBtn.textContent = allExpanded ? 'Zavrieť všetky' : 'Otvoriť všetky';
  }

  // Progressive enhancement: on JS load, explicitly close panels not marked open.
  // Without JS, panels without the hidden attribute remain visible (no-JS fallback).
  items.forEach((item) => {
    const button = item.querySelector<HTMLButtonElement>('.idsk-accordion__button');
    const content = item.querySelector<HTMLElement>('.idsk-accordion__content');

    if (!button || !content) return;

    if (!button.hasAttribute('aria-expanded')) {
      button.setAttribute('aria-expanded', 'false');
    }

    const isOpen = button.getAttribute('aria-expanded') === 'true';
    content.hidden = !isOpen;
    if (isOpen) content.classList.add('idsk-accordion__content--open');

    button.addEventListener('click', () => {
      if (button.disabled) return;
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      if (isSingleOpen && !isExpanded) {
        items.forEach((otherItem) => {
          const otherBtn = otherItem.querySelector<HTMLButtonElement>('.idsk-accordion__button');
          const otherContent = otherItem.querySelector<HTMLElement>('.idsk-accordion__content');
          if (otherBtn && otherContent && otherBtn !== button) {
            setOpen(otherBtn, otherContent, false);
          }
        });
      }

      setOpen(button, content, !isExpanded);
      updateToggleAll();
    });
  });

  if (toggleAllBtn) {
    updateToggleAll();
    toggleAllBtn.addEventListener('click', () => {
      const btns = Array.from(
        element.querySelectorAll<HTMLButtonElement>('.idsk-accordion__button:not(:disabled)'),
      );
      const allExpanded = btns.every((btn) => btn.getAttribute('aria-expanded') === 'true');
      btns.forEach((btn) => {
        const item = btn.closest<HTMLElement>('.idsk-accordion__item');
        const content = item?.querySelector<HTMLElement>('.idsk-accordion__content');
        if (content) setOpen(btn, content, !allExpanded);
      });
      updateToggleAll();
    });
  }
}
