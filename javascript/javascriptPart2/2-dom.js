/*
let mainHeading = document.getElementById('main-heading')
let header = document.querySelectorAll('.nav-item')
let mainHeadingQuery = document.querySelector('div.headline h2') // div whose heading class ka h2 
*/
/*
// change text -> all text
console.log(mainHeading.textContent)
mainHeading.textContent = 'this is something else'
// inner text -> visible text only
mainHeading.innerText = 'hello'
*/
/*console.log(mainHeadingQuery)*/
//change element style
/*
mainHeadingQuery.style.color = 'blue'  // inline style add
mainHeading.style.backgroundColor = 'black'
mainHeading.style.border = '2px solid red'
*/

/*
let link = document.querySelector('a')
const inputElement = document.querySelector('.form-todo input')
console.log(inputElement.getAttribute('type'))
console.log(link.getAttribute('href'))
link.setAttribute('href','https//:google.com')
*/

// multiple item select
/*
const navItems = document.getElementsByClassName('nav-item')
const navItems1 = document.querySelectorAll('.nav-item')  // nodeList 
console.log(navItems)   // array like object html collection not array
*/



let navItems = document.getElementsByClassName('nav-item')  // cannot use foreach as not array
navItems = document.getElementsByTagName('a')  //html collection
/*
for(let i=0; i<navItems.length;i++){
    navItems[i].style.backgroundColor = '#fff';
    navItems[i].style.color = 'green';
    navItems[i].style.fontWeight = 'bold';
}
use for of
not foreach
*/
//convert into array
navItems = Array.from(navItems)
//now i can use foreach


navItems = document.querySelectorAll('a') // nodelist
// for each, for of , simple for use can use
