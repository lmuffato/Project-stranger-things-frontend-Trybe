import React from 'react';
import './App.css';
import StrangerThings from './components/StrangerThings';

require('dotenv').config();

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
