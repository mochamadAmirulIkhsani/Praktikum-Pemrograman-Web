document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById('add-button');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    addButton.addEventListener('click', addTask);
  
    function addTask() {
      const taskText = todoInput.value.trim();
      if (taskText === '') return;
  
      const li = document.createElement('li');
      const textSpan = document.createElement('span');
      textSpan.textContent = taskText;
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', () => markComplete(li));
  
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('edit');
      editButton.addEventListener('click', () => editTask(textSpan));
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete');
      deleteButton.addEventListener('click', () => li.remove());
  
      li.appendChild(checkbox);
      li.appendChild(textSpan);
      li.appendChild(editButton);
      li.appendChild(deleteButton);
  
      todoList.appendChild(li);
      todoInput.value = '';
    }
  
    function editTask(textElement) {
      const newText = prompt("Edit your task", textElement.textContent);
      if (newText !== null && newText.trim() !== '') {
        textElement.textContent = newText.trim();
      }
    }
  
    function markComplete(taskElement) {
      taskElement.classList.toggle('completed');
    }
  });
  