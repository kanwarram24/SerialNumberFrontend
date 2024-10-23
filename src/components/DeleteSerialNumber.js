import React, { useState } from 'react';
import axios from 'axios';

const DeleteSerialNumber = () => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/serialnumbers/${id}`, {
        auth: { username: 'admin', password: 'password' }
      });
      setMessage('Serial number deleted successfully!');
    } catch (error) {
      console.error('Error deleting serial number:', error);
      setMessage('Failed to delete serial number.');
    }
  };

  return (
    <div>
      <h1>Delete Serial Number</h1>
      <input 
        type="text" 
        value={id} 
        onChange={(e) => setId(e.target.value)} 
        placeholder="Enter serial number ID"
      />
      <button onClick={handleDelete}>Delete</button>

      <p>{message}</p>
    </div>
  );
};

export default DeleteSerialNumber;
