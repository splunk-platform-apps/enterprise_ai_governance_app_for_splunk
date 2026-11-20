import { defineConfig } from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends("eslint:recommended"),

    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jest,
            ...globals.amd,
            Atomics: "readonly",
            SharedArrayBuffer: "readonly",
            splunkjs: "readonly",
        },

        parser: tsParser,
        ecmaVersion: 2018,
        sourceType: "module",
    },

    rules: {
        eqeqeq: "error",
        "no-var": "error",
        "prefer-const": "error",
        "no-implicit-globals": "error",
        "no-eval": "error",
        "no-implied-eval": "error",
        "no-return-await": "warn",
        "no-throw-literal": "error",
        radix: "error",
        semi: ["error", "always"],
        quotes: ["error", "single"],
        indent: ["error", 2],
        "comma-dangle": ["error", "always-multiline"],
        "no-extra-semi": "error",
    },
}]);