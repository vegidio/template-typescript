export default {
    collectCoverage: true,
    extensionsToTreatAsEsm: ['.ts'],
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { useESM: true }],
    },
    modulePathIgnorePatterns: ['<rootDir>/lib'],
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
};
