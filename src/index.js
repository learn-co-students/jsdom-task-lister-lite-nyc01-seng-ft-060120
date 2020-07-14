document.addEventListener("DOMContentLoaded", () => {

  let tasks = document.getElementById("tasks");
  let newTaskDescription = document.getElementById("new-task-description");
  let createTaskForm = document.getElementById("create-task-form");

  createTaskForm.addEventListener("submit", function(event){
     let newMessage = document.createElement("li");
     newMessage.innerHTML = newTaskDescription.value;
     tasks.appendChild(newMessage);
     newTaskDescription.value = "";
     //event.target.reset();
     event.preventDefault();
  })
})


