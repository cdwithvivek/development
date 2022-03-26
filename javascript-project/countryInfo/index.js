let name = prompt('enter country name','india')
const URL = `https://restcountries.com/v3.1/name/${name}`
const info = {}
async function getCountry(url){
    const response = await fetch(url)
    const data = await response.json()
    
    return data
}
getCountry(URL)
.then( data => {
    console.log(data[0])
    info.countryName = data[0].name.common
    info.capital = data[0].capital[0]
    info.flag = data[0].flags.svg
    info.language =  Object.values(data[0].languages)[0]
    info.population = data[0].population
    info.currencies =  Object.values(data[0].currencies)[0].name
    // data
    putData(info)
    

    
})

// data got from api
function putData(info){
    const img = document.querySelector('img')
    const language = document.querySelector('#language')
    const population = document.querySelector('#population')
    const currency = document.querySelector('#currency')
    language.textContent = info.language
    population.textContent = info.population
    currency.textContent = info.currencies
    img.setAttribute('src',info.flag)
}




