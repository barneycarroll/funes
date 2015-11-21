var funes = require( './funes.es3' )
var test  = require( 'tape' )

test(
	'ES3 browser tests:',

	function( test ){
		var invocations = 0

		function add( a, b ){
			invocations++

			return a + b
		}

		test.test(
			'* Executes the subject with the provided arguments',

			function( test ){
				test.equals(
					funes.call( add, 'foo', 'bar' ),

					'foobar'
				)

				test.end()
			}
		)

		test.test(
			'* When invoked a second time with the same signature',

			function( test ){
				var outcome = funes.call( add, 'foo', 'bar' )

				test.test(
					'* * Does not re-invoke the subject',

					function( test ){
						test.equals( invocations, 1 )

						test.end()
					}
				)

				test.test(
					'* * Returns the same result',

					function( test ){
						test.equals( outcome, 'foobar' )

						test.end()
					}
				)

				test.end()
			}
		)
	}
)
