import React, { useState } from 'react';
import './App.css';

function App() {
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {
    if(event.target.value === "") {
      setFilterList(list);
      return
    }

    const filteredvalues = list.filter(
      (item) =>
        item.toLocaleLowerCase().indexOf(event.target.value.toLocaleLowerCase()) !== -1
    );
    
    setFilterList(filteredvalues);
  }

  return (
    <div className='app'>
      <div>
        <input name='query' type='text' placeholder='Search...' autofocus onChange={handleSearch}/>
      </div>
      
      {filterList && filterList.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default App;
