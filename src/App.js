import React, { useState, useEffect } from 'react';
import SetButton from "./SetButton";
import './App.css';
import StartButton from "./StartButton";




function App() {
  const [timer, setTimer] = useState(0)

  const setTime = (initialTime) => {
    setTimer(initialTime)
  }
  const startTime = () => {
    setInterval(() => {
      let time = timer
      time = time -1
      setTimer(time)
      console.log('timer firing')
    }, 1000)
  }


  return (
    <div className="App">
      <header>
        <h1>The Fantasy Football Draft Clock</h1>
        </header>
      <div className='display'>{timer}</div>
      <SetButton setTimer={setTime} />
      <StartButton startTime={startTime}/>
    </div>
  );
}

export default App;
