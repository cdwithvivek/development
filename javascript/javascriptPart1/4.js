// type of operator -> number, null, undefined, string, booleans, BigInt, Symbol
let age = 22
let firstName = 'vivek'
console.log(typeof age)
console.log(typeof firstName)

// number of string
console.log(typeof (age + ''))   //string
// string to number
let num = "34"
console.log(typeof +num)  // number
age = String(age)
age = Number(age)

// string concat

let s1 = 'vivek '
let s2 = 'pandey'
let s3 = s1 + s2
console.log(s3)

// template string

let txt = `${s1}${s2}, welcome to javascript`
console.log(txt)


// comparison operator and boolean
console.log(5>6)
console.log(5<6)
console.log(5==5) // true
console.log(5=='5')  // true
console.log(5=== '5') // false


// undefined and null
let Name = null
console.log(Name)
Name = 'vivek'
console.log(Name)   // typeof null -> object imp

//bigInt
console.log(Number.MAX_SAFE_INTEGER)
let bigNum = BigInt(12)
bigNum = 12n // bigINt
console.log(typeof bigNum)
