export function darkCap(theBoard, pieceSelected, selectedCoords, x, y)
{
    // if piece is king
    // confirm the captured piece is between the original position and final position
    // set captured piece to dark square
    if (pieceSelected === "darkK")
    {
        if (selectedCoords[0] - 2 === x && selectedCoords[1] - 2 === y)
        {
            theBoard[selectedCoords[0] - 1][selectedCoords[1] - 1] = -1;
        }
        else if (selectedCoords[0] - 2 === x && selectedCoords[1] + 2 === y)
        {
            theBoard[selectedCoords[0] - 1][selectedCoords[1] + 1] = -1;
        }
        else if (selectedCoords[0] + 2 === x && selectedCoords[1] - 2 === y)
        {
            theBoard[selectedCoords[0] + 1][selectedCoords[1] - 1] = -1;
        }
        else
        {
            theBoard[selectedCoords[0] + 1][selectedCoords[1] + 1] = -1;
        }
    }
    // confirm the captured piece is between the original position and final position
    // set captured piece to dark square
    else if (selectedCoords[0] - 2 === x && selectedCoords[1] - 2 === y)
    {
        theBoard[selectedCoords[0] - 1][selectedCoords[1] - 1] = -1;
    }
    else
    {
        theBoard[selectedCoords[0] - 1][selectedCoords[1] + 1] = -1;
    }
    // set original position to dark square
    theBoard[selectedCoords[0]][selectedCoords[1]] = -1;
    // check if need to create dark king or regular dark
    if (x === 0 || pieceSelected === "darkK")
    {
        theBoard[x][y] = 1111;
    }
    else
    {
        theBoard[x][y] = 1;
    }
}

export function lightCap(theBoard, pieceSelected, selectedCoords, x, y)
{
    // if piece is king
    // confirm the captured piece is between the original position and final position
    // set captured piece to dark square
    if (pieceSelected === "lightK")
    {
        if (selectedCoords[0] + 2 === x && selectedCoords[1] - 2 === y)
        {
            theBoard[selectedCoords[0] + 1][selectedCoords[1] - 1] = -1;
        }
        else if (selectedCoords[0] + 2 === x && selectedCoords[1] + 2 === y)
        {
            theBoard[selectedCoords[0] + 1][selectedCoords[1] + 1] = -1;
        }
        else if (selectedCoords[0] - 2 === x && selectedCoords[1] - 2 === y)
        {
            theBoard[selectedCoords[0] - 1][selectedCoords[1] - 1] = -1;
        }
        else
        {
            theBoard[selectedCoords[0] - 1][selectedCoords[1] + 1] = -1;
        }
    }
    // confirm the captured piece is between the original position and final position
    // set captured piece to dark square
    else if (selectedCoords[0] + 2 === x && selectedCoords[1] - 2 === y)
    {
        theBoard[selectedCoords[0] + 1][selectedCoords[1] - 1] = -1;
    }
    else
    {
        theBoard[selectedCoords[0] + 1][selectedCoords[1] + 1] = -1;
    }
    // set original position to dark square
    theBoard[selectedCoords[0]][selectedCoords[1]] = -1;
    // check if need to create light king or regular light
    if (x === theBoard.length - 1 || pieceSelected === "lightK")
    {
        theBoard[x][y] = 1000;
    }
    else
    {
        theBoard[x][y] = 0;
    }
}