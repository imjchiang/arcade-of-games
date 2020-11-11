import React from "react";

const GomRand = (props) => 
{
    let random = Math.floor(Math.random()*2);

    const handleClick = () =>
    {
        if (random === 1)
        {
            props.setRandomize("b");
            props.setTurn("b");
        }
        else if (random === 0)
        {
            props.setRandomize("w");
            props.setTurn("w");
        }
    }

    return (
        <>
            {
                props.start && props.randomize === null && props.aiPiece !== null
                ?
                <>
                    <div className="randomize-bg"></div>
                    <div className="begin-randomized">
                        <h3>{random === 1 ? "Black" : "White"} Starts!{console.log(random)}</h3>
                        <button onClick={handleClick}>Begin</button>
                    </div>
                </>
                :
                <></>
            }
        </>
    );
}

export default GomRand;