
let hitboxRadius = 10;
let xAlignment = hitboxRadius + 0.9;
let yAlignment = hitboxRadius + 1.4;

export function draw(ctx)
{
    console.log("attempting to draw")
    ctx.beginPath();
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.arc(Math.random()*1000 + xAlignment, Math.random()*600 + yAlignment, hitboxRadius, 2 * Math.PI, 0);
    ctx.closePath();
    ctx.fill();
    // .restore(): Canvas 2D API restores the most recently saved canvas state
    // ctx.restore();  
};