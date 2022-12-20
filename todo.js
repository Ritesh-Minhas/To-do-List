 // Model
 let todos;

 // Retrieve localStorage
 const savedTodos = JSON.parse(localStorage.getItem('todos'));
 // Check if it's array/object
 if(Array.isArray(savedTodos)) {
     todos = savedTodos;
 } else {
     todos = [
     {
         title: 'Get Groceries',
         dueDate: '2022-12-31',
         id: 'id1'
     },

     {
         title: 'Wash Car', 
         dueDate: '2022-12-28',
         id: 'id2'
     },

     {
         title: 'Make Dinner',
         dueDate: '2022-12-30',
         id: 'id3'
     }
 ];
 }
 
 // Create a todo
 function createTodo(title, dueDate) {
     const id = '' + new Date().getTime();

     todos.push({
         title: title,
         dueDate: dueDate,
         id: id
     });

     saveTodos();
 }

 // Delete a todo
 function removeTodo(idToDelete) {
     todos = todos.filter(function (todo) {
          if (todo.id === idToDelete) {
             return false;
          } else {
             return true;
          }
     });

     saveTodos();
 }

 function saveTodos() {
     localStorage.setItem('todos', JSON.stringify(todos));
 }

 

 // Controller
 function addTodo() {
     const title = document.getElementById('todo-title').value;
     const dueDate = document.getElementById('todo-date').value;
     
     createTodo(title, dueDate);
     render();
 }

 function deleteTodo(event) {
     const deleteButton = event.target;
     const idToDelete = deleteButton.id;

     removeTodo(idToDelete);
     render();
 }

 // View
 function render() {
     // reset list
     document.getElementById('todo-list').innerHTML = '';

     todos.forEach(function (todo) {
         const element = document.createElement('div');
         element.innerText = todo.title + ' ' + todo.dueDate;

         const deleteButton = document.createElement('button');
         deleteButton.innerText = "Delete";
         deleteButton.style = "margin-left: 12px;"; 
         deleteButton.onclick = deleteTodo;
         deleteButton.id = todo.id;
         element.appendChild(deleteButton);

         const todoList = document.getElementById('todo-list');
         todoList.appendChild(element);
     });
 }

 render();