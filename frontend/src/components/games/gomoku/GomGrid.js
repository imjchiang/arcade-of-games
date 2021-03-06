import React from 'react';
import GomokuBlank from "./pictures/gomoku-blank.png";
import GomokuBlack from "./pictures/gomoku-black.png";
import GomokuWhite from "./pictures/gomoku-white.png";

import { fiveInRowHoriz, fiveInRowVert, fiveInRowDiagLtoR, fiveInRowDiagRTtoLB } from "./GomWin";

const GomGrid = (props) => 
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

        if (fiveInRowHoriz(props.grid) === "bw" || fiveInRowVert(props.grid) === "bw" || fiveInRowDiagLtoR(props.grid) === "bw" || fiveInRowDiagRTtoLB(props.grid) === "bw")
        {
            props.setWinner("b");
            props.setGameOver(true);
            console.log("GG");
        }
        else if (fiveInRowHoriz(props.grid) === "ww" || fiveInRowVert(props.grid) === "ww" || fiveInRowDiagLtoR(props.grid) === "ww" || fiveInRowDiagRTtoLB(props.grid) === "ww")
        {
            props.setWinner("w");
            props.setGameOver(true);
            console.log("GG");
        }

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

export default GomGrid;