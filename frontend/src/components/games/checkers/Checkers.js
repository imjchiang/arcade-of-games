import React, {useEffect, useState} from 'react';

import "./checkers.css";

import LightSquare from "./pictures/LightSquare.png";
import DarkSquare from "./pictures/DarkSquare.png";
import DarkSquareLight from "./pictures/DarkSquareLight.png";
import DarkSquareDark from "./pictures/DarkSquareDark.png";

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

    const handleBoardClick = (x, y, piece) =>
    {
        let theBoard = board;
        theBoard.forEach((row, idx) =>
        {
            row.forEach((col, idy) =>
            {
                if (col === 100)
                {
                    col = 0;
                }
                if (col === 111)
                {
                    col = 1;
                }
            });
        });

        if (piece === "light")
        {
            theBoard[x][y] = 100;
        }
        else if (piece === "dark")
        {
            theBoard[x][y] = 111;
        }

        setBoard(theBoard);
    }

    let checkersBoard = board.map((row, idx) =>
    {
        return(
            <span className="checkers-row">
                {
                    row.map((col, idy) =>
                    {
                        if (col === null)
                        {
                            return <img className="checker-square" src={LightSquare} />;
                        }
                        if (col === -1)
                        {
                            return <img className="checker-square" src={DarkSquare} />;
                        }
                        if (col === 0)
                        {
                            return <img className="checker-square" onClick={handleBoardClick(idx, idy, "light")} src={DarkSquareLight} />;
                        }
                        if (col === 1)
                        {
                            return <img className="checker-square" onClick={handleBoardClick(idx, idy, "dark")} src={DarkSquareDark} />;
                        }
                        if (col === 100)
                        {
                            return <img className="checker-square" src={DarkSquareLight} />;
                        }
                        if (col === 111)
                        {
                            return <img className="checker-square" src={DarkSquareDark} />;
                        }
                    })
                }
            </span>
        );
    });

    return (
        <>
            <h1>Checkers</h1>
            <div className="checkers-board">{checkersBoard}</div>
        </>
    );
}

export default Checkers;
