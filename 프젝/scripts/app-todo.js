// local storage에 todo가 저장되어 있으면 화면에 출력
// todo form을 이벤트 리스닝해서 submit 발생 -> 화면에 출력, local storage에 저장
const todoForm = document.querySelector('.app-todoForm');
const todoInput = document.querySelector('.app-todoInput');
const todos = 'todoList';
const todoArray = [];

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