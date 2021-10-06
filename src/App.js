import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv').config();

function App() {
  console.log(process.env);
  return (
    <div className="App">
      { process.env.REACT_APP_STAGING === 'true' && 'Em desenvolvimento' }
      <StrangerThings />
    </div>
  );
}

export default App;
