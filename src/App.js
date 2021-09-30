import React from 'react';
import './App.css';
import dotenv from 'dotenv';

import StrangerThings from './components/StrangerThings';

dotenv.config();

function App() {
  return (
    <div className="App">
      <StrangerThings />
    </div>
  );
}

export default App;
