// local storage에 todo가 저장되어 있으면 화면에 출력
// todo form을 이벤트 리스닝해서 submit 발생 -> 화면에 출력, local storage에 저장
const todoForm = document.querySelector('.app-todoForm');
const todoInput = document.querySelector('.app-todoInput');
const todoList = document.querySelector('.app-todoList');
const todos = 'todoList';
const todoArray = [];

function removeTodo() {

}

function saveTodo() {
    localStorage.setItem(todos, JSON.stringify(todoArray)); 
}

function printTodo(str) {
    const li = document.createElement('li');
    const removeBtn = document.createElement('button');
    const span = document.createElement('span');
    const idx = todoArray.length + 1;

    removeBtn.innerText = '●';
    removeBtn.addEventListener('click', removeTodo);
    span.innerText = str;
    li.id = idx;

    li.appendChild(span);
    li.appendChild(removeBtn);
    todoList.appendChild(li);
//여기까지 화면 출력

//할 일을 배열에 저장
    const todoObj = {
        id: idx,
        todo: str,
    }

    todoArray.push(todoObj);
    saveTodo();
}

function handleEvent(e) {
    const currentValue = todoInput.value;

    printTodo(currentValue);

    todoInput.value = '';
  }

function init() {
    const sacedTodos = localStorage.getItem(todos);

    if (todoArray != null) {
        const parsedTodos = JSON.parse(savedTodos);

        parsedTodos.forEach(obj => {
            printTodo(obj.todo);
        });
    }

    todoForm.addEventListener('submit',handleEvent);
}

init();