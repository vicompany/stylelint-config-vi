module.exports = {
	rules: {
		// At-rule - http://stylelint.io/user-guide/rules/#at-rule
		'at-rule-blacklist': null,
		'at-rule-empty-line-before': ['always', {
			ignore: ['after-comment', 'blockless-group', 'all-nested'],
			ignoreAtRules: ['else']
		}],
		'at-rule-name-case': 'lower',
		'at-rule-name-newline-after': null,
		'at-rule-name-space-after': 'always-single-line',
		'at-rule-no-unknown': null, // Disabled because of errors on @mixin, @if, etc: https://github.com/stylelint/stylelint/issues/1515
		'at-rule-no-vendor-prefix': true,
		'at-rule-semicolon-newline-after': 'always',
		'at-rule-whitelist': null,

		// Block - http://stylelint.io/user-guide/rules/#block
		'block-closing-brace-newline-after': ['always', {
			ignoreAtRules: ['if', 'else']
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

		// Color - http://stylelint.io/user-guide/rules/#color
		'color-hex-case': 'lower', // 'upper',
		'color-hex-length': 'short',
		'color-named': 'never',
		'color-no-hex': null,
		'color-no-invalid-hex': true,

		// Comment - http://stylelint.io/user-guide/rules/#comment
		'comment-empty-line-before': null,
		'comment-whitespace-inside': 'always',
		'comment-word-blacklist': null,

		// Disable comment - http://stylelint.io/user-guide/rules/#stylelint-disable-comment
		'stylelint-disable-reason': null,

		// Custom property - http://stylelint.io/user-guide/rules/#custom-property
		'custom-media-pattern': null,
		'custom-property-no-outside-root': true,
		'custom-property-pattern': null,

		// Declaration - http://stylelint.io/user-guide/rules/#declaration
		'declaration-bang-space-after': 'never',
		'declaration-bang-space-before': 'always',
		'declaration-colon-newline-after': null,
		'declaration-colon-space-after': 'always',
		'declaration-colon-space-before': 'never',
		'declaration-no-important': true,
		'declaration-property-unit-blacklist': {
			'font-size': ['px'],
			'line-height': ['px', 'rem', 'em']
		},
		'declaration-property-unit-whitelist': null,
		'declaration-property-value-blacklist': null,
		'declaration-property-value-whitelist': null,

		// Declaration block - http://stylelint.io/user-guide/rules/#declaration-block
		'declaration-block-no-duplicate-properties': true,
		'declaration-block-no-ignored-properties': true,
		'declaration-block-no-shorthand-property-overrides': true,
		'declaration-block-properties-order': [
			// Positioning
			'position',
			'top',
			'right',
			'bottom,',
			'left',
			'z-index',

			// Transforms
			'perspective',
			'transform',

			'float',
			'clear',

			'flex',
			{
				order: 'flexible',
				properties: [
					'flex-basis',
					'flex-direction',
					'flex-flow',
					'flex-grow',
					'flex-shrink',
					'flex-wrap',
					'align-content',
					'align-items',
					'align-self',
					'justify-content',
					'order'
				]
			},

			// Display & box model
			'box-sizing',
			'display',
			'overflow',

			'width',
			'min-width',
			'max-width',

			'height',
			'min-height',
			'max-height',

			'margin',
			'padding',

			// Colors & typography
			'color',
			'font',

			'letter-spacing',
			'line-height',
			'list-style',

			{
				order: 'flexible',
				properties: [
					'text-align',
					'text-decoration',
					'text-indent',
					'text-justify',
					'text-overflow',
					'text-rendering',
					'text-shadow',
					'text-transform',
					'text-wrap'
				]
			},

			'white-space',
			'word-spacing',
			'word-wrap',

			// Background & borders
			'background',
			'border',
			'outline',
			'box-shadow',

			// Animation
			'animation',
			'animation-name',
			{
				order: 'flexible',
				properties: [
					'animation-play-state',
					'animation-direction',
					'animation-fill-mode',
					'animation-duration',
					'animation-delay',
					'animation-iteration-count',
					'animation-timing-function'
				]
			},

			// Other
			{
				order: 'flexible',
				properties: [
					'caption-side',
					'content',
					'cursor',
					'empty-cells',
					'opacity',
					'pointer-events',
					'quotes',
					'resize',
					'speak',
					'table-layout',
					'user-select',
					'vertical-align',
					'visibility',
					'wil-change'
				]
			},

			// Transitions
			'transition'
		],
		'declaration-block-semicolon-newline-after': 'always-multi-line',
		'declaration-block-semicolon-newline-before': 'never-multi-line',
		'declaration-block-semicolon-space-after': 'always-single-line',
		'declaration-block-semicolon-space-before': 'never',
		'declaration-block-single-line-max-declarations': 1,
		'declaration-block-trailing-semicolon': 'always',

		// Font - http://stylelint.io/user-guide/rules/#font-family
		'font-family-name-quotes': 'always-where-recommended',
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
		'function-url-quotes': 'always',
		'function-whitelist': null,
		'function-whitespace-after': 'always',

		// Keyframe declaration - http://stylelint.io/user-guide/rules/#keyframe-declaration
		'keyframe-declaration-no-important': true,

		// Length - http://stylelint.io/user-guide/rules/#length
		'length-zero-no-unit': true,

		// Media feature - http://stylelint.io/user-guide/rules/#media-feature
		'media-feature-colon-space-after': 'always',
		'media-feature-colon-space-before': 'never',
		'media-feature-name-no-vendor-prefix': true,
		'media-feature-no-missing-punctuation': true,
		'media-feature-parentheses-space-inside': 'never',
		'media-feature-range-operator-space-after': 'always',
		'media-feature-range-operator-space-before': 'always',

		// Media query list - http://stylelint.io/user-guide/rules/#media-query-list
		'media-query-list-comma-newline-after': 'always-multi-line',
		'media-query-list-comma-newline-before': 'never-multi-line',
		'media-query-list-comma-space-after': 'always-single-line',
		'media-query-list-comma-space-before': 'never',

		// Number - http://stylelint.io/user-guide/rules/#number
		'number-leading-zero': 'always',
		'number-max-precision': 3,
		'number-no-trailing-zeros': true,

		// Property - http://stylelint.io/user-guide/rules/#property
		'property-blacklist': null,
		'property-case': 'lower',
		'property-no-vendor-prefix': true,
		'property-whitelist': null,

		// Root - http://stylelint.io/user-guide/rules/#root-rule
		'root-no-standard-properties': true,

		// Rule - http://stylelint.io/user-guide/rules/#rule
		'rule-nested-empty-line-before': ['always', {
			except: ['first-nested'],
			ignore: ['after-comment']
		}],
		'rule-non-nested-empty-line-before': ['always-multi-line', {
			ignore: ['after-comment']
		}],

		// Selector - http://stylelint.io/user-guide/rules/#selector
		'selector-attribute-brackets-space-inside': 'never',
		'selector-attribute-operator-blacklist': null,
		'selector-attribute-operator-space-after': 'never',
		'selector-attribute-operator-space-before': 'never',
		'selector-attribute-operator-whitelist': null,
		'selector-class-pattern': null,
		'selector-combinator-space-after': 'always',
		'selector-combinator-space-before': 'always',
		'selector-id-pattern': null,
		'selector-max-compound-selectors': 3,
		'selector-max-empty-lines': 0,
		'selector-max-specificity': null, // TODO
		'selector-no-attribute': null,
		'selector-no-combinator': null,
		'selector-no-id': true,
		'selector-no-qualifying-type': [true, {
			ignore: ['attribute']
		}],
		'selector-no-type': null, // TODO: only allow in 'base' files
		'selector-no-universal': true,
		'selector-no-vendor-prefix': true,
		'selector-pseudo-class-case': 'lower',
		'selector-pseudo-class-no-unknown': true,
		'selector-pseudo-class-parentheses-space-inside': 'never',
		'selector-pseudo-element-case': 'lower',
		'selector-pseudo-element-colon-notation': 'single',
		'selector-pseudo-element-no-unknown': true,
		'selector-root-no-composition': true,
		'selector-type-case': 'lower',
		'selector-type-no-unknown': true,

		// Selector list - http://stylelint.io/user-guide/rules/#selector-list
		'selector-list-comma-newline-after': 'always-multi-line',
		'selector-list-comma-newline-before': 'never-multi-line',
		'selector-list-comma-space-after': 'always-single-line',
		'selector-list-comma-space-before': 'never',

		// Shorthand property - http://stylelint.io/user-guide/rules/#shorthand-property
		'shorthand-property-no-redundant-values': true,

		// String
		'string-no-newline': true,
		'string-quotes': 'single',

		// Time - http://stylelint.io/user-guide/rules/#time
		'time-no-imperceptible': true,

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

		// General / Sheet - http://stylelint.io/user-guide/rules/#general--sheet
		'indentation': 'tab',
		'max-empty-lines': 2,
		'max-line-length': null,
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
		'no-unknown-animations': true,
		'no-unsupported-browser-features': null // Disabled because it does not understand 'progressive enhancement' and it's slow
	}
};
