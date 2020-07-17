document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form")
    form.addEventListener("submit", function(e){
        e.preventDefault()
        const task = e.target['new-task-description'].value
        const taskLi = document.createElement("li")
        taskLi.textContent = task
        const button = document.createElement("button")
        button.textContent = "X"
        console.log(button)

        button.addEventListener("click", function(e){
            const taskLi = e.target.parentElement
            taskLi.remove()
        })

        taskLi.append(button)
        const tasks = document.getElementById('tasks')
        tasks.appendChild(taskLi)
        
    })


   
});

/*
- As a user, the task string that I provided should appear on the DOM after the submit button has been activated.

1. add a submit listener to the form (not button)
2. get the text out of the form 
3. create a new html element li for the text
4. put text in li 
5. append list item to the ul 
6. add a delete button 
*/