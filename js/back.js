document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    const errorMessage = document.getElementById('error-message');

    if (taskText === '') {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Por favor, insira uma tarefa válida.';
        return;
    }

    errorMessage.style.display = 'none';

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');

    taskItem.innerHTML = `
        <div>
            <button class="complete-btn" aria-label="Marcar tarefa como completa">✔</button>
            <span>${taskText}</span>
        </div>
        <!-- Ícone de lixeira por SVG inline -->
        <button class="delete-btn" aria-label="Excluir tarefa">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" aria-hidden="true">
                <path fill="currentColor" d="M135.2 17.7L152 0h144l16.8 17.7H432c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16V33.7c0-8.8 7.2-16 16-16h119.2zM80 512c-26.5 0-48-21.5-48-48V128h384v336c0 26.5-21.5 48-48 48H80z"/>
            </svg>
        </button>
    `;

    taskItem.querySelector('.complete-btn').addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    taskItem.querySelector('.delete-btn').addEventListener('click', function() {
        taskItem.remove();
    });

    taskList.appendChild(taskItem);

    taskInput.value = '';
    taskInput.focus();
}