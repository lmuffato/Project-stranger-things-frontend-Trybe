import React from 'react';
import './App.css';
import StrangerThings from './components/StrangerThings';

// SOURCE:
// Renzo Sevilha
// https://github.com/tryber/sd-010-a-stranger-things-frontend/pull/53/commits/dc9f3abb78c644978789928b63e6b5e0244a60c6
const ENVIRONMENT_DEV = process.env.REACT_APP_ENVIRONMENT_DEV === 'true';
const renderDevEnvironmentMessage = () => <h1>Em desenvolvimento</h1>;
function App() {
  return (
    <div className="App">
      { ENVIRONMENT_DEV && renderDevEnvironmentMessage() }
      <StrangerThings />
    </div>
  );
}

export default App;
