const userInput = document.getElementById("newToDo");
const deleteButton = document.getElementById("delete");
const form = document.querySelector("form");
const incompleteTask = document.querySelector("#incomplete-tasks")


const deleteIcon =  ["fa-trash"];  //does it have to be a variable?


class ToDo {
    constructor () {
    this.inputTask = input  
    }
} 

// to create a list of ToDO items

const toDoItems = [];

deleteButton.className = 'btn btn-danger btn-sm float-right delete';




/*
function renderToDoItem(toDo) {
    const isIncomplete = toDo.Incomplete ? 'completed' : '';
    const task = document.createElement("li");
    task.setAttribute('class', `toDo-item ${isIncomplete}`)
    task.setAttribute('data-key', toDo.id);
    task.innerHTML = `
      <input id="${toDo.id}" type="checkbox" type="text"/>
      <label for="${toDo.id}" class="tick js-tick"></label>
      <span>${toDo.text}</span>
      <button class="btn btn-danger btn-sm float-right delete">
      </button>
    `;

    incompleteTask.append(task);
}

function addToDoItem(text) {
    const toDo = {
        text, 
        checked: false,    //?
        id: Date.now(),
    }; 
    toDoItems.push(toDo); 
    renderToDoItem(toDo);
    }

function moveItem(){
  
}

function deleteItem

form.addEventListener("submit", event => {
       event.preventDefault(); 
       const text = userInput.value.trim();
       if (text !== '') {
           addToDoItem(text);
           userInput.value = '';
 //  ?     userInput.focus(); 
       }
   });
*/

