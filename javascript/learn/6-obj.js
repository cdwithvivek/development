// obj -> reference typed , key:value
// key default -> string wheather write or not
const person = {
    name : 'vivek',  // key string always
    "age" :22,
    hobbies : ['music','books'],
    'color orig' : 'white'
}

// access obj property
/*
console.log(person.name)
console.log(person['age'])
console.log(person.hobbies[0])
*/
// add key value
/*
person.gender = 'male'
person['color'] = 'white'
console.log(person.gender)
console.log(person.color)
*/
// dot vs []  -> key multiple word cannot use .
/*
const key = 'email'
person.key = 'vivekpandey@gmail.com'  // key : val
person[key] = 'vivekpandey@gmail.com'  // email : val
console.log(person)
*/

// object for in, object.keys
// [] must to compute key
/*
for(let key in person){
    console.log(`${key} : ${person[key]}`)
}
*/
/*
const arr = Object.keys(person)  // returns array
for(let key of Object.keys(person)){
    console.log(person[key])
}
console.log(Array.isArray(arr), arr)
*/


// computed property

const key1 = 'objkey1'
const key2 = 'objkey2'
const val1 = 'myval1'
const val2 = 'myval2'
// now computed 
const obj = {
    [key1] : val1,
    [key2] : val2
}
// console.log(obj)   // key1 : objkey1 , key2 : objkey2


// spread operator in obj
const newArr = [...'vivek pandey']  // only use iteratble 
const obj1 = {
    key1 : val1,
    key2 : val2
}
// index -> key val=val
const newObject = {...obj,...obj1 , key68:67, ..."abc", ...['item1','item2']}  // both if same key 2nd enter only use
console.log(newObject)
