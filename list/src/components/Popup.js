import React from "react";

const Popup = ({ daywiseData, closePopup }) => (
  <>
    <div className="overlay" onClick={closePopup}></div>
    <div className="popup">
      <h3>Day-wise To-Do List</h3>
      <ul>
        {Object.entries(daywiseData).map(([date, tasks], index) => (
          <li key={index}>
            {date}
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
      <button onClick={closePopup}>Close</button>
    </div>
  </>
);

export default Popup;
