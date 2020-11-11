import React, {useState, useEffect} from 'react';

const GomMode = (props) => 
{
    const handleSClick = () =>
    {
        props.setMode("s");
        props.setStart(true);
    }

    const handleMClick = () =>
    {
        props.setMode("m");
        props.setStart(true);
    }

    const modeSelect = 
        <>
            <div className="gomoku-mode-bg"></div>
            <div className="gomoku-mode-select">
                <h3>Select Your Game Mode</h3>
                <button className="gomoku-start-button" onClick={handleSClick}>Singleplayer</button>
                <button className="gomoku-start-button" onClick={handleMClick}>Multiplayer</button>
            </div>
        </>

    return (
        !props.start
        ?
        modeSelect
        :
        <></>
    );
}

export default GomMode;