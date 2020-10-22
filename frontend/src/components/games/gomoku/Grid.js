import React, {useState} from 'react';
import GomokuBlank from "./pictures/gomoku-blank.png";

const Grid = (props) => 
{
    const [grid, setGrid] = useState(Array.from({length: 19},()=> Array.from({length: 19}, () => null)));

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
                                    return <img id={idx + "," + idy} className="gomoku-box" src={GomokuBlank} />
                                }
                                else if (box === "x")
                                {
                                    return <span className="gomoku-box">b img</span>
                                }
                                else if (box === "o")
                                {
                                    return <span className="gomoku-box">w img</span>
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