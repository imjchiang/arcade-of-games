import React, { useState } from 'react';

import ChessGrid from "./ChessGrid";

import "./chess.css";


const Chess = (props) => 
{
    const [turn, setTurn] = useState("dark");
    const [cBoard, setCBoard] = useState([[1, 0, 1, 0, 1, 0, 1, 0], 
                                      [0, 1, 0, 1, 0, 1, 0, 1], 
                                      [1, 0, 1, 0, 1, 0, 1, 0], 
                                      [0, 1, 0, 1, 0, 1, 0, 1], 
                                      [1, 0, 1, 0, 1, 0, 1, 0], 
                                      [0, 1, 0, 1, 0, 1, 0, 1], 
                                      [1, 0, 1, 0, 1, 0, 1, 0], 
                                      [0, 1, 0, 1, 0, 1, 0, 1]]);
    const [board, setBoard] = useState([["LRook", "LKnight", "LBishop", "LQueen", "LKing", "LBishop", "LKnight", "LRook"], 
                                      ["LPawn", "LPawn", "LPawn", "LPawn", "LPawn", "LPawn", "LPawn", "LPawn"], 
                                      [null, null, null, null, null, null, null, null], 
                                      [null, null, null, null, null, null, null, null], 
                                      [null, null, null, null, null, null, null, null], 
                                      [null, null, null, null, null, null, null, null], 
                                      ["DPawn", "DPawn", "DPawn", "DPawn", "DPawn", "DPawn", "DPawn", "DPawn"], 
                                      ["DRook", "DKnight", "DBishop", "DQueen", "DKing", "DBishop", "DKnight", "DRook"]]);

    return (
        <>
            <h1>Chess</h1>
            <ChessGrid 
                board={board}
                cBoard={cBoard}
                setBoard={setBoard}
                setCBoard={setCBoard} />
        </>
    );
}

export default Chess;
