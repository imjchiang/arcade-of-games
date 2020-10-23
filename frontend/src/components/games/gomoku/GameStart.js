import React, {useState, useEffect} from 'react';

const GameStart = (props) => 
{
    const [start, setStart] = useState(false);
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const handleClick = () =>
    {
        let status = start;
        setStart(!status);
    }

    const startPanel = 
        <div className="gomoku-start">
            <button className="gomoku-start-button" onClick={handleClick}>START GAME</button>
        </div>

    return (
        !start
        ?
        startPanel
        :
        <></>
    );
}

export default GameStart;