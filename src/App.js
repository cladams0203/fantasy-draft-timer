import React, { useState, useEffect } from 'react';
import SetButton from "./SetButton";
import StartButton from "./StartButton";
import './App.css';





function App() {
  const [timer, setTimer] = useState(0)
  const [active, setactive] = useState(false)


  const setTime = (initialTime) => {
    setTimer(initialTime)
  }
  const startTime = () => {
    setactive(!active)
  }
  let interval = null
  useEffect(() => {
    // let interval = null
    if(active) {
      interval = setTimeout(() => {
        setTimer(timer - 1)
      }, 1000)
    }else if (!active || timer <= 0) {
      console.log('cleared')
      clearTimeout(interval)
    }
  }, [timer, active])


  return (
    <div className="App">
      <header>
        <h1>The Fantasy Football Draft Clock</h1>
        </header>
      <div className='display'>{timer}</div>
      <SetButton setTimer={setTime} />
      <StartButton startTime={startTime} active={active} />
    </div>
  );
}

export default App;
