import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv').config();

function App() {
  const mode = process.env.NODE_ENV;

  return (
    <div className="App">
      {mode === 'development' && 'Em desenvolvimento'}
      <StrangerThings />
    </div>
  );
}

export default App;
