import React, { useState } from 'react';
import SetButton from "./SetButton";
import './App.css';



function App() {
  const [timer, setTimer] = useState(0)

  const setTime = (initialTime) => {
    setTimer(initialTime)
  }

  return (
    <div className="App">
      <header>
        <h1>The Fantasy Football Draft Clock</h1>
        </header>
      <div className='display'>{timer}</div>
      <SetButton setTimer={setTime} />
    </div>
  );
}

export default App;
