import React, { useState } from 'react';

import ChessGrid from "./ChessGrid";

import "./chess.css";


const Chess = (props) => 
{
    const [turn, setTurn] = useState("D");
    const [pieceSelected, setPieceSelected] = useState(undefined);
    const [selectedCoords, setSelectedCoords] = useState(undefined);
    const [enPassant, setEnPassant] = useState([["unexposed", "unexposed", "unexposed", "unexposed", "unexposed", "unexposed", "unexposed", "unexposed"], 
                                                ["unexposed", "unexposed", "unexposed", "unexposed", "unexposed", "unexposed", "unexposed", "unexposed"]]);
    const [cBoard, setCBoard] = useState([[0, 1, 0, 1, 0, 1, 0, 1], 
                                      [1, 0, 1, 0, 1, 0, 1, 0], 
                                      [0, 1, 0, 1, 0, 1, 0, 1], 
                                      [1, 0, 1, 0, 1, 0, 1, 0], 
                                      [0, 1, 0, 1, 0, 1, 0, 1], 
                                      [1, 0, 1, 0, 1, 0, 1, 0], 
                                      [0, 1, 0, 1, 0, 1, 0, 1],
                                      [1, 0, 1, 0, 1, 0, 1, 0]]);
    const [board, setBoard] = useState([["DRook0", "DKnight", "DBishop", "DQueen", "DKing", "DBishop", "DKnight", "DRook1"], 
                                      ["DPawn0", "DPawn1", "DPawn2", "DPawn3", "DPawn4", "DPawn5", "DPawn6", "DPawn7"], 
                                      [null, null, null, null, null, null, null, null], 
                                      [null, null, null, null, null, null, null, null], 
                                      [null, null, null, null, null, null, null, null], 
                                      [null, null, null, null, null, null, null, null], 
                                      ["LPawn0", "LPawn1", "LPawn2", "LPawn3", "LPawn4", "LPawn5", "LPawn6", "LPawn7"], 
                                      ["LRook0", "LKnight", "LBishop", "LQueen", "LKing", "LBishop", "LKnight", "LRook1"]]);

    return (
        <>
            <h1>Chess</h1>
            <ChessGrid 
                board={board}
                cBoard={cBoard}
                turn={turn}
                pieceSelected={pieceSelected}
                selectedCoords={selectedCoords}
                enPassant={enPassant}
                setBoard={setBoard}
                setCBoard={setCBoard}
                setTurn={setTurn}
                setPieceSelected={setPieceSelected}
                setSelectedCoords={setSelectedCoords}
                setEnPassant={setEnPassant} />
        </>
    );
}

export default Chess;
