import React, { useState } from 'react';


function SetButton (props) {

    const [inputValue, setInputValue] = useState('')

    return (
        <div className='input-btn'>
            <input type="text" placeholder='Enter Starting Time' value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}></input>
            <button className='set-btn' onClick={() => {props.setTimer(inputValue)}} >Set Timer</button>
        </div>

    )
}

export default SetButton;