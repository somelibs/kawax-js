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
    "__DEV__": true,
  },
  rules: {
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "@babel/semi": "error",
    "@babel/no-invalid-this": "error",
    "@babel/object-curly-spacing": "off",
    "@babel/quotes": "off",
    "@babel/no-unused-expressions": "error",
    "arrow-parens": ["error", "always"],
    "class-methods-use-this": "off",
    "consistent-return": "off",
    "default-param-last": "off",
    "func-names": "off",
    "function-paren-newline": "off",
    "guard-for-in": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/exports-last": "error",
    "import/no-namespace": "error",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-for": "off",
    "linebreak-style": ["error", "unix"],
    "no-class-assign": "error",
    "no-multiple-empty-lines": ["error",
      { "max": 1, "maxEOF": 1 }
    ],
    "no-unused-vars": ["error", {
      args: "none"
    }],
    "no-prototype-builtins": "off",
    "no-return-assign": ["off"],
    "no-restricted-syntax": ["off", "ForInStatement"],
    "no-multiple-empty-lines": "error",
    "no-trailing-spaces": ["error"],
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "object-curly-newline": "off",
    "object-shorthand": ["error", "consistent-as-needed"],
    "padded-blocks": ["warn", {
      classes:"always"
    }],
    "prefer-destructuring": ["error", {
      "AssignmentExpression": {
        "array": false,
        "object": false
      }
    }, {
      "enforceForRenamedProperties": false
    }],
    "quotes": ["warn", "single", {
      allowTemplateLiterals: true
    }],
    "quote-props": ["error", "consistent-as-needed"],
    "react/jsx-filename-extension": "off",
    "react/prefer-stateless-function": "off",
    "react/forbid-prop-types": "off",
    "react/no-unused-state": "off",
    "react/sort-comp": "off",
    "react/static-property-placement": "off",
    "react/state-in-constructor": "off",
    "react/prop-types": ["error", {
      ignore: ["actions", "context"]
    }],
    "react/destructuring-assignment": ["error", "always",
      { "ignoreClassFields": true }
    ],
    "react/prop-types": ["error", {
      ignore: ["actions", "context"]
    }]
  }
}
