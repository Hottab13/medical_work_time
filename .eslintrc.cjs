module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh',"react-hooks"],
  "rules": {
    //"no-console": "warn",
    "react-hooks/rules-of-hooks": 'error',
    "react-hooks/exhaustive-deps": 'warn', // <--- THIS IS THE NEW RULE
    "prefer-const": "warn",
    "quotes": ["warn", "double"],
    "jsx-quotes": ["warn", "prefer-double"],
    "max-len": ["warn", { "code": 300 }],
    "comma-dangle": ["warn", "always-multiline"],
    "semi": ["warn", "always"],
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type"
        ],
        "newlines-between": "always-and-inside-groups"
      }
    ]
  }
}