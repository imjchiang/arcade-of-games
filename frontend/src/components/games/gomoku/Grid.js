import React, {useState, useEffect} from 'react';
import GomokuBlank from "./pictures/gomoku-blank.png";
import GomokuBlack from "./pictures/gomoku-black.png";
import GomokuWhite from "./pictures/gomoku-white.png";

const Grid = (props) => 
{
    const [grid, setGrid] = useState(Array.from({length: 19},()=> Array.from({length: 19}, () => null)));
    const [turn, setTurn] = useState("b");
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const handleClick = (idx, idy) =>
    {
        // console.log(idx, idy);
        let matrix = grid;
        if (turn == "b")
        {
            matrix[idx][idy] = "x";
            setTurn("w");
        }
        else
        {
            matrix[idx][idy] = "o";
            setTurn("b");
        }

        setGrid(matrix);
        // console.log(matrix);
        // console.log(grid);
        forceUpdate();
    }

    const handleEnter = (idx, idy) =>
    {
        // console.log(idx, idy);
        let matrix = grid;

        if (turn == "b")
        {
            matrix[idx][idy] = "hoverB";
        }
        else
        {
            matrix[idx][idy] = "hoverW"
        }

        setGrid(matrix);
        // console.log(matrix);
        // console.log(grid);
        forceUpdate();
    }

    const handleExit = (idx, idy) =>
    {
        // console.log(idx, idy);
        let matrix = grid;
        matrix[idx][idy] = null;
        
        setGrid(matrix);
        // console.log(matrix);
        // console.log(grid);
        forceUpdate();
    }       


    return (
        <div className="gomoku-grid">
            {
                grid.map((row, idx) =>
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