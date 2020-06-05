module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-rational-order'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'no-descending-specificity': null,
    'declaration-empty-line-before': 'never',
    'scss/at-rule-no-unknown': true,
  },
};
