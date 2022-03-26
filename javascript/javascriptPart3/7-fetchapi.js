const URL = 'https://jsonplaceholder.typicode.com/posts'
fetch(URL)
    .then( response =>{
        return response.json()
    })
    .then(data =>{
        const id =data[3].id
        return fetch(URL+'/'+id)
    })
    .then ( response =>{
        return response.json()
    })
    .then(data =>{
        console.log(data)
    })
    .catch(err =>{
        
        console.log(err)
    })