const form = document.querySelector('.form');
const taskInput =  document.querySelector('.taskInput');
const taskView =  document.querySelector('.tasks');
let tasks = JSON.parse(localStorage.getItem('tasks'));

if(!tasks) tasks = []

for(i of tasks) {
    taskView.appendChild(createTaskElement(tasks));
}

document.addEventListener('click', (e) => {
    const element = e.target;

    if(element.classList.contains('delete')) {
        deleteItem(element.parentElement)
    }

    return
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTask =  taskInput.value;

    if(!newTask) return;

    tasks.push(newTask);
    taskView.appendChild(createTaskElement(newTask));

    cleanInput();
    saveData(tasks);
    return;
})

function createTaskElement(text) {
    const newTask = document.createElement('li');
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Deletar';
    deleteButton.setAttribute('class',`delete`);
    newTask.innerText = text;
    newTask.classList.add(text);
    newTask.appendChild(deleteButton);
    return newTask;
}

function deleteItem(task) {
    tasks.splice(tasks.indexOf(task.className), 1);
    task.remove();

    saveData(tasks);
    return;
}

function cleanInput() {
    taskInput.value = '';
    taskInput.focus();
}

function saveData(tasks) {
    tasksJSON =  JSON.stringify(tasks);
    console.log(tasksJSON);
    localStorage.setItem('tasks', tasksJSON)
}
