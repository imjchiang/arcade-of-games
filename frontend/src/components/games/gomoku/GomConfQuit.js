import React from 'react';

const GomConfQuit = (props) => 
{
    const handleClickC = () =>
    {
        let status = props.quit;
        props.setQuit(!status);
    }

    const handleQuit = () =>
    {
        let statusS = props.start;
        let statusQ = props.quit;
        props.setStart(!statusS);
        props.setQuit(!statusQ);
        props.setRandomize(null);
        props.setGrid(Array.from({length: 19},()=> Array.from({length: 19}, () => null)));
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