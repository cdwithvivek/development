const URL = 'https://jsonplaceholder.typicode.com/posts'
fetch(URL)
    .then( response =>response.json())
    .then(data =>console.log(data[0]))
    .catch(err=>console.log(err))


async function getPosts() {
    const response = await fetch(URL)
    if(!response.ok){
        throw new Error('someting went wrong')
    }
    const data = await response.json()
    return data[0]
}    

getPosts().then( data => console.log(data))
.catch(err => console.log(err))