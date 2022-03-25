//hoisting
// let and cost -> hoisted but not initalized space strict not global
// var 
/*
print('vivek pandey')

function print(n){
    console.log(n)
}

console.log(printing)

var printing = function (n) {
    console.log(n)
}

*/

// function inside function

const app = () => {
    const myFunc = () => {
        console.log('hello world')
    }
    const addTwo = (a,b) => {
        return a+b
    }

    myFunc()
    console.log(addTwo(45,34))
}

app()