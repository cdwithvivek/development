// lexical scope
// check same scope not found -> lexical enviroment mai check
/*
const myVar = 'value3'
function myApp(){
    // const myVar = 'value1';
    function myfunc(){
        // const myVar = 'value2'
        console.log('inside',myVar)
    }
    console.log('myapp',myVar)
    myfunc();
}
console.log('outside',myVar)
myApp()
*/

//block and function scope
// block1
// let and const are block scoped
// var is function scoped
/*
{
    var firstName = 'vivek'
}
console.log(firstName)
// block2
{

}
*/

function myApp (){
    if(true){
        var firstName = 'vivek'
        console.log(firstName)
    }
    console.log(firstName)
}
// console.log(firstName)
myApp()