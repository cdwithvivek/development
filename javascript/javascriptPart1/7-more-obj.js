//Destructing
// array
const [val1] = ['vivek','pandey']
// console.log(val1)
// obj
const band = {
    bandName : 'led zepplin',
    famousSong : 'stairway to heaven',
    year : 1969,
    anotherSong : 'kashmir'
}
// different :newName or alias
const {bandName,famousSong, year:y, ...restProps } = band   // same key important
// console.log(bandName,famousSong,y,restProps)

const users = [
    {
        userId :1,
        firstName : 'vivek',
        gender : 'male'
    },
    {
        userId :2,
        firstName : 'vishal',
        gender : 'male'
    },
    {
        userId :3,
        firstName : 'anup',
        gender : 'male'
    }
]
/*
for(let user of users){
    for(let key in user){
        console.log(`${key}: ${user[key]} `)
    }
}
*/
// destructing imp
const [{firstName,gender},{userId}, {gender:gen}] = users
console.log(firstName,userId,gen)


