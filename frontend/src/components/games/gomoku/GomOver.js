import React from 'react';

const GomOver = (props) => 
{
    const handleRestart = () =>
    {
        props.setWinner(null);
        props.setGameOver(false);
        props.setTurn(props.randomize);
        props.setRestart(false);
        props.setGrid(Array.from({length: 19},()=> Array.from({length: 19}, () => null)));
    }

    const handleQuit = () =>
    {
        props.setWinner(null);
        props.setGameOver(false);
        props.setStart(false);
        props.setQuit(false);
        props.setRandomize(null);
        props.setGrid(Array.from({length: 19},()=> Array.from({length: 19}, () => null)));
    }

    const ggPanel = 
        <>
           <div className="gg-bg"></div>
            <div className="gg">
                {
                    props.winner === "b"
                    ?
                    <h3>Black Wins!</h3>
                    :
                    <></>
                }
                {
                    props.winner === "w"
                    ?
                    <h3>White Wins!</h3>
                    :
                    <></>
                }
                <button onClick={handleRestart}> RESTART </button>
                <button onClick={handleQuit}> QUIT </button>
            </div>
        </>

    return(
        <>
            {
                props.gameOver
                ?
                ggPanel
                :
                <></>
            }
        </>
    );
}

export default GomOver;