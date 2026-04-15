/**
 * Global Jest setup for the workspace.
 * Mocks browser APIs that are missing in JSDOM.
 */

if (typeof window !== 'undefined') {
  window.scrollTo = jest.fn();
  
  if (!Element.prototype.scrollIntoView) {
    Element.prototype.scrollIntoView = jest.fn();
  }

  // Mock matchMedia for MUI components that use it (like useMediaQuery)
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}

// Fix for React Router 7 / JSDOM missing TextEncoder
if (typeof TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}
