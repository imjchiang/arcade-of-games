import React, {useState} from 'react';

import GomGrid from "./GomGrid";
import GomMode from "./GomMode";
import GomRand from "./GomRand";
import GomQuitPan from "./GomQuitPan";
import GomConfQuit from './GomConfQuit';
import GomConfRes from './GomConfRes';
import GomOver from './GomOver';
import GomPiece from './GomPiece';

import board from "./pictures/board.jpg";

const Gomoku = (props) => 
{
    const [grid, setGrid] = useState(Array.from({length: 19},()=> Array.from({length: 19}, () => null)));
    const [turn, setTurn] = useState("b");
    const [mode, setMode] = useState(null);
    const [aiPiece, setAIPiece] = useState(null);
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
                <GomGrid 
                    grid={grid} 
                    mode={mode} 
                    aiPiece={aiPiece}
                    turn={turn} 
                    aiPiece={aiPiece} 
                    setGrid={setGrid} 
                    setWinner={setWinner} 
                    setGameOver={setGameOver} 
                    setTurn={setTurn} 
                />
                <GomOver 
                    winner={winner} 
                    gameOver={gameOver} 
                    randomize={randomize} 
                    setWinner={setWinner} 
                    setGrid={setGrid} 
                    setMode={setMode}
                    setStart={setStart} 
                    setQuit={setQuit} 
                    setRestart={setRestart} 
                    setGameOver={setGameOver} 
                    setRandomize={setRandomize} 
                    setTurn={setTurn} 
                />

                <GomRand 
                    start={start} 
                    quit={quit} 
                    randomize={randomize} 
                    aiPiece={aiPiece} 
                    setQuit={setQuit} 
                    setRandomize={setRandomize} 
                    setTurn={setTurn} 
                />

                <GomConfQuit 
                    quit={quit} 
                    setGrid={setGrid} 
                    setMode={setMode}
                    setStart={setStart} 
                    setQuit={setQuit} 
                    setRandomize={setRandomize}
                    setAIPiece={setAIPiece} 
                />
                <GomConfRes 
                    start={start} 
                    restart={restart} 
                    randomize={randomize} 
                    setGrid={setGrid} 
                    setStart={setStart} 
                    setRestart={setRestart} 
                    setTurn={setTurn}
                /> 
                <GomPiece 
                    mode={mode}
                    aiPiece={aiPiece}
                    setAIPiece={setAIPiece} 
                />
                <GomMode 
                    start={start} 
                    setStart={setStart} 
                    setMode={setMode} 
                />
            </div>
            <GomQuitPan 
                start={start} 
                quit={quit} 
                restart={restart} 
                gameOver={gameOver} 
                randomize={randomize} 
                setGrid={setGrid} 
                setStart={setStart} 
                setQuit={setQuit} 
                setRestart={setRestart} 
            />
        </>
    );
}

export default Gomoku;
