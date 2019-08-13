import React from 'react';


function StartButton(props) {
    return <div>
        <button onClick={() => {
            props.startTime()
        }}>Start Timer
        </button>
    </div>
}

export default StartButton;