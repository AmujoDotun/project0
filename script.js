const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
console.log(itemCountSpan);
const form = document.getElementById('addForm');
const todo = document.getElementById('button');

todo.addEventListener('click', newTodo);
list.addEventListener('click', checkedList);
// list.addEventListener('click', countIt);

function newTodo(e) {
  e.preventDefault();
  
  let todo = document.getElementById('addForm').value;

  // Creaate an li element in the DOM
  let li = document.createElement('li');

  // create a class
    li.className ="todoList";

    // add text node with the input value
    // li.appendChild(document.createTextNode(todo));
    li.appendChild(document.createTextNode(todo))
    
      // itemCountSpan ++;
      // console.log(itemCountSpan ++);
    
    // create delete button on each todo list

    let TODO_CHECKBOX = document.createElement('input');

    TODO_CHECKBOX.type ="checkbox";
    // Add claas Name to button element
    TODO_CHECKBOX.className = "check done"
   
    
    // TODO_CHECKBOX.appendChild(document.createTextNode());
    li.appendChild(TODO_CHECKBOX);
  
    // Output the value to the DOM
    list.appendChild(li);
    console.log(TODO_CHECKBOX)

}

function checkedList(e)
{
  if(e.target.classList.contains('check'))
  {
    if(confirm("Are you sure you done with this task?") )
    {
      
      let li = e.target.parentElement;
      li.style.textDecoration = 'line-through';
    }
  }
}
 let count =0;
 console.log(count);
function countIt(e)
{
  for( count =0; count<TODO_CHECKBOX.length; count++)
  {
    console.log(TODO_CHECKBOX.length);
  }
}