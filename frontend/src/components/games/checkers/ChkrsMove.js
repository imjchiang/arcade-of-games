export function validMoveDark(board, selectedX, selectedY, moveToX, moveToY)
{
    if (board[moveToX][moveToY] === -1 && selectedX - 1 === moveToX && (moveToY === selectedY + 1 || moveToY === selectedY - 1))
    {
        return true;
    }
    return false;
}

export function validMoveLight(board, selectedX, selectedY, moveToX, moveToY)
{
    if (board[moveToX][moveToY] === -1 && selectedX + 1 === moveToX && (moveToY === selectedY + 1 || moveToY === selectedY - 1))
    {
        return true;
    }
    return false;
}

export function validCaptureDark(board, selectedX, selectedY, moveToX, moveToY)
{
    // check vacant position, white in middle, anchor point
    if (board[moveToX][moveToY] === -1 && 
        ((moveToX === selectedX - 2 && moveToY === selectedY - 2 && board[selectedX - 1][selectedY - 1] === 0) || 
        (moveToX === selectedX - 2 && moveToY === selectedY + 2 && board[selectedX - 1][selectedY + 1] === 0)))
    {
        return true;
    }
    return false;
}

export function validCaptureLight(board, selectedX, selectedY, moveToX, moveToY)
{
    // check vacant position, white in middle, anchor point
    if (board[moveToX][moveToY] === -1 && 
        ((moveToX === selectedX + 2 && moveToY === selectedY - 2 && board[selectedX + 1][selectedY - 1] === 1) || 
        (moveToX === selectedX + 2 && moveToY === selectedY + 2 && board[selectedX + 1][selectedY + 1] === 1)))
    {
        return true;
    }
    return false;
}

export function darkCanEat(board)
{
    // loop through entire board
    for (let i = 2; i < board.length; i++)
    {
        for (let j = 0; j < board[i].length; j++)
        {
            // if the piece is dark
            if (board[i][j] === 1 || board[i][j] === 111)
            {
                // if the neighboring diag is light and next diag space is vacant
                if (board[i - 1][j - 1] === 0 && board[i - 2][j - 2] === -1)
                {
                    return true;
                }
                if (board[i - 1][j + 1] === 0 && board[i - 2][j + 2] === -1)
                {
                    return true;
                }
            }
        }
    }
    return false;
}

export function lightCanEat(board)
{
    // loop through entire board
    for (let i = 0; i < board.length - 2; i++)
    {
        for (let j = 0; j < board[i].length; j++)
        {
            // if the piece is light
            if (board[i][j] === 0 || board[i][j] === 100)
            {
                // if the neighboring diag is dark and next diag space is vacant
                if (board[i + 1][j - 1] === 1 && board[i + 2][j - 2] === -1)
                {
                    return true;
                }
                if (board[i + 1][j + 1] === 1 && board[i + 2][j + 2] === -1)
                {
                    return true;
                }
            }
        }
    }
    return false;
}