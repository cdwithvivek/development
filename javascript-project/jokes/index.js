const url= 'https://icanhazdadjoke.com/'
const btn = document.querySelector('button')
btn.addEventListener('click',async function (){
    const res = await fetch(url,{
        headers :{
            'Accept' : 'application/json'
        }
    });
    const data = await res.json()
    const joke = document.getElementById('joke')
    joke.innerText = data.joke

});

