// 1. function create obj and return
// 2. add key value
// 3. function return obj
/*
const userMethods = {
    about : function (){
        console.log(this.firstName,this.lastName,this.email,this.address)
    },
    is18 : function (){
        return this.age <=18
    }
}
function createUser(firstName,lastName,email,age,address){
    const user = {};
    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    user.age = age
    user.address = address
    user.about = userMethods.about   // reference store
    user.is18 = user.is18  // reference store

    return user;
}
// many defects  -> multiple function copy 

const user1 = createUser('vivek','pandey','vivek@gmail.com',8,'my address')
console.log(user1.about())

*/
// multiple time 
const userMethods = {
    about : function (){
        console.log(this.firstName,this.lastName,this.email,this.address)
    },
    is18 : function (){
        return this.age <=18
    },
    sing : function(){
        console.log('singing')
    }
}
function createUser(firstName,lastName,email,age,address){
    const user = {};
    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    user.age = age
    user.address = address
    user.about = userMethods.about   // reference store
    user.is18 = userMethods.is18  // reference store
    user.sing = userMethods.sing
    return user;
}

const user1 = createUser('vivek','pandey','vivek@gmail.com',8,'my address')
console.log(user1.sing())


