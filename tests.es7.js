import test from 'tape'

import funes from './funes.es7'

test(
	'ES6 tests:',

	test => {
		let invocations = 0

		const add = ( a, b ) => {
			invocations++

			return a + b
		}

		test.test(
			'* Executes the subject with the provided arguments',

			test => {
				test.equals(
					add::funes( 'foo', 'bar' ),

					'foobar'
				)

				test.end()
			}
		)

		test.test(
			'* When invoked a second time with the same signature',

			test => {
				const outcome = add::funes( 'foo', 'bar' )

				test.test(
					'* * Does not re-invoke the subject',

					test => {
						test.equals( invocations, 1 )

						test.end()
					}
				)

				test.test(
					'* * Returns the same result',

					test => {
						test.equals( outcome, 'foobar' )

						test.end()
					}
				)

				test.end()
			}
		)
	}
)
