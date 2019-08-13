import React from 'react';


function SetButton (props) {
    return (
        <div className='input-btn'>
            <input type="text" placeholder='Enter Starting Time'></input>
            <button className='set-btn'>Set Timer</button>
        </div>

    )
}

export default SetButton;