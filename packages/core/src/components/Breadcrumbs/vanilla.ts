export function init(element: HTMLElement): void {
  if (element.dataset.breadcrumbsInit) return;
  element.dataset.breadcrumbsInit = 'true';

  const expandBtn = element.querySelector<HTMLButtonElement>('.idsk-breadcrumbs__expand-btn');
  if (!expandBtn) return;

  expandBtn.addEventListener('click', () => {
    element.dataset.expanded = '';
    expandBtn.setAttribute('aria-expanded', 'true');
  });
}
