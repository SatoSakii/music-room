const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const prettierConfig = require("eslint-config-prettier");
const simpleImportSort = require("eslint-plugin-simple-import-sort");
const tseslint = require("typescript-eslint");

module.exports = defineConfig([
	{
		ignores: [".expo/**", "dist/**", "node_modules/**"],
	},
	expoConfig,
	prettierConfig,
	{
		plugins: {
			"simple-import-sort": simpleImportSort,
			"@typescript-eslint": tseslint.plugin,
		},
		rules: {
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
			eqeqeq: ["error", "always"],
			"no-var": "error",
			"prefer-const": "error",
		},
	},
]);
