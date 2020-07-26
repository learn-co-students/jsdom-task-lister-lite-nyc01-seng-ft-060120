
document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.querySelector('form')
  const taskInput = form.querySelector('#new-task-description')
  const taskUl = document.querySelector('#tasks')
  console.log(taskUl)
  
  console.log(taskInput)

  function addTask(){
    form.addEventListener("submit",(e) => {
        e.preventDefault();
        createTask()
        form.reset()
    })
  }

  function createTask(){
    const li = document.createElement('li')
    taskUl.appendChild(li)
    li.innerHTML = `${taskInput.value}  <button id="deleteTask">X</button>`
    deleteTask(li);
  }

  function deleteTask(li){
    li.addEventListener('click', (e) =>{
      li.remove();
    })
  }

addTask();
// deleteTask();
});