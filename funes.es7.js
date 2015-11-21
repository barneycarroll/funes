import give from 'xet'

const root = new WeakMap()
const leaves = new WeakMap()

export default function funes(){
	let branch = root::give( this, () => new Map() )

	for( let argument of arguments )
		branch = branch::give( argument, () => new Map() )

	return leaves::give( branch, () => this( ...arguments ) )
}
