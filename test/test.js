const stylelint = require('stylelint');
const config = require('../index');
const validCss = require('./fixture/valid-css');

describe('CSS', () => {
	it('should give zero errors on valid CSS code', (done) => {
		stylelint.lint({
			code: validCss,
			config
		})
		.then((data) => {
			let { errored, results } = data;
			let { warnings } = results[0];

			// console.log(config);
			// console.log(warnings);

			expect(errored).toBeFalsy();
			expect(warnings.length).toBe(0);

			done();
		});
	});
});
