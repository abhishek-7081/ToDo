import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, editTodo, deleteTodo }) => {
  const [daywiseData, setDaywiseData] = useState(null); // To store grouped data
  const [isPopupVisible, setPopupVisible] = useState(false); // To control popup visibility
  const [popupTheme, setPopupTheme] = useState("white"); // To manage popup background color

  // Function to view day-wise data
  const viewDaywiseData = () => {
    if (!todos || todos.length === 0) {
      alert("No tasks available to display.");
      return;
    }

    // Group tasks by date
    const groupedData = todos.reduce((acc, todo) => {
      const date = todo.date || "No Date"; // Fallback for missing dates
      acc[date] = acc[date] || [];
      acc[date].push(todo);
      return acc;
    }, {});

    setDaywiseData(groupedData);
    setPopupVisible(true); // Show the popup
  };

  // Function to close the popup
  const closePopup = () => {
    setPopupVisible(false);
    setDaywiseData(null);
  };

  // Function to toggle the popup theme
  const toggleTheme = () => {
    const themes = ["white", "gray", "black"];
    const currentIndex = themes.indexOf(popupTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setPopupTheme(themes[nextIndex]);
  };

  return (
    <div className="todo-list-container">
      {/* Button to toggle theme */}
      <button onClick={toggleTheme} className="theme-toggle-btn">
        Change Theme
      </button>

      {/* Render Todo Items */}
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

      {/* Button to view day-wise data */}
      <button onClick={viewDaywiseData} className="view-daywise-btn">
        View Day-wise Data
      </button>

      {/* Popup for Day-wise Data */}
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup" style={{ backgroundColor: popupTheme }}>
            <h3>Day-wise To-Do List</h3>
            <ul>
              {Object.entries(daywiseData).map(([date, tasks]) => (
                <li key={date}>
                  <strong>{date}</strong>
                  <ul>
                    {tasks.map((task, idx) => (
                      <li key={idx}>
                        - {task.text} [{task.completed ? "Completed" : "Pending"}]
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <button onClick={closePopup} className="close-popup-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
