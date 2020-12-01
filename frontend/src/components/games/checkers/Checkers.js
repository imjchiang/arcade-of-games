import React, {useEffect, useState} from 'react';

import "./checkers.css";

import LightSquare from "./pictures/LightSquare.png";
import DarkSquare from "./pictures/DarkSquare.png";
import DarkSquareLight from "./pictures/DarkSquareLight.png";

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

    const lightSquare = <img className="checker-square" src={LightSquare} />;
    const darkSquare = <img className="checker-square" src={DarkSquare} />;
    const darkSquareDark = <img className="checker-square" src={DarkSquare} />;
    const darkSquareLight = <img className="checker-square" src={DarkSquareLight} />;
    const darkSquareDarkClick = <img className="checker-square" src={DarkSquare} />;
    const darkSquareLightClick = <img className="checker-square" src={DarkSquareLight} />;

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
            <div className="checkers-board">{checkersBoard}</div>
        </>
    );
}

export default Checkers;
