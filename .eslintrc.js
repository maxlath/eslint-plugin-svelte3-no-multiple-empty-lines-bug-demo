module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: false,
    es6: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  plugins: [
    'svelte3'
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    // Trigger error
    'no-multiple-empty-lines': [ 'error', { max: 1, maxBOF: 1 } ],

    // Wont trigger error
    // 'no-multiple-empty-lines': [ 'error', { max: 1, maxBOF: 0 } ],
    // 'no-multiple-empty-lines': [ 'error', { max: 1, maxBOF: 2 } ],

  },
  settings: {}
}
