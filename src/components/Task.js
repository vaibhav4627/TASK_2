import React from 'react';

function Task({ task, deleteTask }) {
  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div>
      <p>Task: {task.name}</p>
      <p>Status: {task.status}</p>
      <p>Duration: {task.duration} hour(s)</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;

