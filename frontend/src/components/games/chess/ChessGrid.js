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

import {allPiecesMove} from "./ChessMove";
import {allPiecesCap, enPassant} from "./ChessCap";

const ChkrsGrid = (props) => 
{
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    const handleVacantClick = (x, y) =>
    {
        let theBoard = props.board;
        
        let lightEnPassant = props.enPassant[0];
        let darkEnPassant = props.enPassant[1];
        console.log(props.enPassant);

        if (props.turn === "L")
        {
            // check all light pawn status
            // check if they were susceptible to en passant capture last turn
            // if true, make them immune now
            for (let i = 0; i < lightEnPassant.length; i++)
            {
                if (lightEnPassant[i] === "susceptible")
                {
                    lightEnPassant[i] = "immune";
                }
            }
            // check all light pawns to see if any of them have taken the initial step (not a hop)
            // if they did not hop, mark them as immune to en passant
            for (let col = 0; col < theBoard[5].length; col++)
            {
                if (theBoard[5][col] && theBoard[5][col].substring(0, 5) === "LPawn")
                {
                    lightEnPassant[parseInt(theBoard[5][col].substring(5, 6))] = "immune";
                }
            }
            // check all DARK pawns to see if any of them have taken the hop
            // if they have taken the hop and are not immune, mark as susceptible
            for (let col = 0; col < theBoard[3].length; col++)
            {
                if (theBoard[3][col] && theBoard[3][col].substring(0, 5) === "DPawn" && darkEnPassant[parseInt(theBoard[3][col].substring(5, 6))] === "unexposed")
                {
                    darkEnPassant[parseInt(theBoard[3][col].substring(5, 6))] = "susceptible";
                }
            }
        }
        if (props.turn === "D")
        {
            // check all dark pawn status
            // check if they were susceptible to en passant capture last turn
            // if true, make them immune now
            for (let i = 0; i < darkEnPassant.length; i++)
            {
                if (darkEnPassant[i] === "susceptible")
                {
                    darkEnPassant[i] = "immune";
                }
            }
            // check all dark pawns to see if any of them have taken the initial step (not a hop)
            // if they did not hop, mark them as immune to en passant
            for (let col = 0; col < theBoard[2].length; col++)
            {
                if (theBoard[2][col] && theBoard[2][col].substring(0, 5) === "DPawn")
                {
                    darkEnPassant[parseInt(theBoard[2][col].substring(5, 6))] = "immune";
                }
            }
            // check all LIGHT pawns to see if any of them have taken the hop
            // if they have taken the hop and are not immune, mark as susceptible
            for (let col = 0; col < theBoard[4].length; col++)
            {
                if (theBoard[4][col] && theBoard[4][col].substring(0, 5) === "LPawn" && lightEnPassant[parseInt(theBoard[4][col].substring(5, 6))] === "unexposed")
                {
                    lightEnPassant[parseInt(theBoard[4][col].substring(5, 6))] = "susceptible";
                }
            }
        }

        // check for undefined behavior and enPassant capture
        if (props.selectedCoords && enPassant(props.selectedCoords[0], props.selectedCoords[1], x, y, props.pieceSelected, theBoard, props.enPassant))
        {
            // move capture pawn behind captured pawn
            theBoard[x][y] = props.pieceSelected;
            theBoard[props.selectedCoords[0]][props.selectedCoords[1]] = null;
            // remove captured pawn from board
            if (props.pieceSelected.substring(0, 1) === "D")
            {
                theBoard[x - 1][y] = null;
            }
            else
            {
                theBoard[x + 1][y] = null;
            }

            if (props.turn === "D")
            {
                props.setTurn("L");
            }
            else
            {
                props.setTurn("D");
            }
            // set enPassant stats
            props.setEnPassant([lightEnPassant, darkEnPassant]);
        }

        // check for undefined behavior and piece movement
        if (props.selectedCoords && allPiecesMove(props.selectedCoords[0], props.selectedCoords[1], x, y, props.pieceSelected, theBoard))
        {
            theBoard[x][y] = props.pieceSelected;
            theBoard[props.selectedCoords[0]][props.selectedCoords[1]] = null;
            if (props.turn === "D")
            {
                props.setTurn("L");
            }
            else
            {
                props.setTurn("D");
            }
            // set enPassant stats
            props.setEnPassant([lightEnPassant, darkEnPassant]);
        }

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

        // handle pawn promotion
        for (let i = 0; i < theBoard[7].length; i++)
        {
            if (theBoard[7][i] && theBoard[7][i].substring(0, 5) === "DPawn")
            {
                theBoard[7][i] = "DQueen";
            }
        }

        for (let i = 0; i < theBoard[0].length; i++)
        {
            if (theBoard[0][i] && theBoard[0][i].substring(0, 5) === "LPawn")
            {
                theBoard[0][i] = "LQueen";
            }
        }
        
        // remove selected piece info
        // set board
        // force update
        props.setPieceSelected(undefined);
        props.setSelectedCoords(undefined);
        props.setBoard(theBoard);
        forceUpdate();
    }

    const handleChessPieceClick = (x, y, piece) =>
    {
        let capture = false;
        let theBoard = props.board;

        // capture piece logic
        if (props.selectedCoords && allPiecesCap(props.selectedCoords[0], props.selectedCoords[1], x, y, props.pieceSelected, theBoard))
        {
            capture = true;
            theBoard[x][y] = props.pieceSelected;
            theBoard[props.selectedCoords[0]][props.selectedCoords[1]] = null;
            if (props.turn === "D")
            {
                props.setTurn("L");
            }
            else
            {
                props.setTurn("D");
            }
        }

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

        if (props.turn === theBoard[x][y].substring(0, 1) && 
            theBoard[x][y] !== null && theBoard[x][y].substring(theBoard[x][y].length - 5, theBoard[x][y].length) !== "Click" && !capture)
        {
            theBoard[x][y] += "Click";
            props.setPieceSelected(piece);
            props.setSelectedCoords([x, y]);
        }
        else
        {
            props.setPieceSelected(undefined);
            props.setSelectedCoords(undefined);
        }

        // handle pawn promotion
        for (let i = 0; i < theBoard[7].length; i++)
        {
            if (theBoard[7][i] && theBoard[7][i].substring(0, 5) === "DPawn")
            {
                theBoard[7][i] = "DQueen";
            }
        }

        for (let i = 0; i < theBoard[0].length; i++)
        {
            if (theBoard[0][i] && theBoard[0][i].substring(0, 5) === "LPawn")
            {
                theBoard[0][i] = "LQueen";
            }
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
                                        if (col.substring(0, 5) === "DPawn" && col.length < 7)
                                        {
                                            return <img className="chess-square" onClick={() => handleChessPieceClick(idx, idy, col)} src={DarkPawn} />;
                                        }
                                        if (col.substring(0, 5) === "DPawn" && col.substring(6, 11) === "Click")
                                        {
                                            return <img className="chess-square" src={DarkPawnClick} />;
                                        }
                                        if (col.substring(0, 5) === "LPawn" && col.length < 7)
                                        {
                                            return <img className="chess-square" onClick={() => handleChessPieceClick(idx, idy, col)} src={LightPawn} />;
                                        }
                                        if (col.substring(0, 5) === "LPawn" && col.substring(6, 11) === "Click")
                                        {
                                            return <img className="chess-square" src={LightPawnClick} />;
                                        }
                                        
                                        // rook
                                        if (col.substring(0, 5) === "DRook" && col.length < 7)
                                        {
                                            return <img className="chess-square" onClick={() => handleChessPieceClick(idx, idy, col)} src={DarkRook} />;
                                        }
                                        if (col.substring(0, 5) === "DRook" && col.substring(6, 11) === "Click")
                                        {
                                            return <img className="chess-square" src={DarkRookClick} />;
                                        }
                                        if (col.substring(0, 5) === "LRook" && col.length < 7)
                                        {
                                            return <img className="chess-square" onClick={() => handleChessPieceClick(idx, idy, col)} src={LightRook} />;
                                        }
                                        if (col.substring(0, 5) === "LRook" && col.substring(6, 11) === "Click")
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