const URL = 'https://jsonplaceholder.typicode.com/posts'
const xhr = new XMLHttpRequest()
// step 1 use open

xhr.open('GET',URL);
/*
xhr.onreadystatechange = function (){
    if(xhr.readyState == 4){
       const response = xhr.response
       const data = JSON.parse(response)
       console.log(data)
    }
}
*/
/*
xhr.onload = function (){
    const response = xhr.response
    const data = JSON.parse(response)
    console.log(data)
}
*/

//error handling
xhr.onload = function () {
    if(xhr.status>=200 && xhr.status<300){
        const data = JSON.parse(xhr.response)
        // console.log(data)
        const id = data[3].id
        const xhr1 = new XMLHttpRequest()
        xhr1.open('GET',`https://jsonplaceholder.typicode.com/posts/${id}`)
        xhr1.onload = () =>{
            const data = JSON.parse(xhr1.response)
            console.log(data)
        }
        
        xhr1.send()
    }else{
        console.log('something else error')
    }
}
// handle network error
xhr.onerror = () =>{
    console.log('network error')
}
xhr.send();


// callback hell