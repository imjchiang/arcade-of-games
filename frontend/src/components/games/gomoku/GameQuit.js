import React from 'react';

const GameQuit = (props) => 
{
    const handleClickQ = () =>
    {
        let status = props.quit;
        props.setQuit(!status);
    }

    const handleClickR = () =>
    {
        let status = props.quit;
        props.setStart(!status);
    }

    const quitPanel = 
        <div className="gomoku-quit-button">
            <button onClick={handleClickR}> RESTART </button>
            <button onClick={handleClickQ}> QUIT </button>
        </div>

    return (
        <>
            {
                props.start && !props.quit
                ?
                quitPanel
                :
                <></>
            }
        </>
    );
}

export default GameQuit;