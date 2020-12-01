import React, {useEffect, useState} from 'react';

const Checkers = (props) => 
{
    const [board, setBoard] = useState([[null, 0, null, 0, null, 0, null, 0], 
                                      [0, null, 0, null, 0, null, 0, null], 
                                      [null, 0, null, 0, null, 0, null, 0], 
                                      [-1, null, -1, null, -1, null, -1, null], 
                                      [null, -1, null, -1, null, -1, null, -1], 
                                      [1, null, 1, null, 1, null, 1, null], 
                                      [null, 1, null, 1, null, 1, null, 1], 
                                      [1, null, 1, null, 1, null, 1, null]]);

    const lightSquare = 
        <div>
            <img src={}/>
        </div>

    const darkSquare =
        <div>
            <img src={}/>
        </div>

    const darkSquareDark =
        <div>
            <img src={}/>
        </div>
    
    const darkSquareLight =
        <div>
            <img src={}/>
        </div>
    
    const darkSquareDarkClick =
        <div>
            <img src={}/>
        </div>
    
    const darkSquareLightClick =
        <div>
            <img src={}/>
        </div>

    useEffect(() =>
    {
        board.forEach((row, idx) =>
        {
            return(
                <span>
                    {
                        row.forEach((col, idy) =>
                        {
                            if (col === null)
                            {
                                return lightSquare;
                            }
                            if (col === -1)
                            {
                                return darkSquare;
                            }
                            if (col === 0)
                            {
                                return darkSquareLight;
                            }
                            if (col === 1)
                            {
                                return darkSquareDark;
                            }
                            if (col === 100)
                            {
                                return darkSquareLightClick;
                            }
                            if (col === 111)
                            {
                                return darkSquareDarkClick;
                            }
                        })
                    }
                </span>
            );
        });
    }, []);

    return (
        <>
            <h1>Checkers</h1>
        </>
    );
}

export default Checkers;
