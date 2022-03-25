function hello(){
    console.log('hello world')
}
// hello.call()
const aboutFun = function(hobby, favMusic) {
    console.log(this.firstName,this.age,hobby,favMusic)
}
const user1 = {
    firstName : 'vivek',
    age : 10,
    about : function(hobby, favMusic) {
        console.log(this.firstName,this.age,hobby,favMusic)
    }
}
const user2 = {
    firstName : 'vishal',
    age : 9,

}
user1.about.call(user2,'guitar','pop')   // bind this to user2
user1.about.call()  // bind to nothing 
user1.about.call(user1,'piano','hiphop')

aboutFun.call(user1,'basketball','rock')


// apply is similar to call  argument in array
aboutFun.apply(user1,['guitar','bach'])

//bind -> return fun with binding later use
const func =aboutFun.bind(user1,'guitar','bach')
func()

// small warning
const myfunc = user1.about;   // not compile time run time this alocated
myfunc()