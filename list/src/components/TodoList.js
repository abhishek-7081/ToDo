import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos = [], toggleComplete, editTodo, deleteTodo }) => {
  return (
    <div className="todo-list-container">
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
