import React from 'react';
import '../App.css';

function ToDoTable({ todos, onRemove }) {
  return (
    <ul className="todo-table">
      {todos.length === 0 ? (
        <li>No todos available</li>
      ) : (
        todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => onRemove(todo.id)}>Remove</button>
          </li>
        ))
      )}
    </ul>
  );
}

export default ToDoTable;
