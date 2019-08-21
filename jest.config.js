// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    collectCoverageFrom: [
        "workspace/src/**/*.js"
    ], 
    coverageDirectory: "report/coverage",
    browser: true,
    resetMocks: true,
    moduleNameMapper: {
        "^@static(.*)$": "<rootDir>/workspace/static$1",
        "^@src(.*)$": "<rootDir>/workspace/src$1",
        "^@test(.*)$": "<rootDir>/workspace/test$1"
    },
    transformIgnorePatterns: [
        "/node_modules/",
        "/lib/"
    ]
};
