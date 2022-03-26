const h1 = document.querySelector('.heading1')
const h2 = document.querySelector('.heading2')
const h3 = document.querySelector('.heading3')
const h4 = document.querySelector('.heading4')
const h5 = document.querySelector('.heading5')
const h6 = document.querySelector('.heading6')
const h7 = document.querySelector('.heading7')

function changeText(element,text,color,time){
    return new Promise ( (resolve,reject) =>{
        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve()
            }else{
                reject()
            }
        },time)
    })
}
// return promise
const returnedPromise = changeText(h1,'one','red',1000)
returnedPromise
.then( ()=>{
    return changeText(h2,'two','purple',1000)
})
.then( ()=>{
    return changeText(h3,'three','violet',1000)
})
.then( ()=>{
    return changeText(h4,'four','green',1000)
})
.then( ()=>{
    return changeText(h5,'five','grey',1000)
})
.then( ()=>{
    return changeText(h6,'six','cyan',1000)
})
.then( ()=>{
    return changeText(h7,'seven','magenta',1000)
})
.catch(()=>{
    console.log('error')
})
