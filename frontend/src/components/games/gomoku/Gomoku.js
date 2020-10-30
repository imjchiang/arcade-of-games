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
    const [restart, setRestart] = useState(false);
    const [start, setStart] = useState(false);
    const [quit, setQuit] = useState(false);

    return (
        <>
            <div className="gomoku">
                <img id="gomoku-board" src={board} />
                <Grid grid={grid} turn={turn} setGrid={setGrid} setTurn={setTurn} />
                <GameConfirmQuit start={start} quit={quit} setStart={setStart} setQuit={setQuit} setGrid={setGrid} />
                <GameConfirmRestart start={start} restart={restart} setStart={setStart} setRestart={setRestart} setGrid={setGrid} />
                <GameRandom start={start} quit={quit} setQuit={setQuit} />
                <GameStart start={start} setStart={setStart}/>
            </div>
            <GameQuitPanel start={start} restart={restart} quit={quit} setStart={setStart} setRestart={setRestart} setQuit={setQuit} setGrid={setGrid} />
        </>
    );
}

export default Gomoku;
