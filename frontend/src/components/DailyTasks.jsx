import React from "react";

const DailyTasks = ({ tasks, handleCheck }) => {
  console.log(tasks);
  return (
    <div className="form-group">
      <label>Daily Tasks:</label>
      {tasks.map((task, index) => (
        <div key={index}>
          <label>
            {task.label}
            <input
              type="checkbox"
              checked={task.checked}
              name={`dailyTask${index}`}
              onChange={() => handleCheck(index)}
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default DailyTasks;
