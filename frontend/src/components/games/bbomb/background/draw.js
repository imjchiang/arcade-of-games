export function drawBg(ctx, bgXPos, bgCanvasWidth, bgCanvasHeight)
{
    console.log("drawing BG")

    //for background image scrolling
    let backgroundImage = document.createElement("img");
    backgroundImage.setAttribute("id", "background-img");
    backgroundImage.setAttribute("src", "pictures/background/8bit-background.jpg");

    //draw current background image
    ctx.drawImage(backgroundImage, bgXPos, 0, bgCanvasWidth, bgCanvasHeight);
    //draw queued background image
    ctx.drawImage(backgroundImage, bgXPos + bgCanvasWidth, 0, bgCanvasWidth, bgCanvasHeight);
    
    //reset background image to initial state after complete scrolling of image 1
    if (- bgXPos === bgCanvasWidth)
    {
        bgXPos = 0;
    }
};