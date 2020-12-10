import React, { useState } from 'react';

// import "./chess.css";

const Chess = (props) => 
{
    const [turn, setTurn] = useState("dark");
    const [board, setBoard] = useState([[5, 3, 3, 9, 10, 3, 3, 5], 
                                      [1, 1, 1, 1, 1, 1, 1, 1], 
                                      [null, null, null, null, null, null, null, null], 
                                      [null, null, null, null, null, null, null, null], 
                                      [null, null, null, null, null, null, null, null], 
                                      [null, null, null, null, null, null, null, null], 
                                      [1, 1, 1, 1, 1, 1, 1, 1], 
                                      [50, 30, 30, 90, 100, 30, 30, 50]]);

    return (
        <>
            <h1>Chess</h1>
        </>
    );
}

export default Chess;
