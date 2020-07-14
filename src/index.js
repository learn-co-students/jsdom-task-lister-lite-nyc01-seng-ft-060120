document.addEventListener("DOMContentLoaded", function(){

  console.log("The Dom has Loaded")
  

   //form and relevant input fields
   const form = document.getElementById("create-task-form");
 
   //attach event listeners
   form.addEventListener("submit", addTask);
});

function addTask(task){
  task.preventDefault();  // preventing default action from "submit" action on line 10 that reloads the page
  const newTaskDescription = document.getElementById("new-task-description"); // the user input field

  const taskLi = document.createElement("li") // creating "li" element
  taskLi.innerText = newTaskDescription.value

  appendTask(taskLi)
  task.target.reset
}

function appendTask(taskObj) {
  document.getElementById("tasks").appendChild(taskObj)
}