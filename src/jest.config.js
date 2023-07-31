
const {pathsToModuleNameMapper} = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");



module.exports = {
    preset: "ts-jest",
    roots: ['./'],
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)'],
    moduleDirectories: ["node_modules", "<rootDir>"],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    }
};