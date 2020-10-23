import React, {useState} from 'react';
import GomokuBlank from "./pictures/gomoku-blank.png";
import GomokuBlack from "./pictures/gomoku-black.png";
import GomokuWhite from "./pictures/gomoku-white.png";

const Grid = (props) => 
{
    const [grid, setGrid] = useState(Array.from({length: 19},()=> Array.from({length: 19}, () => null)));

    const handleClick = (idx, idy) =>
    {
        console.log(idx, idy);
    }

    const gridCreate =
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
                                    return <img id={idx + "," + idy} className="gomoku-box" src={GomokuBlank} onClick={() => handleClick(idx, idy)}/>
                                }
                                else if (box === "x")
                                {
                                    return <img id={idx + "," + idy} className="gomoku-box" src={GomokuBlack} />
                                }
                                else if (box === "o")
                                {
                                    return <img id={idx + "," + idy} className="gomoku-box" src={GomokuWhite} />
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
    
    return (
        <>
            {gridCreate}
        </>
    );
}

export default Grid;