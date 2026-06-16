export function init(element: HTMLElement): void {
  if (element.dataset.idskTopBarInit) return;
  element.dataset.idskTopBarInit = 'true';

  const toggleBtn = element.querySelector<HTMLButtonElement>('.idsk-top-bar__toggle-btn');
  const panel = element.querySelector<HTMLElement>('.idsk-top-bar__panel');

  if (!toggleBtn || !panel) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    const next = !isExpanded;

    toggleBtn.setAttribute('aria-expanded', String(next));
    panel.hidden = !next;

    if (next) {
      element.setAttribute('data-expanded', '');
    } else {
      element.removeAttribute('data-expanded');
    }
  });
}
