module.exports = {
  root: true,
	env: {
		node: true
	},
	extends: [
    'xo',
    'plugin:vue/essential',
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 1,
    'camelcase': 0,
    "indent": ["error", 2],
    'semi': ["error", "never"]
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
};
