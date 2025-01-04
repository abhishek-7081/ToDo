import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Popup from "./components/Popup";
import "./styles/App.css";

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const todayDate = new Date().toLocaleDateString();
    setTodos([...todos, { text, completed: false, date: todayDate }]);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    const newTask = prompt("Edit your task:", todos[index].text);
    if (newTask && newTask.trim() !== "") {
      const newTodos = [...todos];
      newTodos[index].text = newTask.trim();
      setTodos(newTodos);
    }
  };

  const deleteTodo = (index) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  };

  const viewDaywiseData = () => setShowPopup(true);

  const closePopup = () => setShowPopup(false);

  const daywiseData = todos.reduce((acc, todo) => {
    acc[todo.date] = acc[todo.date] || [];
    acc[todo.date].push(todo);
    return acc;
  }, {});

  return (
    <div className="app-container">
      <Header />
      <div className="todo-container">
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
        <div className="daywise-data">
          <button onClick={viewDaywiseData}>View Day-wise Data</button>
        </div>
      </div>
      {showPopup && <Popup daywiseData={daywiseData} closePopup={closePopup} />}
    </div>
  );
};

export default App;
