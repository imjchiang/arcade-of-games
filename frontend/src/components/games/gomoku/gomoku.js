import React from 'react';

import Grid from "./Grid"

import board from "./pictures/board.jpg";

const Gomoku = (props) => 
{
    return (
        <div className="gomoku">
            <img id="gomoku-board" src={board} />
        
            <Grid />

            {/* <div className="button">
                {
                    initPlayerPos
                    ?
                    <>
                        <button onClick={handleRestartGame}> RESTART </button>
                        <button onClick={handleQuitGame}> QUIT </button>
                    </>
                    :
                    <button onClick={handleStartGame}> START </button>
                }
            </div> */}
        </div>
    );
}

export default Gomoku;