import React from 'react';


function StartButton(props) {
    return <div>
        <button onClick={() => {
            props.startTime()
        }}>{props.btnText}
        </button>
    </div>
}

export default StartButton;