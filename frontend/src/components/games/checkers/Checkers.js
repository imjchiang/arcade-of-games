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

    return (
        <>
            <h1>Checkers</h1>
        </>
    );
}

export default Checkers;
