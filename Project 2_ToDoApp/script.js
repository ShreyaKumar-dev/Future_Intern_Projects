document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const pendingTasksList = document.getElementById('pendingTasksList');
  const completedTasksList = document.getElementById('completedTasksList');

  function formatDate(date) {
    const options = {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    };
    return date.toLocaleDateString(undefined, options);
  }

  function addTask(taskText, timestamp = new Date(), isCompleted = false) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const taskDescription = document.createElement('span');
    taskDescription.textContent = taskText;
    taskDescription.classList.add('task-description');

    const taskTimestamp = document.createElement('span');
    taskTimestamp.textContent = formatDate(timestamp);
    taskTimestamp.classList.add('task-timestamp');

    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');

    const completeCheckbox = document.createElement('input');
    completeCheckbox.type = 'checkbox';
    completeCheckbox.checked = isCompleted;

    // const editBtn = document.createElement('button');
    // editBtn.textContent = 'Edit';
    // editBtn.classList.add('edit-btn');

    // const deleteBtn = document.createElement('button');
    // deleteBtn.textContent = 'Delete';
    // deleteBtn.classList.add('delete-btn');

    const editBtn = document.createElement('button');
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.classList.add('edit-btn');

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.classList.add('delete-btn');

    taskActions.appendChild(completeCheckbox);
    taskActions.appendChild(editBtn);
    taskActions.appendChild(deleteBtn);

    taskItem.appendChild(taskDescription);
    taskItem.appendChild(taskTimestamp);
    taskItem.appendChild(taskActions);

    if (isCompleted) {
      taskItem.classList.add('completed');
      completedTasksList.appendChild(taskItem);
    } else {
      pendingTasksList.appendChild(taskItem);
    }

    completeCheckbox.addEventListener('change', () => {
      const now = new Date();
      taskTimestamp.textContent = formatDate(now);

      if (completeCheckbox.checked) {
        taskItem.classList.add('completed');
        completedTasksList.appendChild(taskItem);
      } else {
        taskItem.classList.remove('completed');
        pendingTasksList.appendChild(taskItem);
      }
    });

    editBtn.addEventListener('click', () => {
      const newTaskText = prompt('Edit your task', taskDescription.textContent);
      if (newTaskText) {
        taskDescription.textContent = newTaskText;
      }
    });

    deleteBtn.addEventListener('click', () => {
      taskItem.remove();
    });
  }

  addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      addTask(taskText);
      taskInput.value = '';
    }
  });

  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const taskText = taskInput.value.trim();
      if (taskText) {
        addTask(taskText);
        taskInput.value = '';
      }
    }
  });
});
