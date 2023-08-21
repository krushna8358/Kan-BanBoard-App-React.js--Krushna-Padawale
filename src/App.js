import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchTickets } from './api';
import Board from './components/Board';

function App() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchTickets();
      setTickets(data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <Board tickets={tickets} />
    </div>
  );
}

export default App;
