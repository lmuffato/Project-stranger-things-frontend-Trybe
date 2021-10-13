import React from 'react';
import './App.css';

require('dotenv').config();

import StrangerThings from './components/StrangerThings';

const appInDev = process.env.DEV_ENVIRONMENT === 'true';
const inDevFlag = () => <h1>Em desenvolvimento</h1>;


function App() {
  return (
    <div className="App">
      { appInDev && inDevFlag() }
      <StrangerThings />
    </div>
  );
}

export default App;
