// important array method
const numbers = [1,2,3,4,5]
// for each -> input callback
/*
function myfunc(number,index){
    console.log(`index is ${index} number is ${number}`)
}
*/
// 2 value pass -> value, index
// numbers.forEach(myfunc)

/*
numbers.forEach( (val,idx) =>{
    console.log(`index is ${idx} number is ${val}`)
})
*/

const users = [
    {firstName : 'vivek' , age : 20},
    {firstName : 'vishal' , age : 22},
    {firstName : 'anup' , age : 24}
]


users.forEach( (user,idx) =>{
    console.log(user.firstName,idx)
})



// maps -> input callback  value pass
// return value add into array
const newNumbers = numbers.map( (number,idx) => (idx+1)*number)
console.log(newNumbers)

// filter -> return boolean value only

const filterNumbers = numbers.filter( (number) => number%2)
// odd number
console.log(filterNumbers)

// reduce -> previous value , current value, idx
// aim : sum of all number
const reduceNumber = numbers.reduce( (accumulator,currentValue)=> {return accumulator+currentValue},100)
console.log(reduceNumber)
// if inital value passed then accumulator -> 100 , current value -> 0th index
// accumlator , currentValue, return
//     1      ,    2             3
//     3      ,    3             6
//     6      ,    4             10
//     10     ,    5             15
// finally ----> 15


const userCart  = [
    {Id : 1, Name : 'mobile', price : 12000},
    {Id : 2, Name : 'mobile', price : 2000},
    {Id : 2, Name : 'mobile', price : 15000},
]

const sum = userCart.reduce ( (accumulator,{price}) => accumulator+price,0)
console.log(sum)