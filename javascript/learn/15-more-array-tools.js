const myArray = ['vivek', 'vishal', 'anup', 'amit']
const numbers = [2,4,6,8,10]
let ans = myArray.find((ele) => ele.length==4)
console.log(ans)
//every -> if all true then true else false
ans = numbers.every((ele) => ele%2==0)
console.log(ans)
// some -> if any true then true else false
ans = numbers.some( (ele) => ele%2==0)
// fill
let arr = new Array(10).fill(-1,2,6)  // [start,end)
console.log(arr)
// splice
// insert or delete
const myArr = ['item1','item2','item3']
myArr.splice(1,2) // (start) and count  change original array
myArr.splice(1,0,'inseted item','item3')
console.log(myArr)