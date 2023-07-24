import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const data = [
  { id: uuidv4(), name: 'John Doe' },
  { id: uuidv4(), name: 'Jane Smith' },
  { id: uuidv4(), name: 'Mike Johnson' },
  // Add more data items here
];

const Card = ({ name }) => {
  return (
    <div className="card">
      <p>{name}</p>
    </div>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Search App</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="cardsContainer">
        {filteredData.map((item) => (
          <Card key={item.id} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default App;
