import React, {useState} from 'react';

import Grid from "./Grid";
import GameStart from "./GameStart";
import GameRandom from "./GameRandom";
import GameQuitPanel from "./GameQuitPanel";
import GameConfirmQuit from './GameConfirmQuit';
import GameConfirmRestart from './GameConfirmRestart';

import board from "./pictures/board.jpg";

const Gomoku = (props) => 
{
    const [grid, setGrid] = useState(Array.from({length: 19},()=> Array.from({length: 19}, () => null)));
    const [turn, setTurn] = useState("b");
    const [winner, setWinner] = useState(null);

    const [randomize, setRandomize] = useState(null);
    const [restart, setRestart] = useState(false);
    const [start, setStart] = useState(false);
    const [quit, setQuit] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    return (
        <>
            <div className="gomoku">
                <img id="gomoku-board" src={board} />
                <Grid grid={grid} turn={turn} setWinner={setWinner} setGameOver={setGameOver} setGrid={setGrid} setTurn={setTurn} />
                
                <GameRandom start={start} quit={quit} randomize={randomize} setQuit={setQuit} setRandomize={setRandomize} setTurn={setTurn} />

                <GameConfirmQuit start={start} quit={quit} setStart={setStart} setQuit={setQuit} setGrid={setGrid} setRandomize={setRandomize} />
                <GameConfirmRestart start={start} restart={restart} randomize={randomize} setStart={setStart} setRestart={setRestart} setGrid={setGrid} setTurn={setTurn} />
                <GameStart start={start} setStart={setStart}/>
            </div>
            <GameQuitPanel gameOver={gameOver} start={start} restart={restart} quit={quit} randomize={randomize} setStart={setStart} setRestart={setRestart} setQuit={setQuit} setGrid={setGrid} />
        </>
    );
}

export default Gomoku;
