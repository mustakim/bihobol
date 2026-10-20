module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
    },
    extends: [
        'prettier',
        'plugin:prettier/recommended'
    ],
    globals: {
        React: 'writable'
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        node: true,
        browser: true
    }
}