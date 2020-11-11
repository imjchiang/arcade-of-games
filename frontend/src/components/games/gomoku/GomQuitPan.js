import React from 'react';

const GomQuitPan = (props) => 
{
    const handleClickQ = () =>
    {
        props.setQuit(true);
    }

    const handleClickR = () =>
    {
        props.setRestart(true);
    }

    const quitPanel = 
        <div className="gomoku-quit-button">
            <button onClick={handleClickR}> RESTART </button>
            <button onClick={handleClickQ}> QUIT </button>
        </div>

    return (
        <>
            {
                props.start && !props.quit && !props.restart && props.randomize !== null && !props.gameOver
                ?
                quitPanel
                :
                <></>
            }
        </>
    );
}

export default GomQuitPan;