import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  const isDevMode = process.env.REACT_APP_DEV_MODE === 'true';

  const renderElementDevMode = () => <h2>Em desenvolvimento</h2>;

  return (
    <div className="App">
      {isDevMode && renderElementDevMode()}

      <StrangerThings />
    </div>
  );
}

export default App;
