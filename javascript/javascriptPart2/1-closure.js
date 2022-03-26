/*
function printFullName (firstName,lastName){
    function printName(){
        console.log(firstName,lastName)
    }
    return printName;
}
const ans = printFullName('vivek','pandey')
ans()
*/
const c = 'varc'
function hello(x){
    const a = 'varA'
    const b = 'varB'
    return function(){
        console.log(a,b,c,x)
    }
}
const ans = hello('arg')
ans()


function fun(){
    let counter = 0
    return function (){
        if(counter<1){
            console.log('counter less than 1')
            counter++
        }
        else{
            console.log('counter greater than 1')
        }
    }
}
const myfunc = fun()
myfunc()
myfunc()