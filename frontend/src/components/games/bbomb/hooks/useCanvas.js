import { useState, useEffect, useRef } from 'react';
import {drawInitPlayer} from "../player/draw";
import {drawBg} from "../background/draw";

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
        // clear the canvas area before rendering the coordinates held in state
        bgCtx.clearRect(0, 0, canvasWidth, canvasHeight);

        // draw initial player if true
        if (initBg)
        {
            drawBg(bgCtx, bgXPos, canvasWidth, canvasHeight);
            bgXPos += scrollSpeed
        }
    });

    return [ initBg, setInitBg, bgCanvasRef, canvasWidth, canvasHeight ];
}