import '@testing-library/jest-dom/vitest';

// Radix UI uses browser APIs not implemented in jsdom
Element.prototype.hasPointerCapture = () => false;
Element.prototype.setPointerCapture = () => {};
Element.prototype.releasePointerCapture = () => {};
Element.prototype.scrollIntoView = () => {};
