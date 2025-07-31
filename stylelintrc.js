module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-scss'],
  plugins: [],
  rules: {
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['import', 'mixin', 'include', 'extend'] },
    ],
    'selector-class-pattern': '^[a-z][a-z0-9-]*$',
    'block-no-empty': true,
    'declaration-block-trailing-semicolon': 'always',
    'color-no-invalid-hex': true,
    'unit-whitelist': ['em', 'rem', '%', 's', 'px'],
    'scss/at-import-partial-extension-blacklist': ['scss'],
    'scss/dollar-variable-pattern': '^[$][a-z][a-z0-9-]*$',
  },
};
