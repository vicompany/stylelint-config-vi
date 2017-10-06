const fs = require('fs');
const path = require('path');
const stylelint = require('stylelint');
const config = require('../index');

describe('SCSS', () => {
	it('should give zero errors on valid CSS code', (done) => {
		fs.readFile(path.join(__dirname, 'fixture/valid.scss'), 'utf8', (err, scss) => {
			if (err) {
				throw err;
			}

			stylelint.lint({
				config,
				code: scss,
				syntax: 'scss',
				formatter: 'string',
			})
				.then((data) => {
					const { output, errored, results } = data;
					const [{ warnings }] = results;

					// Show (error) output in Travis/console
					console.log(output);

					expect(errored).toBe(false);
					expect(warnings.length).toBe(0);

					done();
				});
		});
	});
});
