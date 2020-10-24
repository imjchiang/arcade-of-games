import { useState, useEffect, useRef } from 'react';
import {drawInitPlayer} from "./drawPlayer";
import background from "./pictures/background/8bit-background.jpg"

// Scaling Constants for Canvas
export const canvasWidth = 1200;
export const canvasHeight = 700;

export function useGameCanvas(){
    const gameCanvasRef = useRef(null);
    const [initPlayerPos, setInitialPos] = useState(false);

    useEffect(()=>
    {
        const canvasObj = gameCanvasRef.current;
        const gameCtx = canvasObj.getContext('2d');
        // clear the canvas area before rendering the coordinates held in state
        gameCtx.clearRect(0, 0, canvasWidth, canvasHeight);

        // draw initial player if true
        if (initPlayerPos)
        {
            drawInitPlayer(gameCtx);
        }
    });

    return [ initPlayerPos, setInitialPos, gameCanvasRef, canvasWidth, canvasHeight ];
}

export function useBgCanvas()
{
    const bgCanvasRef = useRef(null);
    const [initBg, setInitBg] = useState(false);
    
    let bgXPos = 0;
    let scrollSpeed = -5;
    
    useEffect(() =>
    {
        const canvasObj = bgCanvasRef.current;
        const bgCtx = canvasObj.getContext('2d');
        
        var bgImage = new Image();
        bgImage.src = background;
        
        
        // clear the canvas area before rendering the coordinates held in state
        bgCtx.clearRect(0, 0, canvasWidth, canvasHeight);

        // draw initial player if true
        if (initBg)
        {
            bgImage.onload = () =>
            {
                bgCtx.drawImage(bgImage, bgXPos, 0, canvasWidth, canvasHeight);
            }
            bgXPos += scrollSpeed
        }
    });

    return [ initBg, setInitBg, bgCanvasRef, canvasWidth, canvasHeight ];
}