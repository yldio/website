module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
  setupTestFrameworkScriptFile: '<rootDir>/spec/setup.js',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}'
  ],
  testPathIgnorePatterns: ['/node_modules/', '/.cache/'],
  modulePaths: ['src'],
  moduleNameMapper: {
    '\\.(scss|svg|png|jpg)$': '<rootDir>/spec/mock.js'
  },
  moduleFileExtensions: ['jsx', 'js'],
  coverageReporters: ['lcov', 'text', 'html'],
  testEnvironment: 'node',
  transform: {
    '.(js|jsx)': 'babel-jest'
  },
  snapshotSerializers: ['enzyme-to-json/serializer']
};

// ,
//   "jest": {
//     "testMatch": [
//       "**/__tests__/**/*.js?(x)",
//       "**/?(*.)+(spec|test).js?(x)"
//     ],
//     "setupTestFrameworkScriptFile": "./spec/setup-test.js",
//     "snapshotSerializers": [
//       "enzyme-to-json/serializer"
//     ],
//     "transform": {
//       "^.+\\.js?$": "babel-jest"
//     }
//   }
