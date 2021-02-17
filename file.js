<<<<<<< HEAD
const userInput = document.getElementById("newToDo");
const deleteButton = document.getElementById("delete");
const form = document.querySelector("form");
const incompleteTask = document.querySelector("#incomplete-tasks")


const deleteIcon =  ["fa-trash"];  //does it have to be a variable?
=======
>>>>>>> 44a9d220211ce25b21b03d7fea2822d94d4ab8ff

const toDoInput = document.querySelector('#toDoInput');
const buttonAdd = document.querySelector("#add");
const incomplete = document.querySelector('#incomplete'); 


// Event Listeners
buttonAdd.addEventListener("click", addToDo); 
incomplete.addEventListener("click", deleteDoneButton); 


<<<<<<< HEAD
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
=======
// Functions

function addToDo(event) {
    event.preventDefault(); 

// Create a div for toDo items 
    const incompleteList = document.createElement('div');
    incompleteList.classList.add('toDo'); 

    const newToDo = document.createElement('li'); 
    newToDo.innerText = toDoInput.value;
    newToDo.classList.add('toDoItem'); 
    incompleteList.appendChild(newToDo); 

    // Create Done Button 
    const doneButton = document.createElement('button'); 
    doneButton.innerHTML = '<i class="fas fa-check"></i>';
    doneButton.classList.add('done-button');
    incompleteList.appendChild(doneButton);

    // Create Delete Button 
    const deleteButton = document.createElement('button'); 
    deleteButton.innerHTML = '<i class="fas fa-trash"> </i>'
    deleteButton.classList.add('delete-button')
    incompleteList.appendChild(deleteButton)
    incomplete.appendChild(incompleteList);

    // clear Input value after adding new ToDo item 
    toDoInput.value = "";
}

// Delete Function
function deleteDoneButton(e) {
    const item = e.target; 
    if(item.classList[0] === 'delete-button') {
        const toDo = item.parentElement; 
        toDo.remove();
    }
   
}

>>>>>>> 44a9d220211ce25b21b03d7fea2822d94d4ab8ff

