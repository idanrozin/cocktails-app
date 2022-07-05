module.exports = {
  env: {
    es6: true,
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:react/recommended'],
  ignorePatterns: ['src/reportWebVitals.js'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
};
