import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import prettierConfig from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

export default defineConfig([
	{
		ignores: ["dist/**", "node_modules/**", "prisma/migrations/**"],
	},
	js.configs.recommended,
	tseslint.configs.recommended,
	prettierConfig,
	{
		plugins: {
			"simple-import-sort": simpleImportSort,
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
