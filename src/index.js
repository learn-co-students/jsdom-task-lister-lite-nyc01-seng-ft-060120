document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // const taskList = new taskList()
  const newTaskForm = document.getElementById('create-task-form')
  const newTaskDescription = document.getElementById('new-task-description')
  const taskContainer = document.getElementById('tasks')
newTaskForm.addEventListener('submit', newTask);
function newTask(event){
  event.preventDefault();
  const newLi = document.createElement('li')
  newLi.className = 'lists'
  const btn = document.createElement('button')
  btn.id = 'buttonRemove'
  newLi.className = 'newItems'
  newLi.innerText = newTaskDescription.value
  taskContainer.append(newLi)
  taskContainer.append(btn)
  event.target.reset()
}