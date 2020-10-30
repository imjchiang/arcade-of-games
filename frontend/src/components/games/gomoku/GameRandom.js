import React from "react";

const GameRandom = (props) => 
{
    let random = Math.floor(Math.random()*2);

    const handleClick = () =>
    {
        if (random === 1)
        {
            props.setRandomize("b");
            props.setTurn("b");
        }
        else
        {
            props.setRandomize("w");
            props.setTurn("w");
        }
    }

    return (
        <>
            {
                props.start && props.randomize === null
                ?
                <>
                    <div className="randomize-bg"></div>
                    <div className="begin-randomized">
                        <h3>{random === 1 ? "Black" : "White"} Starts!</h3>
                        <button onClick={handleClick}>BEGIN!</button>
                    </div>
                </>
                :
                <></>
            }
        </>
    );
}

export default GameRandom;