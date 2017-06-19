module.exports = {
	plugins: [
		'stylelint-order',
	],
	rules: {
		// Color - http://stylelint.io/user-guide/rules/#color
		'color-hex-case': 'lower', // 'upper',
		'color-hex-length': 'short',
		'color-named': ['never', {
			ignore: ['inside-function'],
		}],
		'color-no-hex': null,
		'color-no-invalid-hex': true,

		// Font - http://stylelint.io/user-guide/rules/#font-family
		'font-family-name-quotes': 'always-where-recommended',
		'font-family-no-duplicate-names': true,

		// Font-weight - http://stylelint.io/user-guide/rules/#font-weight
		'font-weight-notation': 'named-where-possible',

		// Function - http://stylelint.io/user-guide/rules/#function
		'function-blacklist': null,
		'function-calc-no-unspaced-operator': true,
		'function-comma-newline-after': 'always-multi-line',
		'function-comma-newline-before': 'never-multi-line',
		'function-comma-space-after': 'always-single-line',
		'function-comma-space-before': 'never',
		'function-linear-gradient-no-nonstandard-direction': true,
		'function-max-empty-lines': 0,
		'function-name-case': 'lower',
		'function-parentheses-newline-inside': 'always-multi-line',
		'function-parentheses-space-inside': 'never-single-line',
		'function-url-data-uris': 'never',
		'function-url-no-scheme-relative': true,
		'function-url-quotes': ['always', {
			except: ['empty'],
		}],
		'function-url-scheme-whitelist': null,
		'function-whitelist': null,
		'function-whitespace-after': 'always',

		// Number - http://stylelint.io/user-guide/rules/#number
		'number-leading-zero': 'always',
		'number-max-precision': 3,
		'number-no-trailing-zeros': true,

		// String
		'string-no-newline': true,
		'string-quotes': 'single',

		// Length - http://stylelint.io/user-guide/rules/#length
		'length-zero-no-unit': true,

		// Time - http://stylelint.io/user-guide/rules/#time
		'time-min-milliseconds': 100,

		// Unit - http://stylelint.io/user-guide/rules/#unit
		'unit-blacklist': ['mm', 'q', 'cm', 'in', 'pt', 'pc'],
		'unit-case': 'lower',
		'unit-no-unknown': true,
		'unit-whitelist': null,

		// Value - http://stylelint.io/user-guide/rules/#value
		'value-keyword-case': 'lower',
		'value-no-vendor-prefix': true,

		// Value list - http://stylelint.io/user-guide/rules/#value-list
		'value-list-comma-newline-after': 'always-multi-line',
		'value-list-comma-newline-before': 'never-multi-line',
		'value-list-comma-space-after': 'always-single-line',
		'value-list-comma-space-before': 'never',
		'value-list-max-empty-lines': 0,

		// Custom property - http://stylelint.io/user-guide/rules/#custom-property
		'custom-property-empty-line-before': null,
		'custom-property-pattern': null,

		// Shorthand property - http://stylelint.io/user-guide/rules/#shorthand-property
		'shorthand-property-no-redundant-values': true,

		// Property - http://stylelint.io/user-guide/rules/#property
		'property-blacklist': null,
		'property-case': 'lower',
		'property-no-unknown': true,
		'property-no-vendor-prefix': true,
		'property-whitelist': null,

		// Keyframe declaration - http://stylelint.io/user-guide/rules/#keyframe-declaration
		'keyframe-declaration-no-important': true,

		// Declaration - http://stylelint.io/user-guide/rules/#declaration
		'declaration-bang-space-after': 'never',
		'declaration-bang-space-before': 'always',
		'declaration-colon-newline-after': null,
		'declaration-colon-space-after': 'always',
		'declaration-colon-space-before': 'never',
		'declaration-empty-line-before': null,
		'declaration-no-important': true,
		'declaration-property-unit-blacklist': {
			'font-size': ['px'],
			'line-height': ['px', 'rem', 'em'],
		},
		'declaration-property-unit-whitelist': null,
		'declaration-property-value-blacklist': null,
		'declaration-property-value-whitelist': null,

		// Declaration order - https://github.com/hudochenkov/stylelint-order
		'order/order': [
			{
				type: 'at-rule',
				name: 'extend',
			},
			{
				type: 'at-rule',
				name: 'include',
				parameter: /^(?!respond-to\(.*\)$)/,
			},
			{
				type: 'at-rule',
				name: 'media',
			},
			'declarations',
			'rules',
		],
		'order/properties-order': [
			[{
				properties: [
					// Positioning
					'position',
					'top',
					'right',
					'bottom',
					'left',
					'z-index',
				],
			},
			{
				emptyLineBefore: 'always',
				order: 'flexible',
				properties: [
					// Display & flex
					'display',

					'flex',
					'flex-grow',
					'flex-shrink',
					'flex-basis',
					'flex-flow',
					'flex-direction',
					'flex-wrap',
					'align-content',
					'align-items',
					'align-self',
					'justify-content',
					'order',
				],
			},
			{
				emptyLineBefore: 'always',
				order: 'flexible',
				properties: [
					// Transforms & floats
					'perspective',
					'transform',

					'float',
					'clear',
				],
			},
			{
				emptyLineBefore: 'always',
				properties: [
					// Box model
					'box-sizing',
					'overflow',
					'overflow-x',
					'overflow-y',

					'width',
					'min-width',
					'max-width',

					'height',
					'min-height',
					'max-height',

					'margin',
					'margin-top',
					'margin-right',
					'margin-bottom',
					'margin-left',
					'padding',
					'padding-top',
					'padding-right',
					'padding-bottom',
					'padding-left',
				],
			},
			{
				emptyLineBefore: 'always',
				order: 'flexible',
				properties: [
					// Colors & typography
					'color',
					'font',
					'font-family',
					'font-size',
					'font-style',
					'font-variant',
					'font-weight',

					'letter-spacing',
					'line-height',
					'list-style',
					'list-style-type',
					'list-style-position',
					'list-style-image',

					'text-align',
					'text-decoration',
					'text-indent',
					'text-overflow',
					'text-rendering',
					'text-shadow',
					'text-transform',

					'white-space',
					'word-break',
					'word-spacing',
					'word-wrap',
				],
			},
			{
				emptyLineBefore: 'always',
				order: 'flexible',
				properties: [
					// Background & borders
					'background',
					'background-image',
					'background-position',
					'background-size',
					'background-repeat',
					'background-origin',
					'background-clip',
					'background-attachment',
					'background-color',
					'border',
					'border-radius',
					'border-collapse',
					'border-color',
					'border-spacing',
					'border-style',
					'border-width',
					'border-top',
					'border-right',
					'border-bottom',
					'border-left',
					'outline',
					'box-shadow',
				],
			},
			{
				emptyLineBefore: 'always',
				properties: [
					// Animation
					'animation',
				],
			},
			{
				emptyLineBefore: 'always',
				properties: [
					// Transitions
					'transition',
				],
			}],
			{ unspecified: 'ignore' },
		],
		// Declaration block - http://stylelint.io/user-guide/rules/#declaration-block
		'declaration-block-no-duplicate-properties': [true, {
			ignore: ['consecutive-duplicates-with-different-values'],
		}],
		'declaration-block-no-redundant-longhand-properties': true,
		'declaration-block-no-shorthand-property-overrides': true,
		'declaration-block-semicolon-newline-after': 'always-multi-line',
		'declaration-block-semicolon-newline-before': 'never-multi-line',
		'declaration-block-semicolon-space-after': 'always-single-line',
		'declaration-block-semicolon-space-before': 'never',
		'declaration-block-single-line-max-declarations': 1,
		'declaration-block-trailing-semicolon': 'always',

		// Block - http://stylelint.io/user-guide/rules/#block
		'block-closing-brace-empty-line-before': 'never',
		'block-closing-brace-newline-after': ['always', {
			ignoreAtRules: ['if', 'else'],
		}],
		'block-closing-brace-newline-before': 'always-multi-line',
		'block-closing-brace-space-after': null,
		'block-closing-brace-space-before': 'always-single-line',
		'block-no-empty': true,
		'block-no-single-line': null,
		'block-opening-brace-newline-after': 'always-multi-line',
		'block-opening-brace-newline-before': null,
		'block-opening-brace-space-after': 'always-single-line',
		'block-opening-brace-space-before': 'always',

		// Selector - http://stylelint.io/user-guide/rules/#selector
		'selector-attribute-brackets-space-inside': 'never',
		'selector-attribute-operator-blacklist': null,
		'selector-attribute-operator-space-after': 'never',
		'selector-attribute-operator-space-before': 'never',
		'selector-attribute-operator-whitelist': null,
		'selector-class-pattern': null,
		'selector-combinator-space-after': 'always',
		'selector-combinator-space-before': 'always',
		'selector-descendant-combinator-no-non-space': true,
		'selector-id-pattern': null,
		'selector-max-compound-selectors': 3,
		'selector-max-empty-lines': 0,
		'selector-max-specificity': null, // TODO
		'selector-nested-pattern': null,
		'selector-no-attribute': null,
		'selector-no-combinator': null,
		'selector-no-id': true,
		'selector-no-qualifying-type': [true, {
			ignore: ['attribute'],
		}],
		'selector-no-type': null, // TODO: only allow in 'base' files
		'selector-no-universal': true,
		'selector-no-vendor-prefix': true,
		'selector-pseudo-class-blacklist': null,
		'selector-pseudo-class-case': 'lower',
		'selector-pseudo-class-no-unknown': true,
		'selector-pseudo-class-parentheses-space-inside': 'never',
		'selector-pseudo-class-whitelist': null,
		'selector-pseudo-element-case': 'lower',
		'selector-pseudo-element-colon-notation': 'single',
		'selector-pseudo-element-no-unknown': true,
		'selector-type-case': 'lower',
		'selector-type-no-unknown': true,

		// Selector list - http://stylelint.io/user-guide/rules/#selector-list
		'selector-list-comma-newline-after': 'always-multi-line',
		'selector-list-comma-newline-before': 'never-multi-line',
		'selector-list-comma-space-after': 'always-single-line',
		'selector-list-comma-space-before': 'never',

		// Rule - http://stylelint.io/user-guide/rules/#rule
		'rule-empty-line-before': ['always-multi-line', {
			except: ['first-nested'],
			ignore: ['after-comment'],
		}],

		// Media feature - http://stylelint.io/user-guide/rules/#media-feature
		'media-feature-colon-space-after': 'always',
		'media-feature-colon-space-before': 'never',
		'media-feature-name-blacklist': null,
		'media-feature-name-case': 'lower',
		'media-feature-name-no-unknown': true,
		'media-feature-name-no-vendor-prefix': true,
		'media-feature-name-whitelist': null,
		'media-feature-parentheses-space-inside': 'never',
		'media-feature-range-operator-space-after': 'always',
		'media-feature-range-operator-space-before': 'always',

		// Custom media - http://stylelint.io/user-guide/rules/#custom-media
		'custom-media-pattern': null,

		// Media query list - http://stylelint.io/user-guide/rules/#media-query-list
		'media-query-list-comma-newline-after': 'always-multi-line',
		'media-query-list-comma-newline-before': 'never-multi-line',
		'media-query-list-comma-space-after': 'always-single-line',
		'media-query-list-comma-space-before': 'never',

		// At-rule - http://stylelint.io/user-guide/rules/#at-rule
		'at-rule-blacklist': null,
		'at-rule-empty-line-before': ['always', {
			ignore: ['after-comment', 'blockless-after-blockless', 'inside-block'],
			ignoreAtRules: ['else'],
		}],
		'at-rule-name-case': 'lower',
		'at-rule-name-newline-after': null,
		'at-rule-name-space-after': 'always-single-line',
		'at-rule-no-unknown': null, // Disabled because of errors on @mixin, @if, etc: https://github.com/stylelint/stylelint/issues/1515
		'at-rule-no-vendor-prefix': true,
		'at-rule-semicolon-newline-after': 'always',
		'at-rule-semicolon-space-before': 'never',
		'at-rule-whitelist': null,

		// stylelint-disable Comment - http://stylelint.io/user-guide/rules/#stylelint-disable-comment
		'stylelint-disable-reason': null,

		// Comment - http://stylelint.io/user-guide/rules/#comment
		'comment-no-empty': true,
		'comment-empty-line-before': null,
		'comment-whitespace-inside': 'always',
		'comment-word-blacklist': null,

		// General / Sheet - http://stylelint.io/user-guide/rules/#general--sheet
		'indentation': 'tab',
		'max-empty-lines': 2,
		'max-line-length': null, // TODO: enable when single line comments are supported
		'max-nesting-depth': 3,
		'no-browser-hacks': null, // Disabled because of: https://github.com/stylelint/stylelint/issues/871
		'no-descending-specificity': true,
		'no-duplicate-selectors': true,
		'no-empty-source': true,
		'no-eol-whitespace': true,
		'no-extra-semicolons': true,
		'no-indistinguishable-colors': null, // Disabled because of: https://github.com/SlexAxton/css-colorguard/issues/32
		'no-invalid-double-slash-comments': true,
		'no-missing-end-of-source-newline': true,
		'no-unknown-animations': null,
		'no-unsupported-browser-features': null, // Disabled because it does not understand 'progressive enhancement' and it's slow
	},
};
