export function init(element: HTMLElement): void {
  const textarea = element.querySelector<HTMLTextAreaElement>('.idsk-textarea');
  const countDisplay = element.querySelector<HTMLElement>('.idsk-character-count');

  if (!textarea || !countDisplay) return;

  const maxLength = parseInt(textarea.getAttribute('maxlength') ?? '', 10);
  if (isNaN(maxLength)) return;

  const updateCount = (): void => {
    const currentLength = textarea.value.length;
    countDisplay.textContent = `${currentLength}/${maxLength}`;
  };

  textarea.addEventListener('input', updateCount);

  updateCount();
}

export function initAll(root: HTMLElement = document.body): void {
  const containers = root.querySelectorAll<HTMLElement>('.idsk-textarea-container');
  containers.forEach((container) => {
    if (container.querySelector('.idsk-character-count')) {
      init(container);
    }
  });
}
