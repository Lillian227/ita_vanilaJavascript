const saveBtn = document.querySelector("#saveBtn");
const todoInput = document.querySelector("#inputTodo");

let listArray = [];
const STORAGE_KEY = "todos";

const todoList = document.getElementById("todo-list");

function saveTodos() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(listArray));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    listArray = listArray.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}

function showTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id:Date.now()
    };
    listArray.push(newTodoObj);
    showTodo(newTodoObj);
    saveTodos();
}

saveBtn.addEventListener("click", handleTodoSubmit);
const savedTodos = localStorage.getItem(STORAGE_KEY);

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    listArray = parsedTodos;
    parsedTodos.forEach(showTodo);
}