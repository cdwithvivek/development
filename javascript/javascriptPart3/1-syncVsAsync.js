// synchronous programming
/*
console.log('script start')
for(let i=1; i<=1000; i++)
    console.log('inside for loop')
console.log('script end')
*/
//async programming
// setTimeout
/*
console.log('script start')
const id = setTimeout(()=>{
    console.log('aysnc programming')
},0)  // minimum delay return time after it runs
console.log('script end',id._idleTimeout)
*/
//setInterval
/*
console.log('script start')
setInterval(() => {
    console.log(Math.random()*100)
}, 1000);
console.log('script end')
*/