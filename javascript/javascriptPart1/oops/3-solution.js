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
    const user = Object.create(userMethods);
    // bond create b/w object 
    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    user.age = age
    user.address = address
    return user;
}
const user = createUser('vivek','pandey','@gmail.com',20,'123')
console.log(user.about())