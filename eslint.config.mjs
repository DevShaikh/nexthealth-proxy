// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["dist", "node_modules"], // replaces .eslintignore
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      // your custom rules here
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
];
