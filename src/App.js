import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv').config();

function App() {
  const mode = process.env.REACT_APP_DEV_MODE;
  console.log(process.env);
  return (
    <div className="App">
      {mode === 'dev' && 'Em desenvolvimento'}
      <StrangerThings />
    </div>
  );
}

export default App;
