// express convert function to varaible => function epression
const isEven = function (n){
    return n%2==0
}
// console.log(isEven(6))

// arrow function

const findTarget = (arr,tar) =>{
    for(let ele of arr)
        if(ele==tar)    return true
    return false    
}

console.log(findTarget([1,23,4,5,6],6))
console.log( ((a,b)=> a+b)(5,3) )  // immediate invoke
console.log ( (a => a)(10) )