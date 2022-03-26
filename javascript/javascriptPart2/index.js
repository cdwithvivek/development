const todoForm = document.querySelector('.form-todo')
const todoInput = document.querySelector('.form-todo input[type=\'text\']')
const todoList = document.querySelector('.todo-list')

todoForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const newTodoText = todoInput.value
    const newLi = document.createElement('li')
    const newLiInnerHtml = `<span class="text">${newTodoText}</span><div class="todo-buttons"><button class="todo-btn done">Done</button><button class="todo-btn remove">Remove</button></div>`
    newLi.innerHTML = newLiInnerHtml
    todoList.append(newLi)
    
    // now event delegation

    todoInput.value=""
})

//event delegation on ul
// parent pai event listner lagaya hai target sai element aa jaiga
todoList.addEventListener('click',(e)=>{
    // check if user clicked on done
    if(e.target.classList.contains('remove')){
        // reach li
        const targetLi = e.target.parentNode.parentNode;
        targetLi.remove()
        console.log('you want to remove something')

    }
    else if(e.target.classList.contains('done')){
        // reach span
        const liSpan = e.target.parentNode.previousElementSibling
        liSpan.style.textDecoration = 'line-through'
    }

})