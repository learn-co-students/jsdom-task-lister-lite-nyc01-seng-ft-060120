document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.getElementById("tasks");
  const taskForm = document.getElementById("create-task-form");
  const taskLi = document.createElement("li");
  const newTaskDescription = document.getElementById("new-task-description");
  const button = document.createElement("button");
  const priority = document.getElementById("priority");
  let x  = document.getElementById("priority").value;
  taskForm.addEventListener("submit", function(e) {
    e.preventDefault()
    taskLi.className = "task"
    taskLi.innerHTML = newTaskDescription.value 
    button.className = "button"
    button.innerHTML = "X"
    console.dir(taskLi.innerHTML)
    function colors() {
      e.preventDefault
      if (x === "1") {
        taskLi.style.color = "red"
      }
      if (x === "2") {
        taskLi.style.color = "orange"
      }
      if (x === "3") {
        taskLi.style.color = "green"
      }
 
      }
    taskList.append(taskLi);
    taskLi.append(button);
  });
  taskList.addEventListener("click", function(e) {
    e.preventDefault()
    taskLi.remove();
  });
});