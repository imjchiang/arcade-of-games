import React from 'react';

const GomConfRes = (props) => 
{
    const handleClickC = () =>
    {
        let status = props.restart;
        props.setRestart(!status);
    }

    const handleRestart = () =>
    {
        let statusR = props.restart;
        props.setTurn(props.randomize);
        props.setRestart(!statusR);
        props.setGrid(Array.from({length: 19},()=> Array.from({length: 19}, () => null)));
    }

    const confirmRestart = 
        <>
            <div className="confirm-restart-bg"></div>
            <div className="confirm-restart">
                <h3>Are You Sure?</h3>
                <div>
                    <button onClick={handleRestart}>Restart</button>
                    <button onClick={handleClickC}>Continue</button>
                </div>
            </div>
        </>

    return (
        <>
            {
                props.restart
                ?
                confirmRestart
                :
                <></>
            }
        </>
    );
}

export default GomConfRes;