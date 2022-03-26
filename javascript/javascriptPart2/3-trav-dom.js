// changing inner html of already create element
/*
const container = document.getElementsByTagName('div')[0]
container.innerHTML = 
`<h1>My heading</h1>
<p>Some useful information</p>
</div>
`
*/
// low performance when append good when whole html change

// better way
const body = document.querySelector('body')
const newDivItem = document.createElement('div')
const newDivItemText = document.createTextNode('this is div')
newDivItem.append(newDivItemText)
//either append or prepend
body.append(newDivItem)
// body.prepend(newDivItem)
// clone node

 





