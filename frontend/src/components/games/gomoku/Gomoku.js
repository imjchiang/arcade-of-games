import React, {useState} from 'react';

import GomGrid from "./GomGrid";
import GomMode from "./GomMode";
import GomRand from "./GomRand";
import GomQuitPan from "./GomQuitPan";
import GomConfQuit from './GomConfQuit';
import GomConfRes from './GomConfRes';
import GomOver from './GomOver';

import board from "./pictures/board.jpg";

const Gomoku = (props) => 
{
    const [grid, setGrid] = useState(Array.from({length: 19},()=> Array.from({length: 19}, () => null)));
    const [turn, setTurn] = useState("b");
    const [mode, setMode] = useState(null);
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
                <GomGrid grid={grid} turn={turn} setWinner={setWinner} setGameOver={setGameOver} setGrid={setGrid} setTurn={setTurn} />
                <GomOver gameOver={gameOver} winner={winner} randomize={randomize} setTurn={setTurn} setRestart={setRestart} setGrid={setGrid} setStart={setStart} setQuit={setQuit} setRandomize={setRandomize} setWinner={setWinner} setGameOver={setGameOver} setMode={setMode} />

                <GomRand start={start} quit={quit} randomize={randomize} setQuit={setQuit} setRandomize={setRandomize} setTurn={setTurn} />

                <GomConfQuit start={start} quit={quit} setStart={setStart} setQuit={setQuit} setGrid={setGrid} setRandomize={setRandomize} />
                <GomConfRes start={start} restart={restart} randomize={randomize} setStart={setStart} setRestart={setRestart} setGrid={setGrid} setTurn={setTurn} />
                <GomMode start={start} setStart={setStart} setMode={setMode} />
            </div>
            <GomQuitPan gameOver={gameOver} start={start} restart={restart} quit={quit} randomize={randomize} setStart={setStart} setRestart={setRestart} setQuit={setQuit} setGrid={setGrid} />
        </>
    );
}

export default Gomoku;
