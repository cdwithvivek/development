const numbers = [5,9,1200,400,3000]
// sort change array  -> string mai sort ho raha hai
numbers.sort()   // ascii code 
console.log(numbers)
//ascending
numbers.sort( (a,b) => a-b)
// a-b return  1200 - 400 > 0 if we put 400 , 1200
// a-b return   5 - 9 < 0 then   5,9
console.log(numbers)
//descending
numbers.sort ( (a,b) => b-a)
console.log(numbers)

const products = [
    {Id : 1, name : 'p1', price : 1200},
    {Id : 2, name : 'p2', price : 200},
    {Id : 3, name : 'p3', price : 100},
    {Id : 4, name : 'p4', price : 120},
    {Id : 5, name : 'p5', price : 1200},
]

// price low to high
const lowToHigh = products.slice(0)
lowToHigh.sort( (a,b) =>  a.price - b.price)
console.log(lowToHigh)

// high to low
const highToLow = products.slice(0)
highToLow.sort( (a,b) =>  b.price - a.price)
console.log(highToLow)