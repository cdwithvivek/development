//default parameter
/*
function sum(a,b=5){
    return a+b;
}
console.log(sum(5))
*/

// rest parameter
function sum(a,b,...c){
    console.log(a,b,c)
}
// sum(4,5,4,5,43,12)

// param destructring

const person = {
    firstName : 'vivek',
    gender : 'male'
}

function printDetails({firstName,gender}){
    // console.log(obj.firstName)
    // console.log(obj.gender)
    console.log(firstName)
    console.log(gender)
}

// printDetails(person)


//callback function

function myFunc(a){
    a()
    console.log('hello world')
}

function myNewFunc(){
    console.log('inside my new func')
}

myFunc(myNewFunc)
