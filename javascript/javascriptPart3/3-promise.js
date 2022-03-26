// promise
const bucket = ['coffee','chips','vegetables','rice','salt']
// produced promise
function ricePromise () {
    return new Promise( (resolve,reject) =>{
    if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')){
        // can resolve promise as all ingrediants available
        resolve('Fried rice made')
    }
    else{
        reject('Cannot make fried rice')
    }
})
}

// consume
// 1st
/*
friedRicePromise.then( 
    //resolve
    (data)=>{
    console.log('lets eat ',data)
}, 
//reject
(err) =>{
    console.log(err)
})
*/
// if microqueue and callbackqueue have data -> then microqueue  
setTimeout(()=>{
    console.log("hello settimeout")
},0)

ricePromise()
.then(data => console.log(data))
.catch( err => console.log(err))

// promise solve and reject after second
function myPromise (){
    return new Promise ((res,rej) =>{
        const value = true
        setTimeout(()=>{
            if(value)
                res()
            else
                rej()    
        },2000)
    })
}

myPromise()
.then((data)=>console.log('resolved'))
.catch((err) => console.log('rejected'))


// Promise.resolve(5)  -> return promise
// then method always return promise
function foo(){
    return new Promise((res,rej) =>{
        res('foo')
    })
}

foo()
.then(data =>{
    console.log(data)
    data+= 'bar'
    return data
})
.then(data =>{
    console.log(data)
})

