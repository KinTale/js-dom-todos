const todoList = document.querySelector("#todo-list")
const todoForm = document.querySelector("form")



const addTodo = (todo) => {
    const liEL = document.createElement("li")
    liEL.innerText = todo.title

    liEL.addEventListener("click", function (list) {
        liEL.className = "completed"

    })
    console.log(todo)
    todoList.append(liEL)
}

const renderTodo = (todos) => {
    todos.forEach(todo => addTodo(todo))
    console.log(todos)
}


const listenTodoForm = () => {
    todoForm.addEventListener("submit", function (event) {
        event.preventDefault()

        const todo = {
            title: todoForm.title.value,
            completed: false
        }

        const options = {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        }

        fetch("http://localhost:3000/todos", options)
        
            .then(response => response.json())
            .then(todo => addTodo(todo))
    })

    todoForm.reset()
}



const data = () => {
    listenTodoForm()

    fetch("http://localhost:3000/todos")
        .then(response => response.json())
        .then(todos => renderTodo(todos))
}


data()