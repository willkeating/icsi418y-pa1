
/* HW1 js*/

const form = document.querySelector("#task-form");//create var to store ref to html element in doc/page, use css id to target it
const taskInput = document.querySelector("#task-input");//""
const priorityInput = document.querySelector("#priority");//""
const taskList = document.querySelector("#task-list");//""
const tasks= [];/* make empty array, "tasks"*/

form.addEventListener("submit", function (event){/* add event listener to form for submit*/
    event.preventDefault();/* normal form handling not needed and we lose tasks on refresh*/

    const taskName = taskInput.value;
    const taskPriority = priorityInput.value;

    if (taskName === "") {
        return;
    }
    const task = {/* make task obj*/
        name: taskName,
        priority: taskPriority,
        completed: false
    };
    tasks.push(task);/* add the task to array*/
    displayTasks();/* update tasks in dom*/
});

function displayTasks(){
    taskList.innerHTML = "";/*clear displayed tasks before loading*/

    for (let i = 0; i < tasks.length; i++){/* need let in js to create i*/
        const task = tasks[i];/*grab task obj w/ index of loop from array of tasks*/

        const taskElement = document.createElement("div");/*make div for the task*/
        taskElement.classList.add("task-element");/* add class to style and avoid id collision*/
        if (task.completed){
            taskElement.classList.add("completed");/* add css class to style a completed task*/
        }

        const taskText = document.createElement("span");
        taskText.innerText = task.name + ": " + task.priority;

        const completeButton = document.createElement("button");/* make btn*/
        completeButton.textContent = "complete task";
        completeButton.addEventListener("click", function(){/* change the completed state to true and render list on click of complete task btn*/
            task.completed = true;
            displayTasks();
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "delete task";
        deleteButton.addEventListener("click", function(){
            tasks.splice(i, 1); /* delete one item at i*/
            displayTasks();/* update*/
        });

        /*put each of the children in the taskElement, then add the element to the list*/
        taskElement.appendChild(taskText);
        taskElement.appendChild(completeButton);
        taskElement.appendChild(deleteButton);
        taskList.appendChild(taskElement);
    }
}
