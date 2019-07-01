module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'node'],
	extends: [
		'eslint:recommended',
		'plugin:node/recommended',
		'airbnb-base',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'prettier/@typescript-eslint',
		'plugin:import/typescript',
	],
	rules: {
		'@typescript-eslint/camelcase': [
			'error',
			{ ignoreDestructuring: true, properties: 'never' },
		],
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'import/no-extraneous-dependencies': [
			'error',
			{ devDependencies: ['**/*.test.ts'] },
		],
		'import/prefer-default-export': 'off',
		'class-methods-use-this': 'off',
		'node/no-missing-require': 'off',
		'node/no-unsupported-features/es-syntax': 'off',
		'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
		'spaced-comment': ['error', 'always', { markers: ['/'] }], // TypeScript directives
	},
	overrides: [
		{
			files: '**/*.test.ts',
			rules: {
				'@typescript-eslint/explicit-function-return-type': 'off',
				'global-require': 'off',
			},
		},
	],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts'],
		},
		'import/resolver': {
			typescript: {},
		},
	},
}
