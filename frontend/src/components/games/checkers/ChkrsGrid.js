import React, {useState, useCallback} from 'react';

import LightSquare from "./pictures/LightSquare.png";
import DarkSquare from "./pictures/DarkSquare.png";
import DarkSquareLight from "./pictures/DarkSquareLight.png";
import DarkSquareDark from "./pictures/DarkSquareDark.png";
import DarkSquareLightClick from "./pictures/DarkSquareLightClick.png";
import DarkSquareDarkClick from "./pictures/DarkSquareDarkClick.png";

const ChkrsGrid = (props) => 
{
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    const handleBoardClick = (x, y, piece) =>
    {
        let theBoard = props.board;

        for (let i = 0; i < theBoard.length; i++)
        {
            for (let j = 0; j < theBoard[i].length; j++)
            {
                if (theBoard[i][j] === 100)
                {
                    theBoard[i][j] = 0;
                }
                else if (theBoard[i][j] === 111)
                {
                    theBoard[i][j] = 1;
                }
            }
        }

        if (piece === "light" && props.turn === piece)
        {
            theBoard[x][y] = 100;
            props.setPieceSelected(piece);
        }
        else if (piece === "dark" && props.turn === piece)
        {
            theBoard[x][y] = 111;
            props.setPieceSelected(piece);
        }

        props.setBoard(theBoard);
        forceUpdate();
    }

    const handleVacantClick = (x, y) =>
    {
        console.log(props.pieceSelected);
        if (props.turn === "dark" && props.pieceSelected !== undefined)
        {
            props.setTurn("light");
        }
        else if (props.turn === "light" && props.pieceSelected !== undefined)
        {
            props.setTurn("dark");
        }

        let theBoard = props.board;

        for (let i = 0; i < theBoard.length; i++)
        {
            for (let j = 0; j < theBoard[i].length; j++)
            {
                if (theBoard[i][j] === 100)
                {
                    theBoard[i][j] = 0;
                }
                else if (theBoard[i][j] === 111)
                {
                    theBoard[i][j] = 1;
                }
            }
        }

        props.setBoard(theBoard);
        props.setPieceSelected(undefined);
    }

    return (
        <div className="checkers-board">
            {
                props.board.map((row, idx) =>
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
                                        return <img className="checker-square" onClick={() => handleVacantClick(idx, idy)} src={DarkSquare} />;
                                    }
                                    if (col === 0)
                                    {
                                        return <img className="checker-square" onClick={() => handleBoardClick(idx, idy, "light")} src={DarkSquareLight} />;
                                    }
                                    if (col === 1)
                                    {
                                        return <img className="checker-square" onClick={() => handleBoardClick(idx, idy, "dark")} src={DarkSquareDark} />;
                                    }
                                    if (col === 100)
                                    {
                                        return <img className="checker-square" src={DarkSquareLightClick} />;
                                    }
                                    if (col === 111)
                                    {
                                        return <img className="checker-square" src={DarkSquareDarkClick} />;
                                    }
                                })
                            }
                        </span>
                    );
                })
            }
        </div>
    );
}

export default ChkrsGrid;