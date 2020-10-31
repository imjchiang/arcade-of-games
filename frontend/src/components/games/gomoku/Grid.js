import React, {useState, useEffect} from 'react';
import GomokuBlank from "./pictures/gomoku-blank.png";
import GomokuBlack from "./pictures/gomoku-black.png";
import GomokuWhite from "./pictures/gomoku-white.png";

import GomokuWin, { fiveInRowDiagLtoR, fiveInRowHoriz, fiveInRowVert } from "./GomokuWin";

const Grid = (props) => 
{
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const handleClick = (idx, idy) =>
    {
        // console.log(idx, idy);
        let matrix = props.grid;
        if (props.turn === "b")
        {
            matrix[idx][idy] = "x";
            props.setTurn("w");
        }
        else
        {
            matrix[idx][idy] = "o";
            props.setTurn("b");
        }

        console.log(fiveInRowHoriz(props.grid));
        console.log(fiveInRowVert(props.grid));
        console.log(fiveInRowDiagLtoR(props.grid));

        props.setGrid(matrix);
        // console.log(matrix);
        // console.log(grid);
        forceUpdate();
    }

    const handleEnter = (idx, idy) =>
    {
        // console.log(idx, idy);
        let matrix = props.grid;

        if (props.turn === "b")
        {
            matrix[idx][idy] = "hoverB";
        }
        else
        {
            matrix[idx][idy] = "hoverW"
        }

        props.setGrid(matrix);
        // console.log(matrix);
        // console.log(grid);
        forceUpdate();
    }

    const handleExit = (idx, idy) =>
    {
        // console.log(idx, idy);
        let matrix = props.grid;
        matrix[idx][idy] = null;
        
        props.setGrid(matrix);
        // console.log(matrix);
        // console.log(grid);
        forceUpdate();
    }       


    return (
        <div className="gomoku-grid">
            {
                props.grid.map((row, idx) =>
                {
                    return(
                        <div id={idx} className="gomoku-row">
                        {
                            row.map((box, idy) =>
                            {
                                if (box === undefined || box === null)
                                {
                                    return <img className="gomoku-box" src={GomokuBlank} onClick={() => handleClick(idx, idy)} onMouseOver={() => handleEnter(idx, idy)} onMouseOut={() => handleExit(idx, idy)} />
                                }
                                else if (box === "hoverW")
                                {
                                    return <img id="hover" className="gomoku-box" src={GomokuWhite} onClick={() => handleClick(idx, idy)} onMouseOver={() => handleEnter(idx, idy)} onMouseOut={() => handleExit(idx, idy)} />
                                }
                                else if (box === "hoverB")
                                {
                                    return <img id="hover" className="gomoku-box" src={GomokuBlack} onClick={() => handleClick(idx, idy)} onMouseOver={() => handleEnter(idx, idy)} onMouseOut={() => handleExit(idx, idy)} />
                                }
                                else if (box === "x")
                                {
                                    return <img className="gomoku-box" src={GomokuBlack} />
                                }
                                else if (box === "o")
                                {
                                    return <img className="gomoku-box" src={GomokuWhite} />
                                }
                                else
                                {
                                    return (box)
                                }
                            })
                        }
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Grid;