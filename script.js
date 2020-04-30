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
list.addEventListener('click', checkedList);


function newTodo(e) {
  e.preventDefault();
  
  let todo = document.getElementById('addForm').value;

  // Creaate an li element in the DOM
  let li = document.createElement('li');

  // create a class
    li.className ="todoList";

    // add text node with the input value
    li.appendChild(document.createTextNode(todo));
    
    
  
    // create delete button on each todo list

    let TODO_CHECKBOX = document.createElement('input');

    TODO_CHECKBOX.type ="checkbox";
    // Add claas Name to button element
    // TODO_CHECKBOX.className = "btn btn-danger btn-sm float-right delete"
    
    // TODO_CHECKBOX.appendChild(document.createTextNode());
    li.appendChild(TODO_CHECKBOX);
  
    // Output the value to the DOM
    list.appendChild(li);
    console.log(TODO_CHECKBOX)

}

