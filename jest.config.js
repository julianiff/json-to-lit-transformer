module.exports = {
    collectCoverageFrom: ["src/**/*.{ts,tsx}"],
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: ["index.ts", "tests/*"],
    globals: {
        "ts-jest": {
            tsconfig: "./tsconfig.test.json",
        },
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    preset: "ts-jest",
    roots: ["<rootDir>/src/", "<rootDir>/tests/"],
    testRegex: ".*(spec|test)\\.(jsx?|tsx?)$",
    testURL: "http://localhost/",
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
    },
    transformIgnorePatterns: ["node_modules/(?!l@popperjs)"],
};
