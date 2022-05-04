
module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir : __dirname, 
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint/eslint-plugin',
		'eslint-plugin-react'
	],
	extends: [
		'plugin:@typescript-eslint/recommended',
	],
	root: true,
	env: {
		node: true,
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'eol-last': ['error'],
		'object-curly-spacing': ['error', 'always'],
		'comma-dangle': ['error', 'always-multiline'],
		'@typescript-eslint/explicit-function-return-type': ['error'],
		'@typescript-eslint/explicit-member-accessibility': ['error'],
		'semi': ['error', 'always'],
		"react/jsx-curly-spacing": [2, "always"],
	},
};
