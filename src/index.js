

document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById("create-task-form")
  
  form.addEventListener("submit",function(e){
    // console.log(e.target[0])
    e.preventDefault();
    const task = e.target["new-task-description"].value
    const taskLi = document.createElement("li")
    taskLi.textContent = task

    const button = document.createElement("button")
    button.textContent = "X"
    taskLi.append(button)

    button.addEventListener("click",function(e){
      const taskLi = e.target.parentElement
      console.log(taskLi)
      
      taskLi.remove()
    });
    const tasks = document.getElementById("tasks")
    tasks.append(taskLi)
  });
    
    
  });
  
  
  
  
  // const textField = document.querySelector("input")
  // const ul = document.querySelector("ul");
  //   // console.log(e.target)
    
  //   const li = document.createElement("li");
  //   li.textContent = task;
  //   ul.appendChild(li);
    
  // //  console.log(ul)
    
  //   // textField.value = ""
 
 
 
 
 
 
 
 
  // Psuedo code
// 1. find input field to enter text to submit
// 2. add that text to a sublist 
  //2a. Each task should be added at the end of the sublist (as bullets)
// 3. Be able to delete task from sublist via button