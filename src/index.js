document.addEventListener("DOMContentLoaded", () => {
  
  const taskForm = document.getElementById("create-task-form")
  taskForm.addEventListener("submit",function(e){
    e.preventDefault()
    let newTask = document.getElementById('new-task-description').value
    
    const ul  = document.getElementById("tasks")
    const li = document.createElement('li')
    ul.appendChild(li);
    li.innerText = newTask
    taskForm.reset();
  })
  


});
  




// document.addEventListener("DOMContentLoaded", () => {

// let button = document.getElementById('create-new-form')
// button.addEventListener('submit', function(e){
// e.preventDefault()
// let newTask = document.getElementById('new-task-description').value
// const ul = document.getElementById('tasks');
// const li = document.createElement('li')
// li.appendChild(document.createTextNode(newTask));
// ul.appendChild(li);
// let form = document.getElementById('create-task-form').reset();
// })

// });