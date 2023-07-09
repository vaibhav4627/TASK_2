import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState('');
  const [duration, setDuration] = useState('');
  const [status, setStatus] = useState('Pending');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() && duration.trim()) {
      const newTask = {
        id: Date.now(),
        name: taskName.trim(),
        duration: duration.trim(),
        status: status
      };
      addTask(newTask);
      setTaskName('');
      setDuration('');
      setStatus('Pending');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task name"
      />
      <input
        type="text"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Enter duration"
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>
      <button type="submit" class="btn btn-primary">Add Task</button>
    </form>
  );
}

export default TaskForm;
