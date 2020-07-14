  document.addEventListener("DOMContentLoaded", () => {
    // your code here
    const form_element = document.getElementById("create-task-form");

    form_element.addEventListener("submit", (e) => {
      console.log(e);
      e.preventDefault();
      addTask();
    });
    
    function addTask(){
      const input_element = document.getElementById("new-task-description");
      console.log(input_element);
      let task_name = input_element.value;
      console.log(task_name);
    
      // Create the element
      const task_element = document.createElement("li");
      console.log(task_element);
      task_element.textContent = task_name;


      // Create the remove button
      const button = document.createElement("button");
      button.textContent = "X";
      button.addEventListener("click", (e) => {
        task_element.remove();
      });

      task_element.appendChild(button);

      // Add the new task to the div
      const parent_div = document.getElementById("list");
      console.log(parent_div);
      parent_div.appendChild(task_element);
    }
  });

