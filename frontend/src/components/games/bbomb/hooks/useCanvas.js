import { useState, useEffect, useRef } from 'react';
import {draw} from "../player/draw";

// Scaling Constants for Canvas
export const canvasWidth = 1200;
export const canvasHeight = 700;

export function useCanvas(){
    const canvasRef = useRef(null);
    const [initialPos, setInitialPos] = useState(false);

    useEffect(()=>
    {
        const canvasObj = canvasRef.current;
        const ctx = canvasObj.getContext('2d');
        // clear the canvas area before rendering the coordinates held in state
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        // draw initial player if true
        if (initialPos)
        {
            draw(ctx);
        }
    });

    return [ initialPos, setInitialPos, canvasRef, canvasWidth, canvasHeight ];
}