// simplified
// es6 -> 2015 class are fake -> internally same

class CreateUser{
    constructor(firstName,lastName,email,age,address){
        console.log('constructor called')
        this.firstName=firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address =address;
    }
    about(){
        return 'hello'
    }
    is18(){
        return this.age >=18
    }
    sing(){
        console.log('singing')
    }
}

const user1 = new CreateUser('vivek','pandey','@gmail.com',5,'123')
