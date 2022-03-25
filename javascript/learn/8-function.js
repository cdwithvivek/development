// most important topics 
// function
// DRY -> don't repeat your self
function singHappyBirthday() {
    console.log(`happy birthday to you `)
}
function twoPlusFour(){
    return  2+4
}
// singHappyBirthday()
let val = twoPlusFour()
// console.log(val)

//using arguments and passing parameters

function sum(a,b) {
    console.log(a+b)
}
// sum(2,9)

// odd or even

function isEven(n){
    return !(n%2)
}
// console.log(Boolean(isEven(5)))
// console.log(Boolean(isEven(8)))

function firstChar(str){
    return str[0]
}
// console.log(firstChar('vivek'))