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

  return (
    <div className='app'>
      <div>
        Search: <input name='query' type='text'/>
      </div>
      
    </div>
  );
}

export default App;
