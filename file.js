
const toDoInput = document.querySelector('#toDoInput');
const buttonAdd = document.querySelector("#add");
const incomplete = document.querySelector('#incomplete'); 
const completed = document.querySelector('#completed'); 


// Event Listeners
buttonAdd.addEventListener("click", addToDo); 
incomplete.addEventListener("click", deleteButton); 

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

    // Move task to Already completed
    doneButton.addEventListener ('click', function() {
        const li = this.parentNode; 
        li.remove();
        completed.appendChild(li);
        doneButton.style.display = 'none';
    }); 

    deleteButton.addEventListener("click", function() {
        const li = this.parentNode;
        li.remove(); 
    })
    

    



}  



// Delete Function
function deleteButton(e) {
    const item = e.target; 
    if(item.classList[0] === 'delete-button') {
        const toDo = item.parentElement; 
        toDo.remove();
    }
};

// Completed list




const dateContainer = document.querySelector('#date');

const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();
const currentYear = currentDate.getFullYear();

dateContainer.innerHTML = `${currentDay}/${currentMonth}/${currentYear}`
console.log(currentDay, currentMonth, currentYear)


