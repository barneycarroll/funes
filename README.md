# funes
*Remember everything, for better or for worse*

Funes is a [variadic](https://en.wikipedia.org/wiki/Variadic_function) [memoizer](https://en.wikipedia.org/wiki/Memoization): every time a function is called via funes, its output is cached. The next time the same expression is executed, funes returns the cached results instead of executing the function again.

It is a 'floating method', and operates on the function passed as `this` - which plays nicely with ES7's [bind operator](http://babeljs.io/blog/2015/05/14/function-bind/) (`::`).

## In ES7

```javascript
import funes from 'funes'

const add = ( a, b ) => {
	console.log( 'Adding!' )

	return a + b
}

add( 1, 2 )
// => 'Adding!'
// => 3

add( 1, 2 )
// => 'Adding!'
// => 3

add::funes( 1, 2 )
// => 'Adding!'
// => 3

add::funes( 1, 2 )
// => 3
```

## In an ES3+ browser

```html
<script src="/lib/funes.es3.js"></script>
<script>
function add( a, b ){
	console.log( 'Adding!' )

	return a + b
}

add( 1, 2 )
// => 'Adding!'
// => 3

add( 1, 2 )
// => 'Adding!'
// => 3

funes.call( add, 1, 2 )
// => 'Adding!'
// => 3

funes.call( add, 1, 2 )
// => 3
</script>
```
