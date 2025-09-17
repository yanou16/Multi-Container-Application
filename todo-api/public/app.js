document.addEventListener('DOMContentLoaded', () => {
  // Éléments DOM
  const todoInput = document.getElementById('todo-input');
  const addBtn = document.getElementById('add-btn');
  const todoList = document.getElementById('todo-list');
  
  // Charger les todos
  loadTodos();
  
  // Event listeners
  addBtn.addEventListener('click', addTodo);
  todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
  });
  
  // Fonctions
  async function loadTodos() {
    try {
      const response = await fetch('/todos');
      const todos = await response.json();
      
      todoList.innerHTML = '';
      todos.forEach(todo => {
        addTodoToDOM(todo);
      });
    } catch (error) {
      console.error('Erreur lors du chargement des todos:', error);
    }
  }
  
  async function addTodo() {
    const title = todoInput.value.trim();
    if (!title) return;
    
    try {
      const response = await fetch('/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title })
      });
      
      const newTodo = await response.json();
      addTodoToDOM(newTodo);
      todoInput.value = '';
    } catch (error) {
      console.error('Erreur lors de l\'ajout du todo:', error);
    }
  }
  
  function addTodoToDOM(todo) {
    const li = document.createElement('li');
    li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
    li.dataset.id = todo._id;
    
    li.innerHTML = `
      <span class="todo-text">${todo.title}</span>
      <div class="todo-actions">
        <button class="complete-btn">${todo.completed ? 'Annuler' : 'Terminer'}</button>
        <button class="edit-btn">Modifier</button>
        <button class="delete-btn">Supprimer</button>
      </div>
    `;
    
    // Event listeners pour les boutons
    const completeBtn = li.querySelector('.complete-btn');
    const editBtn = li.querySelector('.edit-btn');
    const deleteBtn = li.querySelector('.delete-btn');
    
    completeBtn.addEventListener('click', () => toggleComplete(todo._id, !todo.completed));
    editBtn.addEventListener('click', () => editTodo(todo._id, li));
    deleteBtn.addEventListener('click', () => deleteTodo(todo._id, li));
    
    todoList.appendChild(li);
  }
  
  async function toggleComplete(id, completed) {
    try {
      const response = await fetch(`/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ completed })
      });
      
      if (response.ok) {
        const li = document.querySelector(`.todo-item[data-id="${id}"]`);
        if (completed) {
          li.classList.add('completed');
          li.querySelector('.complete-btn').textContent = 'Annuler';
        } else {
          li.classList.remove('completed');
          li.querySelector('.complete-btn').textContent = 'Terminer';
        }
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du todo:', error);
    }
  }
  
  async function editTodo(id, li) {
    const todoText = li.querySelector('.todo-text').textContent;
    const newTitle = prompt('Modifier la tâche:', todoText);
    
    if (newTitle !== null && newTitle.trim() !== '') {
      try {
        const response = await fetch(`/todos/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title: newTitle })
        });
        
        if (response.ok) {
          li.querySelector('.todo-text').textContent = newTitle;
        }
      } catch (error) {
        console.error('Erreur lors de la modification du todo:', error);
      }
    }
  }
  
  async function deleteTodo(id, li) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette tâche?')) {
      try {
        const response = await fetch(`/todos/${id}`, {
          method: 'DELETE'
        });
        
        if (response.ok) {
          li.remove();
        }
      } catch (error) {
        console.error('Erreur lors de la suppression du todo:', error);
      }
    }
  }
});