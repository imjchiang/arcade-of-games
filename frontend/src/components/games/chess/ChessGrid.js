import React, {useState, useCallback} from 'react';

import LightSquare from "./pictures/LightSquare.png";
import DarkSquare from "./pictures/DarkSquare.png";
import Nothing from "./pictures/Nothing.png";

import DarkPawn from "./pictures/DarkPawn.png";
import DarkPawnClick from "./pictures/DarkPawnClick.png";
import LightPawn from "./pictures/LightPawn.png";
import LightPawnClick from "./pictures/LightPawnClick.png";

import DarkRook from "./pictures/DarkRook.png";
import DarkRookClick from "./pictures/DarkRookClick.png";
import LightRook from "./pictures/LightRook.png";
import LightRookClick from "./pictures/LightRookClick.png";

import DarkKnight from "./pictures/DarkKnight.png";
import DarkKnightClick from "./pictures/DarkKnightClick.png";
import LightKnight from "./pictures/LightKnight.png";
import LightKnightClick from "./pictures/LightKnightClick.png";

import DarkBishop from "./pictures/DarkBishop.png";
import DarkBishopClick from "./pictures/DarkBishopClick.png";
import LightBishop from "./pictures/LightBishop.png";
import LightBishopClick from "./pictures/LightBishopClick.png";

import DarkQueen from "./pictures/DarkQueen.png";
import DarkQueenClick from "./pictures/DarkQueenClick.png";
import LightQueen from "./pictures/LightQueen.png";
import LightQueenClick from "./pictures/LightQueenClick.png";

import DarkKing from "./pictures/DarkKing.png";
import DarkKingClick from "./pictures/DarkKingClick.png";
import LightKing from "./pictures/LightKing.png";
import LightKingClick from "./pictures/LightKingClick.png";

