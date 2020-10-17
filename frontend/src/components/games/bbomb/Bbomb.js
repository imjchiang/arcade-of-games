import React from 'react'
import { useCanvas } from './hooks/useCanvas';

const Bbomb = (props) => 
{
    const [ initialPos, setInitialPos, canvasRef, canvasWidth, canvasHeight ] = useCanvas();

    // const handleStartGame=(event)=>{
    //     // on each click get current mouse location 
    //     const currentCoord = { x: event.clientX, y: event.clientY };
    //     // add the newest mouse location to an array in state 
    //     setCoordinates([...coordinates, currentCoord]);
    // };

    const handleStartGame = () =>
    {
        setInitialPos(true);
    };
    
    const handleRestartGame = () =>
    {
        // quit game
        setInitialPos(false);
        // start game
        setTimeout(() =>
        {
            setInitialPos(true);
        }, 750);
    }

    const handleQuitGame = (event) =>
    {
        setInitialPos(false);
    };
  
    return (
        <main className="App-main" >
            <canvas 
                className="App-canvas"
                ref={canvasRef}
                width={canvasWidth}
                height={canvasHeight} />
        
            <div className="button">
                {
                    initialPos
                    ?
                    <>
                        <button onClick={handleRestartGame}> RESTART </button>
                        <button onClick={handleQuitGame}> QUIT </button>
                    </>
                    :
                    <button onClick={handleStartGame}> START </button>
                }
            </div>
        </main>
    );
}

export default Bbomb;