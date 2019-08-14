import React from 'react';


function StartButton(props) {
    return <div className={'start-div'}>
        <button className={'start-btn'} onClick={() => {
            props.startTime()
        }}>{props.btnText}
        </button>
    </div>
}

export default StartButton;