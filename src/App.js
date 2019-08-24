import React, { useState, useEffect, useRef } from 'react';
import SetButton from "./SetButton";
import StartButton from "./StartButton";
import './App.css';





function App() {
  const [timer, setTimer] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [active, setactive] = useState(false)
  const btnText = useRef('Start Timer')

  const setTime = (initialTime) => {
    setTimer(initialTime)
  }
  const startTime = () => {
    setactive(!active)
  }
  let interval = null
  let displayStyle = {backgroundColor: 'black'}
    if(active === true) {
        btnText.current = 'Stop Timer'
    }else{
        btnText.current = 'Start Timer'
    }
    if(timer < 1) {
        displayStyle.backgroundColor = 'red'
    }else {
        displayStyle.backgroundColor = 'black'
    }
    if(minutes > 0 && timer < 0 ) {
      setMinutes(minutes - 1)
      setTimer(59)
    }

  useEffect(() => {
    if(active && timer > 0) {
      interval = setTimeout(() => {
        setTimer(timer - 1)
      }, 1000)
    }else if (timer < 0 && minutes < 0)  {
        clearTimeout(interval)
        setactive(false)
    }

  }, [timer, active])


  return (
    <div className="App">
      <header>
        <h1>The Fantasy Football Draft Clock</h1>
        </header>
      <div className='display' style={displayStyle}>{minutes} : {timer}</div>
        <StartButton startTime={startTime} btnText={btnText.current} />
        <SetButton setTimer={setTime} setMinutes={setMinutes}/>
    </div>
  );
}

export default App;
