/*
// new keyword work 
// 1. empty object (this  = {})
// 2. return this (object)
// 3. Object.create(user.prototype)  // chainging prototype value equals to __proto__
function createUser(firstName,age){
    this.firstName = firstName
    this.age = age;
}
createUser.prototype.about = function (){
    console.log(this.firstName,this.age)
}
const user1 = new createUser('vivek',9)  // object
user1.about()
*/

// contructor function
function CreateUser(firstName,lastName,email,age,address){
    
    // bond create b/w object __proto__
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.age = age
    this.address = address
    
    // return this;  optional
}

CreateUser.prototype.about = function (){
    console.log(this.firstName,this.lastName,this.email,this.address)
}

CreateUser.prototype.is18 = function (){
    return this.age <=18
}

const user1 = new CreateUser('vivek','pandey','@gmail.com',20,'123')
user1.about()
// hasOwnProperty(key) => true/false 