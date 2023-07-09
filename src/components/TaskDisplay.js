import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TaskDisplay({ tasks, deleteTask }) {
  return (
    <div>
      <h3>Task List</h3>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th>Duration</th>
              <th>Delete the task</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{task.status}</td>
                <td>{task.duration} hour(s)</td>
                <td>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="btn btn-secondary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TaskDisplay;
