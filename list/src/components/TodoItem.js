import React from "react";

const TodoItem = ({ todo, index, toggleComplete, editTodo, deleteTodo }) => (
  <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
    <span>{todo.text}</span>
    <div className="todo-actions">
      <button className="complete" onClick={() => toggleComplete(index)}>
        Complete
      </button>
      <button className="edit" onClick={() => editTodo(index)}>
        Edit
      </button>
      <button className="delete" onClick={() => deleteTodo(index)}>
        Delete
      </button>
    </div>
  </li>
);

export default TodoItem;
