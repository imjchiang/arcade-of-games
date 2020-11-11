import React from 'react';

const GomConfQuit = (props) => 
{
    const handleClickC = () =>
    {
        props.setQuit(false);
    }

    const handleQuit = () =>
    {
        props.setGrid(Array.from({length: 19},()=> Array.from({length: 19}, () => null)));
        props.setMode(null);
        props.setStart(false);
        props.setQuit(false);
        props.setRandomize(null);
        props.setAIPiece(null);
    }

    const confirmQuit = 
        <>
            <div className="confirm-quit-bg"></div>
            <div className="confirm-quit">
                <h3>Are You Sure?</h3>
                <div>
                    <button onClick={handleQuit}>Quit</button>
                    <button onClick={handleClickC}>Continue</button>
                </div>
            </div>
        </>

    return (
        <>
            {
                props.quit
                ?
                confirmQuit
                :
                <></>
            }
        </>
    );
}

export default GomConfQuit;