import React, { useState } from 'react';

import ChkrsGrid from "./ChkrsGrid";

import "./checkers.css";

const Checkers = (props) => 
{
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
            <ChkrsGrid board={board} setBoard={setBoard} />
        </>
    );
}

export default Checkers;
