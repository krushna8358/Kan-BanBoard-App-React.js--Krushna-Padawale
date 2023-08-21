import React from 'react';
import './Card.css';

function Card({ ticket }) {
  const priorityMap = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No priority',
  };

  return (
    <div className={`card priority-${ticket.priority}`}>
      <h3>{ticket.title}</h3>
      <p>Priority: {priorityMap[ticket.priority]}</p>
      <p>Status: {ticket.status}</p>
      <p>Assigned to: {ticket.user}</p>
    </div>
  );
}

export default Card;
