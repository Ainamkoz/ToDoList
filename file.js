const toDoInput = document.querySelector('#toDoInput');
const buttonAdd = document.querySelector("#add");
const incomplete = document.querySelector('#incomplete'); 


// Event Listeners
buttonAdd.addEventListener("click", addToDo); 
incomplete.addEventListener("click", deleteDoneButton); 


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
