import React from 'react'
import { useGameCanvas, useBgCanvas } from './useCanvas';

const Bbomb = (props) => 
{
    const [ initPlayerPos, setInitPlayerPos, gameCanvasRef, canvasWidth, canvasHeight ] = useGameCanvas();
    const [ initBg, setInitBg, bgCanvasRef, bgCanvasWidth, bgCanvasHeight ] = useBgCanvas();

    // const handleStartGame=(event)=>{
    //     // on each click get current mouse location 
    //     const currentCoord = { x: event.clientX, y: event.clientY };
    //     // add the newest mouse location to an array in state 
    //     setCoordinates([...coordinates, currentCoord]);
    // };

    const handleStartGame = () =>
    {
        setInitPlayerPos(true);
        setInitBg(true);
    };
    
    const handleRestartGame = () =>
    {
        // quit game
        setInitPlayerPos(false);
        setInitBg(false);

        // start game
        setTimeout(() =>
        {
            setInitPlayerPos(true);
            setInitBg(true);
        }, 750);
    }

    const handleQuitGame = () =>
    {
        setInitPlayerPos(false);
        setInitBg(false);
    };
  
    return (
        <main className="App-main" >
            <canvas 
                className="App-canvas-game"
                ref={gameCanvasRef}
                width={canvasWidth}
                height={canvasHeight} />
            
            <canvas 
                className="App-canvas-bg"
                ref={bgCanvasRef}
                width={bgCanvasWidth}
                height={bgCanvasHeight} />
        
            <div className="button">
                {
                    initPlayerPos
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