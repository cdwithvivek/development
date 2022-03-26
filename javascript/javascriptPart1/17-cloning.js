const obj1 =  {
    key1 : 'value1',
    key2 : 'value2'
    
}
const obj2 = {...obj1}  // new
const obj3 = Object.assign({},obj1)  // old
console.log(obj1)
console.log(obj2)
console.log(obj3)
// optional chaining ?.
console.log(obj1?.key1?.name)  // undefined not error
