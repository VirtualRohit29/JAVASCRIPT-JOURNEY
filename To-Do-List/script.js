const addbtn = document.getElementById("addbtn");
const todoList = document.getElementById("todoList");
const inputbox = document.getElementById("inputbox");
let edittodo = null;

const addtodo = () => {
    const inputText = inputbox.value.trim();

    if (inputText.length <= 0) {
        alert("You must write something in your to-do");
        return;
    }

    if (addbtn.value == "Edit") {
        edittodo.target.previousElementSibling.innerHTML = inputText;
        updateLocalTodos(edittodo.target.previousElementSibling.innerHTML, inputText);
        addbtn.value = "Add";
        inputbox.value = "";
    } else {
        // Create li tag
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = inputText;
        li.appendChild(p);

        // Create Edit button
        const editbtn = document.createElement("button");
        editbtn.innerText = "Edit";
        editbtn.classList.add("btn", "editBtn");
        li.appendChild(editbtn);

        // Create Delete button
        const deletebtn = document.createElement("button");
        deletebtn.innerText = "remove";
        deletebtn.classList.add("btn", "deleteBtn");
        li.appendChild(deletebtn);

        todoList.appendChild(li);
        inputbox.value = ""; // Clear input

        savelocaltodos(inputText); // Save to local storage
    }
};

const updateTodo = (e) => {
    if (e.target.innerHTML === "remove") {
        e.target.parentElement.remove();
        removeLocalTodos(e.target.parentElement); // Remove from local storage
    }

    if (e.target.innerHTML === "Edit") {
        inputbox.value = e.target.previousElementSibling.innerHTML;
        e.target.previousElementSibling.contentEditable = true;
        inputbox.focus();
        addbtn.value = "Edit";
        edittodo = e;
    }
};

// ✅ Save Todos to Local Storage
const savelocaltodos = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
};

// ✅ Load Todos from Local Storage
const getlocaltodos = () => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach((todo) => {
        // Create li tag
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = todo;
        li.appendChild(p);

        // Create Edit button
        const editbtn = document.createElement("button");
        editbtn.innerText = "Edit";
        editbtn.classList.add("btn", "editBtn");
        li.appendChild(editbtn);

        // Create Delete button
        const deletebtn = document.createElement("button");
        deletebtn.innerText = "remove";
        deletebtn.classList.add("btn", "deleteBtn");
        li.appendChild(deletebtn);

        todoList.appendChild(li);
    });
};

// ✅ Remove Todo from Local Storage
const removeLocalTodos = (todoItem) => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos = todos.filter((todo) => todo !== todoItem.firstChild.innerHTML);
    localStorage.setItem("todos", JSON.stringify(todos));
};

// ✅ Edit Todo in Local Storage
const updateLocalTodos = (oldText, newText) => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    let index = todos.indexOf(oldText);
    if (index !== -1) {
        todos[index] = newText;
    }
    localStorage.setItem("todos", JSON.stringify(todos));
};

// ✅ Event Listeners
document.addEventListener("DOMContentLoaded", getlocaltodos);
addbtn.addEventListener("click", addtodo);
todoList.addEventListener("click", updateTodo);
