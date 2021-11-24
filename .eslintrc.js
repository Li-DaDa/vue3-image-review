module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true //额外支持新的 ES6 全局变量
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/prettier',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        htmlWhitespaceSensitivity: 'ignore',
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        eslintIntegration: true,
        printWidth: 120,
        endOfLine: 'auto',
        ignorePath: '.prettierignore'
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
