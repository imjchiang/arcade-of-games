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

    return (
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
                                        return <img className="chess-square" src={Nothing} />;
                                    }

                                    // pawn
                                    if (col === "DPawn")
                                    {
                                        return <img className="chess-square" src={DarkPawn} />;
                                    }
                                    if (col === "DPawnClick")
                                    {
                                        return <img className="chess-square" src={DarkPawnClick} />;
                                    }
                                    if (col === "LPawn")
                                    {
                                        return <img className="chess-square" src={LightPawn} />;
                                    }
                                    if (col === "LPawnClick")
                                    {
                                        return <img className="chess-square" src={LightPawnClick} />;
                                    }
                                    
                                    // rook
                                    if (col === "DRook")
                                    {
                                        return <img className="chess-square" src={DarkRook} />;
                                    }
                                    if (col === "DRookClick")
                                    {
                                        return <img className="chess-square" src={DarkRookClick} />;
                                    }
                                    if (col === "LRook")
                                    {
                                        return <img className="chess-square" src={LightRook} />;
                                    }
                                    if (col === "LRookClick")
                                    {
                                        return <img className="chess-square" src={LightRookClick} />;
                                    }
                                    
                                    // knight
                                    if (col === "DKnight")
                                    {
                                        return <img className="chess-square" src={DarkKnight} />;
                                    }
                                    if (col === "DKnightClick")
                                    {
                                        return <img className="chess-square" src={DarkKnightClick} />;
                                    }
                                    if (col === "LKnight")
                                    {
                                        return <img className="chess-square" src={LightKnight} />;
                                    }
                                    if (col === "LKnightClick")
                                    {
                                        return <img className="chess-square" src={LightKnightClick} />;
                                    }
                                    
                                    // bishop
                                    if (col === "DBishop")
                                    {
                                        return <img className="chess-square" src={DarkBishop} />;
                                    }
                                    if (col === "DBishopClick")
                                    {
                                        return <img className="chess-square" src={DarkBishopClick} />;
                                    }
                                    if (col === "LBishop")
                                    {
                                        return <img className="chess-square" src={LightBishop} />;
                                    }
                                    if (col === "LBishopClick")
                                    {
                                        return <img className="chess-square" src={LightBishopClick} />;
                                    }

                                    // queen
                                    if (col === "DQueen")
                                    {
                                        return <img className="chess-square" src={DarkQueen} />;
                                    }
                                    if (col === "DQueenClick")
                                    {
                                        return <img className="chess-square" src={DarkQueenClick} />;
                                    }
                                    if (col === "LQueen")
                                    {
                                        return <img className="chess-square" src={LightQueen} />;
                                    }
                                    if (col === "LQueenClick")
                                    {
                                        return <img className="chess-square" src={LightQueenClick} />;
                                    }
                                    
                                    // king
                                    if (col === "DKing")
                                    {
                                        return <img className="chess-square" src={DarkKing} />;
                                    }
                                    if (col === "DKingClick")
                                    {
                                        return <img className="chess-square" src={DarkKingClick} />;
                                    }
                                    if (col === "LKing")
                                    {
                                        return <img className="chess-square" src={LightKing} />;
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
    );
}

export default ChkrsGrid;