import { useEffect } from 'react';
import './styleApp.css'
import api from './api'
import React, { useState } from 'react';

function TaskManager() {
  const [users, setUsers] = useState([])
  async function getUsers(){
  const usersApi = await api.get('/users')
   users = usersApi.data
  }

  useEffect(() => {
    getUsers()
  }, [])

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };

  const addTask = () => {
    if (newTask.trim() === '') {
      setError('Por favor, insira uma tarefa válida.');
      return;
    }

    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
    setError('');
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const userList = (index) => {
    
  }

  return (
    <div>
      <header>
        <h1>Gerenciador de Tarefas</h1>
        <div className="header-icons">
          <button id="dark-mode-toggle" aria-label="Alternar modo escuro" onClick={toggleDarkMode}>🌙</button>
          <svg onClick={userList} className="user-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" role="img" aria-label="Ícone do usuário">
            <path fill="white" d="M224 256A128 128 0 1 0 224 0a128 128 0 0 0 0 256zm89.6 32h-11.3c-22 10.3-46.6 16-72.3 16s-50.3-5.7-72.3-16h-11.3C67.6 288 0 355.6 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-82.8-67.6-150.4-150.4-150.4z" />
          </svg>
        </div>
      </header>

      <div className="accessibility-info" aria-live="polite">
        Dica de acessibilidade: Use a tecla "Tab" para navegar entre os botões e "Enter" para acioná-los.
      </div>

      <main>
        <div className="input-container">
          <input
            type="text"
            id="new-task"
            placeholder="Digite uma nova tarefa..."
            aria-label="Campo de texto para nova tarefa"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button id="add-task" aria-label="Adicionar nova tarefa" onClick={addTask}>+</button>
        </div>
        {error && <p className="error-message" id="error-message" role="alert">{error}</p>}

        <ul id="task-list" aria-live="polite">
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? 'completed' : ''}>
              <div>
                <button
                  className="complete-btn"
                  aria-label="Marcar tarefa como completa"
                  onClick={() => completeTask(index)}
                >
                  ✔
                </button>
                <span>{task.text}</span>
              </div>
              <button
                className="delete-btn"
                aria-label="Excluir tarefa"
                onClick={() => deleteTask(index)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" aria-hidden="true">
                  <path fill="currentColor" d="M135.2 17.7L152 0h144l16.8 17.7H432c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16V33.7c0-8.8 7.2-16 16-16h119.2zM80 512c-26.5 0-48-21.5-48-48V128h384v336c0 26.5-21.5 48-48 48H80z" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default TaskManager;
