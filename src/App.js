import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv').config();

const devVar = process.env.ENVIROMENT_VAR === 'false';
const flag = () => <h1>Em desenvolvimento</h1>;

function App() {
  return (
    <div className="App">
      { devVar && flag() }
      <StrangerThings />
    </div>
  );
}

export default App;
