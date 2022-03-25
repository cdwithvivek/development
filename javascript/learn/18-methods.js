// function inside object -> method

function personInfo() {
    console.log(`person name is ${this.firstName} and age is ${this.age}`)
}
const person = {
    firstName : 'vivek',
    age : 20,
    about : function () {
        console.log(`person name is ${this.firstName} and age is ${this.age}`)
    },
    about1 : personInfo
}

// direct firstName ,age -> eror not defined
// use this.firstName, this.age
// this value when run, this is object who is calling the function
person.about1()  // this is person obejct where firstName and age defined
personInfo()  // this is global object where no firstName and age
console.log(this)  // global object


function myFunc(){
    'use strict'
    console.log(this)
}
myFunc()