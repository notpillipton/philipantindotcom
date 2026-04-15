const nxPreset = require('@nx/jest/preset').default;
const path = require('path');

module.exports = { 
    ...nxPreset,
    setupFiles: [...(nxPreset.setupFiles || []), path.resolve(__dirname, 'global-jest-setup.js')]
};
