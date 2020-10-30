import React from 'react';

const GameQuitPanel = (props) => 
{
    const handleClickQ = () =>
    {
        let status = props.quit;
        props.setQuit(!status);
    }

    const handleClickR = () =>
    {
        let status = props.restart;
        props.setRestart(!status);
    }

    const quitPanel = 
        <div className="gomoku-quit-button">
            <button onClick={handleClickR}> RESTART </button>
            <button onClick={handleClickQ}> QUIT </button>
        </div>

    return (
        <>
            {
                props.start && !props.quit && !props.restart && props.randomize !== null
                ?
                quitPanel
                :
                <></>
            }
        </>
    );
}

export default GameQuitPanel;