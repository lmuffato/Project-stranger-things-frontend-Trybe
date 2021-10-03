import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const ENVIROMENT_DEV = process.env.REACT_APP_ENVIROMENT_DEV === 'true';
const renderDevEnvironmentMessage = () => <h1>Em desenvolvimento</h1>;

function App() {
  return (
    <div className="App">
      { ENVIROMENT_DEV && renderDevEnvironmentMessage() }
      <StrangerThings />
    </div>
  );
}

export default App;
