import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") {
      alert("Please enter a task.");
      return;
    }
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div className="todo-header">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default TodoForm;
