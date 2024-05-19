import React, { useState } from 'react';

function ToDo({ addToDo }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [statusCode, setStatusCode] = useState('');

  const handleAddToDo = () => {
    if (name && description && statusCode) {
      addToDo({
        Name: name,
        Description: description,
        statusCode: statusCode
      });
      setName('');
      setDescription('');
      setStatusCode('');
    }
  };

  return (
    <div>
      <h3 className="HeadingToDo">My ToDo</h3>
      <input 
        type="text" 
        className="inputToDo" 
        placeholder="Add ToDo" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        className="DescriptionToDo" 
        placeholder="ToDo Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <select
        className="StatusToDo"
        value={statusCode}
        onChange={(e) => setStatusCode(e.target.value)}
        style={{ marginRight: '10px', height: '30px' }}
      >
        <option value="">Select Status</option>
        <option value="Completed">Completed</option>
        <option value="In Progress">In Progress</option>
        <option value="Yet to start">Yet to start</option>
        <option value="On Hold">On Hold</option>
      </select>
      <button className="AddToDobtn" onClick={handleAddToDo}>Add ToDo</button>
    </div>
  );
}

export default ToDo;
