import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function UserForm({ setUserName }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setUserName(name.trim());
    }
  };
  
  return (
    <div>
    <h3>Enter your name</h3>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
  );
}

export default UserForm;
