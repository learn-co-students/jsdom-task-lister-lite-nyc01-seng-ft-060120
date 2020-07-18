document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form")
  const taskDescription = document.getElementById("new-task-description")
  const list = document.getElementById("tasks")


  form.addEventListener("submit", createNewTask)

  function createNewTask(e){
    e.preventDefault()
    const newTask = document.createElement("li")
    newTask.innerText = taskDescription.value
    appendTask(newTask)
  }

  function appendTask(task){
    list.appendChild(task)
    taskDescription.reset
  };
});
