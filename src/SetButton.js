import React, { useState } from 'react';


function SetButton (props) {

    const [seconds, setSeconds] = useState('')
    const [minutes, setMinutes] = useState('')
    return (
        <div className='input-btn'>
            <input type="text" placeholder='Enter Minutes' value={minutes} onChange={(e) => {setMinutes(e.target.value)}}></input>
            <input type="text" placeholder='Enter Seconds' value={seconds} onChange={(e) => {setSeconds(e.target.value)}}></input>
            <button className='set-btn'
                    onClick={() => {
                        props.setTimer(seconds);
                        props.setMinutes(minutes)
                    }}  >Set Timer</button>
        </div>

    )
}

export default SetButton;