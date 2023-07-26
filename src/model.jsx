import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Model = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // shit dont work
    try {
      const result = await axios.post('http://localhost:8000/chatgpt', {
        input
      });
      console.log("result: ")
      console.log(result)
      setResponse(result.data);
    } catch (error) {
      console.error(error);
      setResponse('An error occurred while processing your request.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Input:</label>
        <input
          type="text"
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Model;