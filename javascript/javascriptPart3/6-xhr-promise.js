const URL = 'https://jsonplaceholder.typicode.com/posts'

function sendRequest (method,url){
    return new Promise( (resolve,reject) =>{
        const xhr = new XMLHttpRequest()
        xhr.open(method,url)
        xhr.onload = function (){
            if(xhr.status<=200 && xhr.status< 300){
                resolve(xhr.response)
            }else{
                reject(new Error('something went wrong'))
            }
        }
        xhr.onerror = function (){
            reject (new Error('network error'))
        }
        xhr.send()
    } )
}

sendRequest('GET',URL)
.then( response =>{
    const data = JSON.parse(response)
    return sendRequest('GET',URL+'/'+data[3].id)
})
.then( response =>{
    console.log(response)
})
.catch( err =>{
    console.log(err)
})