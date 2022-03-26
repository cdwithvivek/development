console.log('hello world')
const grandParent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')
/*
//event capturing
grandParent.addEventListener('click', ()=>{
    console.log('captured !!! on grandParent')
},true)

parent.addEventListener('click', ()=>{
    console.log('captured !!! on parent')
},true)

child.addEventListener('click', ()=>{
    console.log('captured !!! on  child')
},true)

document.body.addEventListener('click', ()=>{
    console.log('captured !!! on body')
},true)




// event bubbling/ propagation
grandParent.addEventListener('click', ()=>{
    console.log('you clicked on grandParent')
})

parent.addEventListener('click', ()=>{
    console.log('you clicked on parent')
})

child.addEventListener('click', ()=>{
    console.log('you clicked on  child')
})

document.body.addEventListener('click', ()=>{
    console.log('you clicked on body')
})
*/

// event delegation

grandParent.addEventListener('click', (e)=>{
    console.log('you clicked something!!!',e.target,e.currentTarget)
})