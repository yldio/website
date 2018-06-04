module.exports = {
  setupFiles: ['./spec/jest-enzyme-helper.js'],
  setupTestFrameworkScriptFile: './spec/jest-setup-tests.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: [
    '<rootDir>/__tests__/**/*.{js,jsx}',
    '<rootDir>/src/**/*spec.{js,jsx}',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/public/'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.(svg)$': '<rootDir>/spec/jest-transform-asset',
  },
};
