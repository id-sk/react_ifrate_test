export function init(element: HTMLElement): void {
  const textarea = element.querySelector<HTMLTextAreaElement>('.idsk-textarea');
  const countDisplay = element.querySelector<HTMLElement>('.idsk-character-count');
  const countSr = element.querySelector<HTMLElement>('.idsk-character-count-sr');

  if (!textarea || !countDisplay) return;

  const maxLength = parseInt(textarea.getAttribute('maxlength') ?? '', 10);
  if (isNaN(maxLength)) return;

  const updateCount = (): void => {
    const currentLength = textarea.value.length;
    countDisplay.textContent = `${currentLength}/${maxLength}`;
    if (countSr) {
      countSr.textContent = `Napísaných ${currentLength} znakov z maximálne ${maxLength}.`;
    }
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
