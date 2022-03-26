const obj1 = {
    key1 : 'value1',
    key2 : 'value2'
}

const obj2 = Object.create(obj1)  // obj2 is empty but proto have obj1 property
// __proto__ == [[prototype]]
// prototype != __proto__
obj2.key3 = 'value3'
console.log(obj2.__proto__)  // obj1