const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-Btn");
const list = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

rendertodos();

addBtn.addEventListener("click", addTodo);

function addTodo() {
    if (input.value === "") return;

    const todo = {
        text: input.value,
        completed: false   
    };
todo.push(todos);
savetodos();
rendertodos();
input.value = "";
}

function rendertodos() {
    list.innerHTML = "";

    todos.forEach((todo, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
        <span class="${todo.completed ? "completed" : ""}">
        `
    })
}