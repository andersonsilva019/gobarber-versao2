module.exports = {
  extends: ['./node_modules/commitlint-config-gitmoji'],
  rules: {
    'subject-case': [2, 'always', 'lowerCase'],
    'scope-enum': [2, 'always', ['chore', 'feat', 'test', 'fix', 'refactor', 'docs',]],
    'scope-empty': [2, 'never']
  }
};
