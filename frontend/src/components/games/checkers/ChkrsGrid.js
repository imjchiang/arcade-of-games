import React, {useState, useCallback} from 'react';

import {validMoveDark, validMoveLight, validCaptureDark, validCaptureLight, darkCanEat, lightCanEat} from "./ChkrsValidation";
import {darkCap, lightCap} from "./ChkrsCap";

import LightSquare from "./pictures/LightSquare.png";
import DarkSquare from "./pictures/DarkSquare.png";
import DarkSquareLight from "./pictures/DarkSquareLight.png";
import DarkSquareDark from "./pictures/DarkSquareDark.png";
import DarkSquareLightClick from "./pictures/DarkSquareLightClick.png";
import DarkSquareDarkClick from "./pictures/DarkSquareDarkClick.png";
import DarkKing from "./pictures/DarkKing.png";
import LightKing from "./pictures/LightKing.png";
import DarkKingClick from "./pictures/DarkKingClick.png";
import LightKingClick from "./pictures/LightKingClick.png";

const ChkrsGrid = (props) => 
{
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    const handleBoardClick = (x, y, piece, king) =>
    {
        let theBoard = props.board;

        // unselect all pieces that are selected
        for (let i = 0; i < theBoard.length; i++)
        {
            for (let j = 0; j < theBoard[i].length; j++)
            {
                // deselect non-king pieces
                if (theBoard[i][j] === 100)
                {
                    theBoard[i][j] = 0;
                }
                else if (theBoard[i][j] === 111)
                {
                    theBoard[i][j] = 1;
                }
                // deselect king pieces
                else if (theBoard[i][j] === 8888)
                {
                    theBoard[i][j] = 1000;
                }
                else if (theBoard[i][j] === 9999)
                {
                    theBoard[i][j] = 1111;
                }
            }
        }

        // select piece and setting state for piece selected
        // non-kings
        if (piece === "light" && props.turn === piece && !king)
        {
            theBoard[x][y] = 100;
            props.setSelectedCoords([x, y]);
            props.setPieceSelected(piece);
        }
        else if (piece === "dark" && props.turn === piece && !king)
        {
            theBoard[x][y] = 111;
            props.setSelectedCoords([x, y]);
            props.setPieceSelected(piece);
        }
        // kings
        else if (piece === "light" && props.turn === piece && king)
        {
            theBoard[x][y] = 8888;
            props.setSelectedCoords([x, y]);
            props.setPieceSelected("lightK");
        }
        else if (piece === "dark" && props.turn === piece && king)
        {
            theBoard[x][y] = 9999;
            props.setSelectedCoords([x, y]);
            props.setPieceSelected("darkK");
        }

        // add changes to board
        props.setBoard(theBoard);
        forceUpdate();
    }

    const handleVacantClick = (x, y) =>
    {
        // console.log(props.pieceSelected);
        // console.log(props.selectedCoords);
        let theBoard = props.board;

        if (props.multiJump !== null && props.pieceSelected !== undefined)
        {
            console.log("Multi Jump Possible");
            if (props.selectedCoords[0] === props.multiJump[1] && props.selectedCoords[1] === props.multiJump[2])
            {
                if (props.multiJump[0] === "dark" || props.multiJump[0] === "darkK")
                {
                    // [props.pieceSelected, x, y]
                    // check if any dark pieces can capture any light pieces
                    if (validCaptureDark(theBoard, props.selectedCoords[0], props.selectedCoords[1], x, y, props.pieceSelected))
                    {
                        // if piece is king
                        // confirm the captured piece is between the original position and final position
                        // set captured piece to dark square
                        // confirm the captured piece is between the original position and final position
                        // set captured piece to dark square
                        // set original position to dark square
                        // check if need to create dark king or regular dark
                        darkCap(theBoard, props.pieceSelected, props.selectedCoords, x, y);

                        // check if multi-jump is possible
                        if (validCaptureDark(theBoard, x, y, x + 2, y + 2, props.pieceSelected) || 
                            validCaptureDark(theBoard, x, y, x + 2, y - 2, props.pieceSelected) || 
                            validCaptureDark(theBoard, x, y, x - 2, y - 2, props.pieceSelected) || 
                            validCaptureDark(theBoard, x, y, x - 2, y + 2, props.pieceSelected))
                        {
                            props.setMultiJump([props.pieceSelected, x, y]);
                        }
                        else
                        {
                            props.setMultiJump(null);
                            props.setTurn("light");
                        }
                    }
                }
                if (props.multiJump[0] === "light" || props.multiJump[0] === "lightK")
                {
                    // [props.pieceSelected, x, y]
                    // check if any light pieces can capture any dark pieces
                    if (validCaptureLight(theBoard, props.selectedCoords[0], props.selectedCoords[1], x, y, props.pieceSelected))
                    {
                        // if piece is king
                        // confirm the captured piece is between the original position and final position
                        // set captured piece to dark square
                        // confirm the captured piece is between the original position and final position
                        // set captured piece to dark square
                        // set original position to dark square
                        // check if need to create light king or regular light
                        lightCap(theBoard, props.pieceSelected, props.selectedCoords, x, y);

                        // check if multi-jump is possible
                        if (validCaptureLight(theBoard, x, y, x + 2, y + 2, props.pieceSelected) || 
                            validCaptureLight(theBoard, x, y, x + 2, y - 2, props.pieceSelected) || 
                            validCaptureLight(theBoard, x, y, x - 2, y - 2, props.pieceSelected) || 
                            validCaptureLight(theBoard, x, y, x - 2, y + 2, props.pieceSelected))
                        {
                            props.setMultiJump([props.pieceSelected, x, y]);
                        }
                        else
                        {
                            props.setMultiJump(null);
                            props.setTurn("dark");
                        }
                    }
                }
            }
            else
            {
                console.log("YOU MUST COMPLETE THE MULTIJUMP MOVE");
            }
        }
        // check for a selected piece before determining movement of piece
        else if (props.pieceSelected !== undefined && props.selectedCoords !== undefined)
        {
            // if it is a dark piece
            if (props.turn === "dark")
            {
                // check if any dark pieces can capture any light pieces
                if (validCaptureDark(theBoard, props.selectedCoords[0], props.selectedCoords[1], x, y, props.pieceSelected))
                {
                    // if piece is king
                    // confirm the captured piece is between the original position and final position
                    // set captured piece to dark square
                    // confirm the captured piece is between the original position and final position
                    // set captured piece to dark square
                    // set original position to dark square
                    // check if need to create dark king or regular dark
                    darkCap(theBoard, props.pieceSelected, props.selectedCoords, x, y);

                    // check if multi-jump is possible
                    if (validCaptureDark(theBoard, x, y, x + 2, y + 2, props.pieceSelected) || 
                        validCaptureDark(theBoard, x, y, x + 2, y - 2, props.pieceSelected) || 
                        validCaptureDark(theBoard, x, y, x - 2, y - 2, props.pieceSelected) || 
                        validCaptureDark(theBoard, x, y, x - 2, y + 2, props.pieceSelected))
                    {
                        props.setMultiJump([props.pieceSelected, x, y]);
                    }
                    else
                    {
                        props.setTurn("light");
                    }
                }
                // check for valid move for dark piece
                else if (validMoveDark(theBoard, props.selectedCoords[0], props.selectedCoords[1], x, y, props.pieceSelected))
                {
                    if (darkCanEat(theBoard))
                    {
                        console.log("POSITION IS INVALID. MUST CAPTURE PIECE WHEN CAPTURING IS POSSIBLE.");
                    }
                    else
                    {
                        // set original position to dark square
                        theBoard[props.selectedCoords[0]][props.selectedCoords[1]] = -1;
                        // check if need to create dark king or regular dark
                        if (x === 0 || props.pieceSelected === "darkK")
                        {
                            theBoard[x][y] = 1111;
                        }
                        else
                        {
                            theBoard[x][y] = 1;
                        }
                        props.setTurn("light");
                    }
                }
            }

            // if it is a light piece
            if (props.turn === "light")
            {
                // check if any light pieces can capture any dark pieces
                if (validCaptureLight(theBoard, props.selectedCoords[0], props.selectedCoords[1], x, y, props.pieceSelected))
                {
                    // if piece is king
                    // confirm the captured piece is between the original position and final position
                    // set captured piece to dark square
                    // confirm the captured piece is between the original position and final position
                    // set captured piece to dark square
                    // set original position to dark square
                    // check if need to create light king or regular light
                    lightCap(theBoard, props.pieceSelected, props.selectedCoords, x, y);

                    // check if multi-jump is possible
                    if (validCaptureLight(theBoard, x, y, x + 2, y + 2, props.pieceSelected) || 
                        validCaptureLight(theBoard, x, y, x + 2, y - 2, props.pieceSelected) || 
                        validCaptureLight(theBoard, x, y, x - 2, y - 2, props.pieceSelected) || 
                        validCaptureLight(theBoard, x, y, x - 2, y + 2, props.pieceSelected))
                    {
                        props.setMultiJump([props.pieceSelected, x, y]);
                    }
                    else
                    {
                        props.setTurn("dark");
                    }
                }
                // check for valid move for light piece
                else if (validMoveLight(theBoard, props.selectedCoords[0], props.selectedCoords[1], x, y, props.pieceSelected))
                {
                    if (lightCanEat(theBoard))
                    {
                        console.log("POSITION IS INVALID. MUST CAPTURE PIECE WHEN CAPTURING IS POSSIBLE.");
                    }
                    else
                    {
                        // set original position to dark square
                        theBoard[props.selectedCoords[0]][props.selectedCoords[1]] = -1;
                        // check if need to create light king or regular light
                        if (x === theBoard.length - 1 || props.pieceSelected === "lightK")
                        {
                            theBoard[x][y] = 1000;
                        }
                        else
                        {
                            theBoard[x][y] = 0;
                        }
                        props.setTurn("dark");
                    }
                }
            }
        }

        // unselect all pieces that are selected
        for (let i = 0; i < theBoard.length; i++)
        {
            for (let j = 0; j < theBoard[i].length; j++)
            {
                // deselect non-king pieces
                if (theBoard[i][j] === 100)
                {
                    theBoard[i][j] = 0;
                }
                else if (theBoard[i][j] === 111)
                {
                    theBoard[i][j] = 1;
                }
                // deselect king pieces
                else if (theBoard[i][j] === 8888)
                {
                    theBoard[i][j] = 1000;
                }
                else if (theBoard[i][j] === 9999)
                {
                    theBoard[i][j] = 1111;
                }
            }
        }

        // add changes to board and reset selected piece
        props.setBoard(theBoard);
        props.setPieceSelected(undefined);
        props.setSelectedCoords(undefined);
        forceUpdate();
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
                                    // light square
                                    if (col === null)
                                    {
                                        return <img className="checker-square" src={LightSquare} />;
                                    }
                                    // dark square
                                    if (col === -1)
                                    {
                                        return <img className="checker-square" onClick={() => handleVacantClick(idx, idy)} src={DarkSquare} />;
                                    }
                                    // light and dark pieces on dark square
                                    if (col === 0)
                                    {
                                        return <img className="checker-square" onClick={() => handleBoardClick(idx, idy, "light", false)} src={DarkSquareLight} />;
                                    }
                                    if (col === 1)
                                    {
                                        return <img className="checker-square" onClick={() => handleBoardClick(idx, idy, "dark", false)} src={DarkSquareDark} />;
                                    }
                                    // light and dark selected pieces on dark square
                                    if (col === 100)
                                    {
                                        return <img className="checker-square" src={DarkSquareLightClick} />;
                                    }
                                    if (col === 111)
                                    {
                                        return <img className="checker-square" src={DarkSquareDarkClick} />;
                                    }
                                    // light and dark king pieces
                                    if (col === 1000)
                                    {
                                        return <img className="checker-square" onClick={() => handleBoardClick(idx, idy, "light", true)} src={LightKing} />;
                                    }
                                    if (col === 1111)
                                    {
                                        return <img className="checker-square" onClick={() => handleBoardClick(idx, idy, "dark", true)} src={DarkKing} />;
                                    }
                                    // light and dark selected king pieces
                                    if (col === 8888)
                                    {
                                        return <img className="checker-square" src={LightKingClick} />;
                                    }
                                    if (col === 9999)
                                    {
                                        return <img className="checker-square" src={DarkKingClick} />;
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