import React from 'react';

function GroupingOptions({ setGroupingOption }) {
  const handleGroupingChange = (event) => {
    setGroupingOption(event.target.value);
  };

  return (
    <div className="grouping-options">
      <h4>Group By:</h4>
      <select onChange={handleGroupingChange}>
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
}

export default GroupingOptions;
