import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv').config();

function App() {
  return (
    <div className="App">
      { process.env.ENVIRONMENT === 'development' && 'Em desenvolvimento'}
      <StrangerThings />
    </div>
  );
}

export default App;
