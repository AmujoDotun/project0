const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

const form = document.getElementById('addForm');
const todo = document.getElementById('button');

todo.addEventListener('click', newTodo);


function newTodo(e) {
  e.preventDefault();
  
  let todo = document.getElementById('addForm').value;

  // Creaate an li element in the DOM
  let li = document.createElement('li');

  // create a class
    li.className ="todoList";

    // add text node with the input value
    let output = li.appendChild(document.createTextNode(todo));
    list.appendChild(li);
  console.log(li)
  

}
