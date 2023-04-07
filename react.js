module.exports = {
  "env": {
      "browser": true,
      "es2021": true,
      "jest": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"
  ],
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "jsx-a11y",
      "@typescript-eslint",
      "react-hooks"
  ],
  "rules": {
      "prettier/prettier": ["error", {
          "printWidth": 80,
          "tabWidth": 2,
          "singleQuote": true,
          "arrowParens": "always",
          "semi": false,
          "endOfLine": "auto"
        }],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "jsx-a11y/alt-text": [
        "warn",
        {
          elements: ["img"],
          img: ["Image"],
        },
      ],
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/aria-unsupported-elements": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn"
  },
  "settings": {
      "react": {
          "version": "detect"
      }
  }
}
