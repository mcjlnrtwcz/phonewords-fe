module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: ["airbnb", "airbnb/hooks", "plugin:prettier/recommended"],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  },
  rules: {
    "react/jsx-filename-extension": "off",
    "prettier/prettier": "error",
  },
};
