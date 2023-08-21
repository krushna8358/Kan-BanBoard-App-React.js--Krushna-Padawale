import React, { useState, useEffect } from 'react';
import { fetchTickets } from '../api';
import Card from './Card';
import GroupingOptions from './GroupingOptions';
import SortingOptions from './SortingOptions';
import './Board.css';

function Board() {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortingOption, setSortingOption] = useState('priority');

  useEffect(() => {
    async function fetchData() {
      const data = await fetchTickets();
      setTickets(data.tickets); // Assuming 'tickets' is a property of the fetched data
    }
    fetchData();
  }, []);

  // Grouping logic based on the selected grouping option
  const groupedTickets = tickets.reduce((groups, ticket) => {
    const groupKey = ticket[groupingOption];
    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(ticket);
    return groups;
  }, {});

  // Sorting logic based on the selected sorting option
  const sortedGroups = Object.keys(groupedTickets).reduce((sorted, groupKey) => {
    sorted[groupKey] = groupedTickets[groupKey].sort((a, b) => {
      if (sortingOption === 'priority') {
        return b.priority - a.priority;
      } else if (sortingOption === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
    return sorted;
  }, {});

  return (
    <div className="board">
      {/* Grouping and sorting options */}
      <GroupingOptions setGroupingOption={setGroupingOption} />
      <SortingOptions setSortingOption={setSortingOption} />

      {/* Render columns and cards */}
      {Object.keys(sortedGroups).map(groupKey => (
        <div className="column" key={groupKey}>
          <h3>{groupKey}</h3>
          {sortedGroups[groupKey].map(ticket => (
            <Card key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
