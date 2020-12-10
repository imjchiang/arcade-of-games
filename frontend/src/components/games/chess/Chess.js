import React, { useState } from 'react';

// import "./chess.css";

const Chess = (props) => 
{
    const [turn, setTurn] = useState("dark");
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
        </>
    );
}

export default Chess;
