document.addEventListener("DOMContentLoaded", function(){

  console.log("The Dom has Loaded")
  
});



const submit = document.getElementById('submit');

submit.addEventListener("click", function(e){
  e.preventDefault();
  console.log(e.target);
});


const newTaskDescription = document.GetElementById("new-task-description")

function addTask(task){
  const taskLi = document.createElement("li")
  taskLi.className = "tasks"
  taskLi.innerHTML = newTaskDescription.value
  newTaskDescription.append(taskLi)
}




// function addTask(taskObject){
//   const taskLi = document.createElement("li")
//   taskLi.className = 'task'
//   taskLi.innerHTML = "Hi"
//   tasks.append(taskLi)
// }




