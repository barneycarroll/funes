const value = Symbol()

export default function(){
	let goodness = value in this
		? this[ value ]
		: this[ value ] = new Map()
	
	for( const sake of arguments ){
		if( !goodness.has( sake ) )
			goodness.set( sake, new Map() )
		
		goodness = goodness.get( sake )
	}
	
	return value in goodness
		? goodness[ value ]
		: goodness[ value ] = this( ...arguments )
}