const ChkrsGrid = (props) => 
{
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    const handleVacantClick = (x, y) =>
    {
        let theBoard = props.board;

        // loop through entire board and unselect all pieces
        for (let i = 0; i < theBoard.length; i++)
        {
            for (let j = 0; j < theBoard[i].length; j++)
            {
                // check if there is a piece on the square, check if the piece is selected (if it has "Click" as the last string of characters)
                // if true, remove "Click" from the end of that string
                if (theBoard[i][j] && theBoard[i][j].substring(theBoard[i][j].length - 5, theBoard[i][j].length) === "Click")
                {
                    theBoard[i][j] = theBoard[i][j].substring(0, theBoard[i][j].length - 5);
                }
            }
        }
        
        props.setPieceSelected(undefined);
        props.setSelectedCoords(undefined);
        props.setBoard(theBoard);
        forceUpdate();
    }

    const handleChessPieceClick = (x, y, piece) =>
    {
        let theBoard = props.board;

        // loop through entire board and unselect all pieces
        for (let i = 0; i < theBoard.length; i++)
        {
            for (let j = 0; j < theBoard[i].length; j++)
            {
                // check if there is a piece on the square, check if the piece is selected (if it has "Click" as the last string of characters)
                // if true, remove "Click" from the end of that string
                if (theBoard[i][j] && theBoard[i][j].substring(theBoard[i][j].length - 5, theBoard[i][j].length) === "Click")
                {
                    theBoard[i][j] = theBoard[i][j].substring(0, theBoard[i][j].length - 5);
                }
            }
        }

        if (theBoard[x][y].substring(theBoard[x][y].length - 5, theBoard[x][y].length) !== "Click")
        {
            theBoard[x][y] += "Click";
            props.setPieceSelected(piece);
            props.setSelectedCoords([x, y]);
        }
        props.setBoard(theBoard);
        forceUpdate();
    }

    return (
        <div className="complete-board">
            <div className="cBoard">
                {
                    props.cBoard.map((row, idx) =>
                    {
                        return(
                            <span className="chess-row">
                                {
                                    row.map((col, idy) =>
                                    {
                                        // no piece
                                        if (col === 0)
                                        {
                                            return <img className="chess-square" src={LightSquare} />;
                                        }
                                        // pawn
                                        if (col === 1)
                                        {
                                            return <img className="chess-square" src={DarkSquare} />;
                                        }
                                    })
                                }
                            </span>
                        );
                    })
                }
            </div>
            <div className="chess-board">
                {
                    props.board.map((row, idx) =>
                    {
                        return(
                            <span className="chess-row">
                                {
                                    row.map((col, idy) =>
                                    {
                                        // no piece
                                        if (col === null)
                                        {
                                            return <img className="chess-square" onClick={() => handleVacantClick(idx, idy)} src={Nothing} />;
                                        }

                                        // pawn
                                        if (col === "DPawn")
                                        {
                                            return <img className="chess-square" onClick={() => handleChessPieceClick(idx, idy, col)} src={DarkPawn} />;
                                        }
                                        if (col === "DPawnClick")
                                        {
                                            return <img className="chess-square" src={DarkPawnClick} />;
                                        }
                                        if (col === "LPawn")
                                        {
                                            return <img className="chess-square" onClick={() => handleChessPieceClick(idx, idy, col)} src={LightPawn} />;
                                        }
                                        if (col === "LPawnClick")
                                        {
                                            return <img className="chess-square" src={LightPawnClick} />;
                                        }
                                        
                                        // rook
                                        if (col === "DRook")
                                        {
                                            return <img className="chess-square" onClick={() => handleChessPieceClick(idx, idy, col)} src={DarkRook} />;
                                        }
                                        if (col === "DRookClick")
                                        {
                                            return <img className="chess-square" src={DarkRookClick} />;
                                        }
                                        if (col === "LRook")
                                        {
                                            return <img className="chess-square" onClick={() => handleChessPieceClick(idx, idy, col)} src={LightRook} />;
                                        }
                                        if (col === "LRookClick")
                                        {
                                            return <img className="chess-square" src={LightRookClick} />;
                                        }
                                        
                                        // knight
                                        if (col === "DKnight")
                                        {
                                            return <img className="chess-square" onClick={() => handleChessPieceClick(idx, idy, col)} src={DarkKnight} />;
                                        }
                                        if (col === "DKnightClick")
                                        {
                                            return <img className="chess-square" src={DarkKnightClick} />;
                                        }
                                        if (col === "LKnight")
                                        {
                                            return <img className="chess-square" onClick={() => handleChessPieceClick(idx, idy, col)} src={LightKnight} />;
                                        }
                                        if (col === "LKnightClick")
                                        {
                                            return <img className="chess-square" src={LightKnightClick} />;
                                        }
                                        
                                        // bishop
                                        if (col === "DBishop")
                                        {
                                            return <img className="chess-square" onClick={() => handleChessPieceClick(idx, idy, col)} src={DarkBishop} />;
                                        }
                                        if (col === "DBishopClick")
                                        {
                                            return <img className="chess-square" src={DarkBishopClick} />;
                                        }
                                        if (col === "LBishop")
                                        {
                                            return <img className="chess-square" onClick={() => handleChessPieceClick(idx, idy, col)} src={LightBishop} />;
                                        }
                                        if (col === "LBishopClick")
                                        {
                                            return <img className="chess-square" src={LightBishopClick} />;
                                        }

                                        // queen
                                        if (col === "DQueen")
                                        {
                                            return <img className="chess-square" onClick={() => handleChessPieceClick(idx, idy, col)} src={DarkQueen} />;
                                        }
                                        if (col === "DQueenClick")
                                        {
                                            return <img className="chess-square" src={DarkQueenClick} />;
                                        }
                                        if (col === "LQueen")
                                        {
                                            return <img className="chess-square" onClick={() => handleChessPieceClick(idx, idy, col)} src={LightQueen} />;
                                        }
                                        if (col === "LQueenClick")
                                        {
                                            return <img className="chess-square" src={LightQueenClick} />;
                                        }
                                        
                                        // king
                                        if (col === "DKing")
                                        {
                                            return <img className="chess-square" onClick={() => handleChessPieceClick(idx, idy, col)} src={DarkKing} />;
                                        }
                                        if (col === "DKingClick")
                                        {
                                            return <img className="chess-square" src={DarkKingClick} />;
                                        }
                                        if (col === "LKing")
                                        {
                                            return <img className="chess-square" onClick={() => handleChessPieceClick(idx, idy, col)} src={LightKing} />;
                                        }
                                        if (col === "LKingClick")
                                        {
                                            return <img className="chess-square" src={LightKingClick} />;
                                        }
                                    })
                                }
                            </span>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ChkrsGrid;