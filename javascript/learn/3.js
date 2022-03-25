let firstName = '      vivek      ';
console.log(firstName.length)
// immutable string
//method
// trim () -> remove white spaces
// toUpperCase() -> conver to upper case
// slice()
console.log(firstName.trim().length)
console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase())
console.log(firstName.trim().slice(0,4));  // [start,end)
console.log(firstName.trim().slice(1));  // [start,str.length)

// type of operator -> number, null, undefined, string, booleans, BigInt, Symbol
