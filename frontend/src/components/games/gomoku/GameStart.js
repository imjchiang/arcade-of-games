import React, {useState, useEffect} from 'react';

const GameStart = (props) => 
{
    const handleClick = () =>
    {
        let status = props.start;
        props.setStart(!status);
    }

    const startPanel = 
        <div className="gomoku-start">
            <button className="gomoku-start-button" onClick={handleClick}>START GAME</button>
        </div>

    return (
        !props.start
        ?
        startPanel
        :
        <></>
    );
}

export default GameStart;