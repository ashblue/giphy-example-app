module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "react/function-component-definition": ['error', {namedComponents: 'arrow-function'}],
  },
  overrides: [
    {
      files: ['**/*.test.{ts,tsx,js,jsx}'],
      env: {
        jest: true,
      },
    },
  ],
};
