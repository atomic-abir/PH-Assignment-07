import React from 'react';
import './TaskStatus.css';


function TaskStatus({ tasks, resolved, onComplete }) {
  return (
    <aside className="taskStatus">
      <h3 className="taskStatus__heading">Task Status</h3>
      {tasks.length === 0 ? (
        <p className="taskStatus__empty">No tasks in progress.</p>
      ) : (
        <div className="taskStatus__list">
          {tasks.map((task) => (
            <div key={task.id} className="taskStatus__card">
              <p className="taskStatus__taskTitle">{task.title}</p>
              <button
                className="taskStatus__completeButton"
                onClick={() => onComplete(task.id)}
              >
                Complete
              </button>
            </div>
          ))}
        </div>
      )}
      <h3 className="taskStatus__heading taskStatus__heading--resolved">Resolved Task</h3>
      {resolved.length === 0 ? (
        <p className="taskStatus__empty">No resolved tasks yet.</p>
      ) : (
        <ul className="taskStatus__resolvedList">
          {resolved.map((task) => (
            <li key={task.id} className="taskStatus__resolvedItem">
              {task.title}
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default TaskStatus;