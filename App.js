import logo from './logo.svg';
import './App.css';
import { getQueriesForElement } from '@testing-library/react';
import { useState } from 'react';

function App() {
  const [green, setGreen] = useState(false)
  function toggleGreen() {
    setGreen(!green)
  }
  const [grow, setGrow]  = useState(false)
  function toggleGrow() {
    setGrow(!grow)
  }
  const [hide, setHide] = useState(false)
  function toggleHide() {
    setHide(!hide)
  }

  return (
    <div className="App">
      
        <div className="section">
          <button onClick={toggleHide} className={hide ? 'hide' : ''}>
          My Practice
          </button>
        </div>
        <div className="section greeney"> 
          <button onClick={toggleGreen} className={green ? 'green' : ''}>
            Greenify</button>
        </div>
        <div className = "section">
          <button onClick={toggleGrow} className={grow ? 'grow' : ''}>
            Let's Grow!
            </button>
        </div>
    </div>
  );
}
export default App;
