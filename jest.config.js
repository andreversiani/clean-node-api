
module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '!<rootDir>/src/**/*-protocols.ts',
    '!**/protocols/**'
  ],
  coverageDirectory: 'coverage',
  preset: '@shelf/jest-mongodb',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
