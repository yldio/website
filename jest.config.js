module.exports = {
  setupFiles: ['./spec/enzyme-helper.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: [
    '<rootDir>/__tests__/**/*.{js,jsx}',
    '<rootDir>/src/**/*spec.{js,jsx}',
  ],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/public/'],
};
