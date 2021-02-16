const userInput = document.getElementById("newToDo");
const deleteButton = document.getElementById("delete");
const form = document.querySelector("form");
const listSelection = document.querySelector("#incomplete-tasks")
const deleteIcon =  ["fa-trash"]; 


class ToDo {
    constructor () {
    this.inputTask = input  
    }
} 

// to create a list of ToDO items

const toDoItems = [];


function renderToDoItem(toDo) {
    const isIncomplete = toDo.Incomplete ? 'completed' : '';
    const node = document.createElement("li");
    node.setAttribute('class', `toDo-item ${isIncomplete}`)
    node.setAttribute('data-key', toDo.id);
    node.innerHTML = `
      <input id="${toDo.id}" type="checkbox" type="text"/>
      <label for="${toDo.id}" class="tick js-tick"></label>
      <span>${toDo.text}</span>
      <button class="delete-todo js-delete-todo">
      <use> <i class="fal fa-trash-alt"></i> </use>
      </button>
    `;

    listSelection.append(node);

}


function addToDoItem(text) {
    const toDo = {
        text, 
        checked: false, 
        id: Date.now(),
    }; 
    toDoItems.push(toDo); 
    renderToDoItem(toDo);
    }

   form.addEventListener("submit", event => {
       event.preventDefault(); 
       const text = userInput.value.trim();
       if (text !== '') {
           addToDoItem(text);
           userInput.value = '';
           userInput.focus(); 
       }
   });


