/*
// dimension  getBoundingClientRect()
// event -> activity

const btn = document.querySelector('div.headline button')
console.log(btn)

// how to add event
//1.  add inside html attribute -> onclick = 'code' not use
//2. select element addEventListner
btn.addEventListener('click',function (){
    console.log(this.className)
})
// if arrow function -> one level up that is window object

*/
/*
let btns = document.querySelectorAll('button')
let firstBtn = document.querySelector('button')
// multiple event listener
console.log('start')
for(let btn of btns){
    btn.addEventListener('click', (event) =>{
        for(let i=0; i<= 1000000000;i++){}
        console.log(event.currentTarget)  // event listner kispai lagaya tha
        console.log(event.target) // kon sai element sai fire kiya tha
    })
}

for(let i=0; i<=1000000000;i++){}
console.log('end')
/*
firstBtn.addEventListener('click', (event)=>{
    console.log(event)
})
*/


let btns = document.querySelectorAll('button')
for(let btn of btns){
    btn.addEventListener('click', (event) =>{
        console.log(event.currentTarget)  // event listner kispai lagaya tha
        event.target.style.backgroundColor = 'yellow'
        event.target.style.color = '#333'
    })
}
