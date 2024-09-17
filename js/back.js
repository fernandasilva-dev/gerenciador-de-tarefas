document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Digite uma tarefa!');
        return;
    }

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');

    taskItem.innerHTML = `
        <button class="complete-btn">✔</button>
        <span>${taskText}</span>
    `;

    taskItem.querySelector('.complete-btn').addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    taskList.appendChild(taskItem);
    taskInput.value = '';
}
