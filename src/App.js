import React, { useState } from 'react';
import UserForm from './components/UserForm';
import TaskForm from './components/TaskForm';
import TaskDisplay from './components/TaskDisplay';

function App() {
  const [tasks, setTasks] = useState([]);
  const [userName, setUserName] = useState('');

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div> 
      {!userName ? (
        <UserForm setUserName={setUserName} />
      ) : (
        <div>
          <h2>Project Management Tool</h2>
          <p>Welcome, {userName}!</p>
          <TaskForm addTask={addTask} />
          <TaskDisplay tasks={tasks} deleteTask={deleteTask} />
        </div>
      )}
    </div>
  );
}

export default App;
