import React, { useState } from 'react';

import ChkrsGrid from "./ChkrsGrid";

import "./checkers.css";

const Checkers = (props) => 
{
    const [pieceSelected, setPieceSelected] = useState(undefined);
    const [selectedCoords, setSelectedCoords] = useState(undefined);
    const [turn, setTurn] = useState("dark");
    const [multiJump, setMultiJump] = useState(null);
    const [board, setBoard] = useState([[null, 0, null, 0, null, 0, null, 0], 
                                      [0, null, 0, null, 0, null, 0, null], 
                                      [null, 0, null, 0, null, 0, null, 0], 
                                      [-1, null, -1, null, -1, null, -1, null], 
                                      [null, -1, null, -1, null, -1, null, -1], 
                                      [1, null, 1, null, 1, null, 1, null], 
                                      [null, 1, null, 1, null, 1, null, 1], 
                                      [1, null, 1, null, 1, null, 1, null]]);

    return (
        <>
            <h1>Checkers</h1>
            <ChkrsGrid 
                board={board} 
                turn={turn} 
                pieceSelected={pieceSelected}
                selectedCoords={selectedCoords}
                multiJump={multiJump}
                setBoard={setBoard}
                setTurn={setTurn}
                setPieceSelected={setPieceSelected}
                setSelectedCoords={setSelectedCoords}
                setMultiJump={setMultiJump} />
        </>
    );
}

export default Checkers;
