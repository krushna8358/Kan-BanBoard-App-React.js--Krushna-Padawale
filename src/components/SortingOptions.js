import React from 'react';

function SortingOptions({ setSortingOption }) {
  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
  };

  return (
    <div className="sorting-options">
      <h4>Sort By:</h4>
      <select onChange={handleSortingChange}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}

export default SortingOptions;
