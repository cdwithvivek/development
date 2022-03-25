/*
function hello(){
    console.log('hello world')
}
hello.myOwnProperty = 'very unique value'
console.log(hello.name)
console.log(hello.myOwnProperty)
// free space that is prototype -> {}
console.log(hello.prototype) // object  {}  only function provide prototype property
hello.prototype.abc = 'abc'
console.log(hello.prototype)
*/



function createUser(firstName,lastName,email,age,address){
    const user = Object.create(createUser.prototype);
    // bond create b/w object __proto__
    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    user.age = age
    user.address = address
    return user;
}

createUser.prototype.about = function (){
    console.log(this.firstName,this.lastName,this.email,this.address)
}

createUser.prototype.is18 = function (){
    return this.age <=18
}

const user = createUser('vivek','pandey','@gmail.com',20,'123')
user.about()
