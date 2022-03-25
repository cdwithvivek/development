const user1 = {
    firstName : 'vivek',
    age : 8,
    about : () =>{
        console.log(this.firstName,this.age)
    }
}

const user2 = {
    firstName : 'vishal',
    age : 20,
    about() {
        console.log(this.firstName,this.age)
    }
}
// arrow function no his this use surrounding  1 level up
// cannot change this binding
user1.about()
user2.about() // short hand