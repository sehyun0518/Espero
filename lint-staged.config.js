module.exports = {
  '*.+(ts|tsx)': [() => 'yarn tsc -p tsconfig.base.json --noEmit'],
  '**/*.+(ts|tsx|js|jsx)': ['eslint --fix --cache', 'prettier --write'],
};
