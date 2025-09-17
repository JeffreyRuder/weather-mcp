module.exports = {
	root: true,
	ignorePatterns: ['**/dist/**', '**/node_modules/**'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	parserOptions: {
		project: ['./tsconfig.eslint.json'],
		tsconfigRootDir: __dirname,
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	extends: [
		'prettier',
	],
	rules: {
		'arrow-spacing': 'error',
		'default-case': 'error',
		'no-duplicate-imports': 'error',
		'no-new-wrappers': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-script-url': 'error',
		'no-throw-literal': 'error',
		'no-undef-init': 'error',
		'no-var': 'error',
		'object-curly-spacing': ['error', 'always'],
		'one-var': ['error', 'never'],
		'prefer-const': [
			'error',
			{
				destructuring: 'all',
			},
		],
		'prefer-template': 'error',
		quotes: ['error', 'single', { avoidEscape: true }],
		semi: ['error', 'never'],
		'spaced-comment': [
			'error',
			'always',
			{
				markers: ['/'],
			},
		],
		'no-restricted-imports': [
			'error',
			{
				patterns: [
					{
						group: ['src/*'],
						message: 'Please use relative paths for local imports',
					},
				],
			},
		],
		'no-restricted-syntax': [
			'warn',
			{
				selector: 'ExportDefaultDeclaration',
				message: 'Please use named exports when possible',
			},
		],

		// Typescript
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/array-type': ['error', { default: 'array' }],
		'@typescript-eslint/consistent-type-assertions': 'error',
		'@typescript-eslint/consistent-type-definitions': 'error',
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{ prefer: 'type-imports', fixStyle: 'inline-type-imports' },
		],
		'@typescript-eslint/no-import-type-side-effects': 'warn',
		'@typescript-eslint/dot-notation': 'error',
		'@typescript-eslint/member-delimiter-style': [
			'off',
			{
				multiline: {
					delimiter: 'none',
					requireLast: true,
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false,
				},
			},
		],
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-non-null-assertion': 'warn',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'@typescript-eslint/no-require-imports': 'error',
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/no-unused-expressions': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/unified-signatures': 'error',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
		],
		'@typescript-eslint/prefer-nullish-coalescing': ['warn', { ignoreConditionalTests: true }],
		'@typescript-eslint/prefer-optional-chain': 'warn',
		'@typescript-eslint/no-unsafe-return': 'warn',
		'@typescript-eslint/no-unsafe-member-access': 'warn',
		'@typescript-eslint/no-unsafe-call': 'warn',
		'@typescript-eslint/no-unsafe-assignment': 'warn',
		'@typescript-eslint/no-floating-promises': 'warn',
		'@typescript-eslint/no-unsafe-argument': 'warn',
		'@typescript-eslint/no-unnecessary-condition': 'warn',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'default',
				format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
				leadingUnderscore: 'allow',
			},
			{
				selector: 'typeProperty',
				format: null,
				leadingUnderscore: 'allow',
			},
			{
				selector: 'objectLiteralProperty',
				format: null,
				leadingUnderscore: 'allow',
			},
		],
	},
}
