document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let list = document.getElementById("tasks");
  let newForm = document.getElementById("create-task-form");
  let newDescription = document.getElementById("new-task-description");
  let button = newForm.lastElementChild;


  button.addEventListener("click", function(e){
    e.preventDefault();
    let text = newDescription.value;
    let elm = document.createElement("li");
    elm.innerText = text;
    let b1 = document.createElement("button");
    b1.innerText = "x";
    elm.appendChild(b1);
    list.appendChild(elm);
    b1.addEventListener("click", function(e){
      let parent = e.target.parentNode;
      parent.remove();
    })
  })
});


