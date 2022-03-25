// array -> reference type -> ordered collection of items -> object all referenced typed
console.log(typeof [])  // object
let fruits = ['apple','banana','orange']  // index (0,1,2)
// console.log(fruits)
// console.log(fruits[0][0])  // apple -> a
// any data type store
let mixed = [null, undefined, 1, 'string']
// console.log(mixed)

// change array mutable
fruits[1] = 'mango' 
console.log(fruits)
console.log(Array.isArray(fruits)) // tells which object
// push, pop, shift, unshift
fruits.push('grapes')  // last add
console.log(fruits)
console.log(fruits.pop()) // last remove
console.log(fruits)
console.log(fruits.shift()) // first remove
console.log(fruits)   
fruits.unshift('Pears')  // first add
console.log(fruits)
