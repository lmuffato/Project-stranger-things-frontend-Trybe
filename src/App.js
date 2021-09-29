import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  const isDeveloperMode = JSON.parse(process.env.REACT_APP_DEVELOPER_MODE);
  return (
    <div className="App">
      { isDeveloperMode && <div>Em desenvolvimento</div> }
      <StrangerThings />
    </div>
  );
}

export default App;
