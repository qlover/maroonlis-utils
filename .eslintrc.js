const eslintrc = {
  extends: [require.resolve('@yueqing/lint/lib/ts-eslint')],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'no-console': 0,
    'no-shadow': 0,
    'no-unused-vars': 0,
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'warn',
    'comma-dangle': [0, 'always-multiline'],
    'padded-blocks': [
      0,
      { blocks: 'always', classes: 'always', switches: 'always' },
      { allowSingleLineBlocks: true },
    ],
    'max-len': [2, { code: 160, ignoreUrls: true }],
    'prettier/prettier': [
      'off',
      {
        endOfLine: 'auto',
        tabWidth: 2,
        semi: false,
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 145,
      },
    ],
  },
}

module.exports = eslintrc
