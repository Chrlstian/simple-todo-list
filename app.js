

const todoList = [];

function renderTodoList(){

    let todoHtml = "";

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div> 
        <button onclick="
        todoList.splice(${i},1); 
        renderTodoList();
        " class="delete-todo-button">Delete</button></li>`;
        todoHtml += html;
    }
    document.querySelector('.todoList').innerHTML = todoHtml;
}

function addTodo(){
    
    const input1Elem = document.querySelector('.js-name-input');
    const name = input1Elem.value;

    const dateInputElement = document.querySelector('.dueDate-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name: name,
        dueDate: dueDate
    });

    input1Elem.value = "";
    renderTodoList();
}



  




