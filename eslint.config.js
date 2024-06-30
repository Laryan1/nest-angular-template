const globals = require("globals");
const tseslint = require("typescript-eslint");

module.exports = [
  { name : 'EsLint global globals', languageOptions: { globals: {...globals.browser, ...globals.node} } },
  { name : 'EsLint global ignores', ignores: ["node_modules/"] },
  { name : 'EsLint global file matching', files: ["**/*.{js,mjs,cjs,ts}"] },
  ...tseslint.configs.recommended,
  {
    name: 'EsLint no-console config',
    files: [ "**/*.ts" ],
    languageOptions: {
      parser: tseslint.parser,
      globals: globals.node,
    },
    plugins: {
      tseslint,
    },
    rules: {
      // ...tseslint.configs.recommended,
      "no-console": ["error", { allow: ["warn", "error"] }],
    }
  },
  {
    name: 'Typescript, allow non-ESM modules',
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    }
  }
];