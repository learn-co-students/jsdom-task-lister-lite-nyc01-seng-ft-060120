// VARIABLES
const newTask = document.getElementById("new-task-description"); //gets the input task bar

const ul = document.getElementById('list') //gets the ul element TODO LIST


let inputs = document.querySelectorAll('input') // gets an array of inputs

let submitButton = inputs[1] //lets us select button as the input we want


// FUNCTIONS

function addToDo(event){
   event.preventDefault();
    let li = document.createElement('li');
    li.innerText = newTask.value;
    ul.appendChild(li);
    // TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-btn');
    trashButton.innerHTML = "<b>X</b>"
    ul.appendChild(trashButton);
}

function deleteToDo(event){
  console.log(event.target)
  const item = event.target;
  if (item.class === 'trash-btn'){
    const todo = item.parentElement;
    todo.remove();
  }
}

// EVENT LISTENERS

submitButton.addEventListener('click', addToDo);
ul.addEventListener('click', deleteToDo);




document.addEventListener("DOMContentLoaded", () => {
  // your code here

});



// Psuedo code

// 1. find input field to enter text to submit
// 2. add that text to a sublist 
  //2a. Each task should be added at the end of the sublist (as bullets)
// 3. Be able to delete task from sublist via button