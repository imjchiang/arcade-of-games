import React, {useEffect, useState} from 'react';

import LightSquare from "./pictures/LightSquare.png"
import DarkSquare from "./pictures/DarkSquare.png"
import DarkSquareLight from "./pictures/DarkSquareLight.png"

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

    const lightSquare = 
        <img src={LightSquare} />

    const darkSquare =
        <img src={DarkSquare} />

    const darkSquareDark =
        <img src={DarkSquare} />
    
    const darkSquareLight =
        <img src={DarkSquareLight} />
    
    const darkSquareDarkClick =
        <img src={DarkSquare} />
    
    const darkSquareLightClick =
        <img src={DarkSquareLight} />

    let checkersBoard;

    // useEffect(() =>
    // {
        checkersBoard = board.map((row, idx) =>
        {
            return(
                <span className="checkers-row">
                    {
                        row.map((col, idy) =>
                        {
                            if (col === null)
                            {
                                return lightSquare;
                            }
                            if (col === -1)
                            {
                                return darkSquare;
                            }
                            if (col === 0)
                            {
                                return darkSquareLight;
                            }
                            if (col === 1)
                            {
                                return darkSquareDark;
                            }
                            if (col === 100)
                            {
                                return darkSquareLightClick;
                            }
                            if (col === 111)
                            {
                                return darkSquareDarkClick;
                            }
                        })
                    }
                </span>
            );
        });
    // }, []);

    return (
        <>
            <h1>Checkers</h1>
            {checkersBoard}
        </>
    );
}

export default Checkers;
