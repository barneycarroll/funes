# funes
*Remember everything, for better or for worse*

> Depends on ES6 [Map](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map) and [Symbol](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol) objects, written for ES6 module syntax. Recommend importing via [Babel](https://babeljs.io).

Funes is a [variadic](https://en.wikipedia.org/wiki/Variadic_function) [memoizer](https://en.wikipedia.org/wiki/Memoization): every time a function is called via funes, its output is cached. The next time the same expression is executed, funes returns the cached results instead of executing the function again.

It is a method, and operates on the function passed as `this` - which plays nicely with ES7's [bind operator](http://babeljs.io/blog/2015/05/14/function-bind/).

```javascript
const add = ( ...operands ) => {
	console.log( 'Adding!' )

	return operands.reduce( ( a, b ) => a + b, 0 )
}

console.log( add( 1, 2 ) )
// => 'Adding!'
// => 3

console.log( add( 1, 2 ) )
// => 'Adding!'
// => 3

console.log( add::funes( 1, 2 ) )
// => 'Adding!'
// => 3

console.log( add::funes( 1, 2 ) )
// => 3
```

Play with this code in the <a href="http://babeljs.io/repl/#?experimental=true&evaluate=true&loose=false&spec=false&code=const%20add%20%3D%20(%20...operands%20)%20%3D%3E%20%7B%0D%0A%20%20%20%20console.log(%20'Adding!'%20)%0D%0A%0D%0A%20%20%20%20return%20operands.reduce(%20(%20a%2C%20b%20)%20%3D%3E%20a%20%2B%20b%2C%200%20)%0D%0A%7D%0D%0A%0D%0Aconsole.log(%20add(%201%2C%202%20)%20)%0D%0A%2F%2F%20%3D%3E%20'Adding!'%0D%0A%2F%2F%20%3D%3E%203%0D%0A%0D%0Aconsole.log(%20add(%201%2C%202%20)%20)%0D%0A%2F%2F%20%3D%3E%20'Adding!'%0D%0A%2F%2F%20%3D%3E%203%0D%0A%0D%0Aconsole.log(%20add%3A%3Afunes(%201%2C%202%20)%20)%0D%0A%2F%2F%20%3D%3E%20'Adding!'%0D%0A%2F%2F%20%3D%3E%203%0D%0A%0D%0Aconsole.log(%20add%3A%3Afunes(%201%2C%202%20)%20)%0D%0A%2F%2F%20%3D%3E%203%0D%0A%0D%0A%2F%2F%20%2F%2F%0D%0A%0D%0Aconst%20value%20%3D%20Symbol()%0D%0A%0D%0Afunction%20funes()%7B%0D%0A%09let%20goodness%20%3D%20value%20in%20this%0D%0A%09%09%3F%20this%5B%20value%20%5D%0D%0A%09%09%3A%20this%5B%20value%20%5D%20%3D%20new%20Map()%0D%0A%09%0D%0A%09for(%20const%20sake%20of%20arguments%20)%7B%0D%0A%09%09if(%20!goodness.has(%20sake%20)%20)%0D%0A%09%09%09goodness.set(%20sake%2C%20new%20Map()%20)%0D%0A%09%09%0D%0A%09%09goodness%20%3D%20goodness.get(%20sake%20)%0D%0A%09%7D%0D%0A%09%0D%0A%09return%20value%20in%20goodness%0D%0A%09%09%3F%20goodness%5B%20value%20%5D%0D%0A%09%09%3A%20goodness%5B%20value%20%5D%20%3D%20this(%20...arguments%20)%0D%0A%7D">Babel REPL</a>.