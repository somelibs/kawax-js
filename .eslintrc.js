module.exports = {
  parser: "@babel/eslint-parser",
  plugins: [
    "@babel",
    "import"
  ],
  env: {
    "browser": true,
    "node": true,
    "jest": true,
  },
  extends: [
    "airbnb"
  ],
  globals: {
    "__PRODUCTION__": true,
    "__DEV__": true,
    "__DEBUG__": true,
  },
  rules: {
    "@babel/no-invalid-this": "error",
    "@babel/no-unused-expressions": ["error", { "allowTernary": true }],
    "@babel/object-curly-spacing": "off",
    "@babel/quotes": "off",
    "@babel/semi": "off",
    "arrow-parens": ["error", "always"],
    "class-methods-use-this": "off",
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "functions": "never",
        "exports": "never",
        "imports": "never"
      }
    ],
    "consistent-return": "off",
    "guard-for-in": "off",
    "import/exports-last": "error",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-namespace": "error",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/interactive-supports-focus": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "linebreak-style": ["error", "unix"],
    "max-len": ["error", 100],
    "no-array-constructor": "off",
    "no-class-assign": "error",
    "no-else-return": "off",
    "no-mixed-operators": "off",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 1
      }
    ],
    "no-nested-ternary": "off",
    "no-param-reassign": "off",
    "no-prototype-builtins": "off",
    "no-restricted-syntax": ["off", "ForInStatement"],
    "no-return-assign": ["off"],
    "no-throw-literal": "off",
    "no-trailing-spaces": ["error"],
    "no-unused-expressions": ["error", { "allowTernary": true }],
    "no-unused-vars": [
      "error",
      {
        "args": "none"
      }
    ],
    "object-curly-newline": "off",
    "object-shorthand": ["error", "consistent-as-needed"],
    "one-var": ["off"],
    "one-var-declaration-per-line": ["off"],
    "padded-blocks": [
      "warn",
      {
        "classes": "always"
      }
    ],
    "prefer-destructuring": [
      "error",
      {
        "AssignmentExpression": { "array": true, "object": true }
      }
    ],
    "quote-props": ["error", "consistent-as-needed"],
    "quotes": [
      "warn",
      "double",
      {
        "allowTemplateLiterals": true
      }
    ],
    "react/destructuring-assignment": [
      "error",
      "always",
      { "ignoreClassFields": true }
    ],
    "react/forbid-prop-types": "off",
    "react/jsx-curly-brace-presence": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-fragments": "off",
    "react/jsx-no-useless-fragment": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-find-dom-node": "off",
    "react/no-unused-state": "off",
    "react/prop-types": [
      "error",
      {
        "ignore": ["actions", "history", "location"]
      }
    ],
    "react/prefer-stateless-function": "off",
    "react/sort-comp": "off",
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "template-curly-spacing": "off"
  }
}
