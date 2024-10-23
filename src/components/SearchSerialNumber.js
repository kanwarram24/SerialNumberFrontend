import React, { useState } from 'react';
import axios from 'axios';

const SearchSerialNumber = () => {
  const [serialNumber, setSerialNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/serialnumbers/search`,
        { 
          params: { serialNumber },
          auth: { username: 'admin', password: 'password' }
        }
      );
      setResult(response.data);
    } catch (error) {
      console.error('Error fetching serial number:', error);
      setResult(null);
    }
  };

  return (
    <div>
      <h1>Search Serial Number</h1>
      <input 
        type="text" 
        value={serialNumber} 
        onChange={(e) => setSerialNumber(e.target.value)} 
        placeholder="Enter serial number"
      />
      <button onClick={handleSearch}>Search</button>

      {result ? (
        <div>
          <h2>Serial Number Found:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      ) : (
        <p>No serial number found.</p>
      )}
    </div>
  );
};

export default SearchSerialNumber;
