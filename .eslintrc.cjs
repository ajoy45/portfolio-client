module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true
  },
  "extends": ["react-app", "react-app/jest", "prettier"],
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "rules": {
    "no-var": "error",
    "camelCase": "error",
    "no-empty": "error",
    "default-case": "error",
    "eqeqeq": "error",
    "max-lines": ["error", 50],
    "max-depth": ["error", 3]
  }
}
