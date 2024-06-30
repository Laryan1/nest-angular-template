// eslint-disable-next-line @typescript-eslint/no-require-imports
const nxPreset = require('@nx/jest/preset.js');

module.exports = {
  ...nxPreset,
  moduleNameMapper: { '^@sheencity/(.*)$': '<rootDir>/../$1/src/index.ts' },
};