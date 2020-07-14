document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form_element = getElement('#create-task-form')
  form_element.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask();
    sortTasks();
  })

  function addTask() {
    const input_element = getElement('#new-task-description');

    const task_element = createLi(input_element.value,
      getElement('#priority').value)

    getElement('#tasks').appendChild(task_element);

  }

  function createLi(value, priority) {
    const li_element = document.createElement('li');
    li_element.textContent = value;

    let color = 'green';
    if (priority === 'high') {color = 'red';}
    if (priority === 'medium') {color = 'gold';}

    li_element.style.color = color;

    // Create the remove button
    const button = document.createElement('i');
    button.classList = "fa fa-trash";
    button.addEventListener('click', (e) => {li_element.remove();})

    li_element.appendChild(button)


    return li_element;
  }

  function getItems(number) {
    return elements[number]
  }

  // May the gods forgive me for this code.
  function sortTasks() {
    const list_container = getElement('#tasks');
    const priority = {'green' : 0, 'gold' : 1, 'red' : 2};
    let childrens = list_container.children;

    let elements = [] // Store the sorted elements
    for (let i = 0; i < childrens.length; i++) {
      let children = childrens[i];
      let priority_number = priority[children.style.color]
      if (elements[priority_number] == null) {
        elements[priority_number] = []
      }
      elements[priority_number].push({'priority' : priority_number, 'value' : children.textContent})
    }

    const pp = {0 : 'low', 1 : 'medium', 2 : 'high'}
    list_container.innerHTML = "";

    for (let i = 0; i <= 2; i++) {
      let arr = elements[i]
      if (arr == null) {continue;}
      arr.forEach((item, i) => {
        list_container.appendChild(createLi(item.value, pp[item.priority]));
      });
    }
  }

  function getElement(query) {
    return document.querySelector(query);
  }
});
