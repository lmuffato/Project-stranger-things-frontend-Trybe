import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  const devMode = process.env.REACT_APP_DEV_MODE === 'true';
  return (
    <div className="App">
      {devMode && <h2>Em desenvolvimento</h2>}
      <StrangerThings />
    </div>
  );
}

export default App;
