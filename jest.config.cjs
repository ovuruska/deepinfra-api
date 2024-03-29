/** @type {import('ts-jest').JstConfigWithTsJest} */
module.exports = {
	testEnvironment: 'node',
	extensionsToTreatAsEsm: [".ts"],
	testTimeout: 10000,
	coveragePathIgnorePatterns: [
		"/node_modules/",
		"/examples/",
		"/test/"
	],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1"
	},
	testMatch: [
		"<rootDir>/test/**/*.spec.ts"
	],
	rootDir: ".",
	transform: {
		"^.+\\.tsx?$": "ts-jest"
	},

};
