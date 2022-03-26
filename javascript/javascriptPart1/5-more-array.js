// primitive vs reference data type
let num1 = 6
let num2 = num1;
num1 += 1
// console.log(num1,num2)  // deep copy 

// reference type
let arr1 = ['item1', 'item2']
let arr2 = arr1
// arr1.push('item3')
//console.log(arr1, arr2)  // same referece both changed 
// actually both arr same heap store but reference stack (same for both)

// to solve
arr2 = arr1.slice(0) // fasted
arr2 = [].concat(arr1)
arr2 = [...arr1]  // spread operator
arr1.push('item3')
// console.log(arr1,arr2)

let arr3 = arr1.slice(0).concat(['item4', 'item4'])
arr3 = [...arr1, 'item4', 'item5']  // spread operator
// console.log(arr3)

// loops in array

const fruits = ['apple','mango', 'grapes', 'banana']
// const reference cannot be changed array will not be const
fruits.push('pears')
/*
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}
*/


// for of
/*
for( let ele of fruits){
    console.log(ele)
}
*/

// for in
/*
for(let idx in fruits){
    console.log(idx)
}
*/


// array destructring

const myArray = ['val1','val2','val3','val4','val5']
const [myval1,,myval2, ...newArray] = myArray  // skiped
console.log(myval1,myval2,newArray)