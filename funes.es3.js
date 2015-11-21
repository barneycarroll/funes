(function(){
	'use strict'

	var node = typeof exports != 'undefined' && typeof global != 'undefined'

	if( node ){
		if( !WeakMap )
			WeakMap = require( 'es6-collections' ).WeakMap

		var give = require( 'xet' )

		module.exports = funes
	}
	else {
		window.funes = funes
	}

	var root = new WeakMap()
	var leaves = new WeakMap()

	function funes(){
		var subject = this
		var args    = arguments

		var branch = give.call( root, subject, function(){
			return new Map()
		} )

		for( var i = 0; i < args.length; i++ )
			branch = give.call( branch, args[ i ], function(){
				return new Map()
			} )

		return give.call( leaves, branch, function(){
			return subject.apply( this, args )
		} )
	}
}())
