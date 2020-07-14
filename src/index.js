document.addEventListener("DOMContentLoaded", () => {
  const form_element = getElement('#create-task-form')
  form_element.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask();
  })

  function addTask() {
    // Get the value from the input field and the select TAG value and create an li from that.
    let task_name = getElement('#new-task-description').value;

    let priority = getElement('#priority').value;
    const task_element = createTaskElement(task_name, priority);
    getElement(`#task-${priority}`).appendChild(task_element);
  }

  function createTaskElement(value, priority) {
    const li_element = document.createElement('li');
    li_element.textContent = value;

    // Create the remove button
    const button = document.createElement('i');
    button.classList = "fa fa-trash";
    button.addEventListener('click', (e) => {li_element.remove();})

    li_element.appendChild(button)
    return li_element;
  }

  function getElement(query) {
    return document.querySelector(query);
  }
});
