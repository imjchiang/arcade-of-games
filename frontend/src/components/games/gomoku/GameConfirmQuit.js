import React from 'react';

const GameConfirmQuit = (props) => 
{
    const handleClickQ = () =>
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
    }

    const confirmQuit = 
        <>
            <div className="confirm-quit-bg"></div>
            <div className="confirm-quit">
                <h3>Are You Sure?</h3>
                <div>
                    <button onClick={handleQuit}>Quit</button>
                    <button onClick={handleClickQ}>Continue</button>
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

export default GameConfirmQuit;