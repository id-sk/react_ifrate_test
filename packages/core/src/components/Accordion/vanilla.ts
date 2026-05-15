export function init(element: HTMLElement): void {
  if (element.dataset.accordionInit) return;
  element.dataset.accordionInit = 'true';

  const items = element.querySelectorAll<HTMLElement>('.idsk-accordion__item');

  items.forEach((item) => {
    const button = item.querySelector<HTMLButtonElement>('.idsk-accordion__button');
    const content = item.querySelector<HTMLElement>('.idsk-accordion__content');

    if (!button || !content) return;

    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      button.setAttribute('aria-expanded', String(!isExpanded));
      content.hidden = isExpanded;

      if (!isExpanded) {
        content.classList.add('idsk-accordion__content--open');
      } else {
        content.classList.remove('idsk-accordion__content--open');
      }
    });
  });
}
