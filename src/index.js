document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submitButton = document.getElementById('create-task-form');
  const toDoList = document.querySelector('#tasks');
  const toDoForm = document.getElementById('create-task-form');

  function newDeleteButton() {
    //Create new button
    let button = document.createElement("button");
    button.innerHTML = "Delete";
    //Add event listener to button that will remove it's parent when clicked
    button.addEventListener("click", function(e) {
      let listItem = button.parentNode;
      listItem.remove();
    })
    return button
  }

  function setPriorityStyling(listItem, priority){
    if (priority === "high") {
      listItem.className += ("0 high-priority");
    } else if (priority === "medium") {
      listItem.className += ("1 med-priority");
    } else if (priority === "low" ) {
      listItem.className += ("2 low-priority");
    }
  }

  function sortList(ul){
    Array.from(ul.getElementsByTagName("li"))
      .sort((a,b) => a.className.localeCompare(b.className))
      .forEach(li => ul.appendChild(li));
  }

  // set an event listener for the submit button
  submitButton.addEventListener("submit", function(e) {
    //Prevent the default action
    e.preventDefault();
    // Set the value of the input box to a variable
    const newToDoInput = document.getElementById('new-task-description').value;
    const newToDoPriority = document.getElementById('new-task-priority').value
    //Take the text entered, and place into a new li in the todo list
    let newToDoItem = document.createElement('li');
    newToDoItem.innerHTML = `${newToDoInput} `;
    setPriorityStyling(newToDoItem, newToDoPriority);
    newToDoItem.append(newDeleteButton());
    toDoList.append(newToDoItem);
    // Reset the form
    toDoForm.reset();
    sortList(toDoList);
  });
});
