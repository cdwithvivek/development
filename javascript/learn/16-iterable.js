// if for of loop applied => iterable  eg, string,array
// obj are not iterable
// array like object -> property length and have index access eg string
/*
for(let char of 'vivek')
    console.log(char)
*/

//sets -> iterable
// no index based access, unique items  // any iterable passesd in set
const numbers = new Set([1,2,4,4])
numbers.add(5)
numbers.add(10)
numbers.add(['item1','item2'])
numbers.add(['item1','item2']) // different
console.log(numbers.entries())

// Maps -> iterable
// ordered fashion , no duplicate key
// obj vs maps -> obj key -> string only
// map key -> any thing


