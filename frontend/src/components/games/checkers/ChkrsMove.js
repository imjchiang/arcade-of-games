export function validMoveDark(board, selectedX, selectedY, moveToX, moveToY, piece)
{
    if (board[moveToX][moveToY] === -1 && selectedX - 1 === moveToX && (moveToY === selectedY + 1 || moveToY === selectedY - 1))
    {
        console.log("dark normie/king move");
        return true;
    }
    // if piece is a king (same as light movement)
    if (piece === "darkK" && board[moveToX][moveToY] === -1 && selectedX + 1 === moveToX && (moveToY === selectedY + 1 || moveToY === selectedY - 1))
    {
        console.log("dark king move");
        return true;
    }
    return false;
}

export function validMoveLight(board, selectedX, selectedY, moveToX, moveToY, piece)
{
    if (board[moveToX][moveToY] === -1 && selectedX + 1 === moveToX && (moveToY === selectedY + 1 || moveToY === selectedY - 1))
    {
        console.log("light normie/king move");
        return true;
    }
    // if piece is a king (same as dark movement)
    if (piece === "lightK" && board[moveToX][moveToY] === -1 && selectedX - 1 === moveToX && (moveToY === selectedY + 1 || moveToY === selectedY - 1))
    {
        console.log("light king move");
        return true;
    }
    return false;
}

export function validCaptureDark(board, selectedX, selectedY, moveToX, moveToY, piece)
{
    // check undefined behavior
    if (moveToX < 0 || moveToY < 0 || moveToX > board.length - 1 || moveToY > board.length - 1)
    {
        return false;
    }
    // check vacant position
    // double check position to be moved to is valid with corresponding light (non-king/king) in middle
    // second possibility of above
    if (board[moveToX][moveToY] === -1 && 
        ((moveToX === selectedX - 2 && moveToY === selectedY - 2 && (board[selectedX - 1][selectedY - 1] === 0 || board[selectedX - 1][selectedY - 1] === 1000)) || 
        (moveToX === selectedX - 2 && moveToY === selectedY + 2 && (board[selectedX - 1][selectedY + 1] === 0 || board[selectedX - 1][selectedY + 1] === 1000))))
    {
        console.log("DARK NORMIE/KING IS CAPTURING");
        return true;
    }
    // if piece is a king (same movement logic as light capture)
    // check vacant position
    // double check position to be moved to is valid with corresponding light (non-king/king) in middle
    // second possibility of above
    if (piece === "darkK" && 
        board[moveToX][moveToY] === -1 && 
        ((moveToX === selectedX + 2 && moveToY === selectedY - 2 && (board[selectedX + 1][selectedY - 1] === 0 || board[selectedX + 1][selectedY - 1] === 1000)) || 
        (moveToX === selectedX + 2 && moveToY === selectedY + 2 && (board[selectedX + 1][selectedY + 1] === 0 || board[selectedX + 1][selectedY + 1] === 1000))))
    {
        console.log("DARK KING IS CAPTURING");
        return true;
    }
    return false;
}

export function validCaptureLight(board, selectedX, selectedY, moveToX, moveToY, piece)
{
    // check undefined behavior
    if (moveToX < 0 || moveToY < 0 || moveToX > board.length - 1 || moveToY > board.length - 1)
    {
        return false;
    }
    // check vacant position
    // double check position to be moved to is valid with corresponding dark (non-king/king) in middle
    // second possibility of above
    if (board[moveToX][moveToY] === -1 && 
        ((moveToX === selectedX + 2 && moveToY === selectedY - 2 && (board[selectedX + 1][selectedY - 1] === 1 || board[selectedX + 1][selectedY - 1] === 1111)) || 
        (moveToX === selectedX + 2 && moveToY === selectedY + 2 && (board[selectedX + 1][selectedY + 1] === 1 || board[selectedX + 1][selectedY + 1] === 1111))))
    {
        console.log("LIGHT NORMIE/KING IS CAPTURING");
        return true;
    }
    // if piece is a king (same movement logic as dark capture)
    // check vacant position
    // double check position to be moved to is valid with corresponding dark (non-king/king) in middle
    // second possibility of above
    if (piece === "lightK" && 
        board[moveToX][moveToY] === -1 && 
        ((moveToX === selectedX - 2 && moveToY === selectedY - 2 && (board[selectedX - 1][selectedY - 1] === 1 || board[selectedX - 1][selectedY - 1] === 1111)) || 
        (moveToX === selectedX - 2 && moveToY === selectedY + 2 && (board[selectedX - 1][selectedY + 1] === 1 || board[selectedX - 1][selectedY + 1] === 1111))))
    {
        console.log("LIGHT KING IS CAPTURING");
        return true;
    }
    return false;
}

export function darkCanEat(board)
{
    // loop through entire board EXCEPT for first two rows (checking upwards, prevent undefined behavior)
    for (let i = 2; i < board.length; i++)
    {
        for (let j = 0; j < board[i].length; j++)
        {
            // if the piece is dark or a king
            if (board[i][j] === 1 || board[i][j] === 111 || board [i][j] === 1111 || board[i][j] === 9999)
            {
                console.log("testing dark can eat (normies and kings)");
                // if the neighboring diag is light and next diag space is vacant
                if (board[i - 1][j - 1] !== undefined && board[i - 2][j - 2] === -1 !== undefined && 
                    (board[i - 1][j - 1] === 0 || board[i - 1][j - 1] === 1000) && board[i - 2][j - 2] === -1)
                {
                    console.log("DARK NORMIES/KING CAPTURE MOVE POSSIBLE");
                    return true;
                }
                if (board[i - 1][j + 1] !== undefined && board[i - 2][j + 2] === -1 !== undefined && 
                    (board[i - 1][j + 1] === 0 || board[i - 1][j + 1] === 1000) && board[i - 2][j + 2] === -1)
                {
                    console.log("DARK NORMIES/KING CAPTURE MOVE POSSIBLE");
                    return true;
                }
            }
        }
    }

    // loop through entire board EXCEPT for last two rows (checking downwards, prevent undefined behavior)
    for (let i = 0; i < board.length - 2; i++)
    {
        for (let j = 0; j < board[i].length; j++)
        {
            // if piece is a king (same as light conditions)
            if (board [i][j] === 1111 || board[i][j] === 9999)
            {
                console.log("testing dark can eat (king only)");
                if (board[i + 1][j - 1] !== undefined && board[i + 2][j - 2] !== undefined && 
                    (board[i + 1][j - 1] === 0 || board[i + 1][j - 1] === 1000) && board[i + 2][j - 2] === -1)
                {
                    console.log("DARK KING CAPTURE MOVE POSSIBLE");
                    return true;
                }
                if (board[i + 1][j + 1] !== undefined && board[i + 2][j + 2] !== undefined && 
                    (board[i + 1][j + 1] === 0 || board[i + 1][j + 1] === 1000) && board[i + 2][j + 2] === -1)
                {
                    console.log("DARK KING CAPTURE MOVE POSSIBLE");
                    return true;
                }
            }
        }
    }
    console.log("NO VALID DARK CAPTURE MOVE");
    return false;
}

export function lightCanEat(board)
{
    // loop through entire board
    for (let i = 0; i < board.length - 2; i++)
    {
        for (let j = 0; j < board[i].length; j++)
        {
            // if the piece is light or a king
            if (board[i][j] === 0 || board[i][j] === 100 || board [i][j] === 1000 || board[i][j] === 8888)
            {
                console.log("testing light can eat (normies and kings)");
                // if the neighboring diag is dark and next diag space is vacant
                if (board[i + 1][j - 1] !== undefined && board[i + 2][j - 2] !== undefined && 
                    (board[i + 1][j - 1] === 1 || board[i + 1][j - 1] === 1111) && board[i + 2][j - 2] === -1)
                {
                    console.log("LIGHT NORMIES/KING CAPTURE MOVE POSSIBLE");
                    return true;
                }
                if (board[i + 1][j + 1] !== undefined && board[i + 2][j + 2] !== undefined && 
                    (board[i + 1][j + 1] === 1 || board[i + 1][j + 1] === 1111) && board[i + 2][j + 2] === -1)
                {
                    console.log("LIGHT NORMIES/KING CAPTURE MOVE POSSIBLE");
                    return true;
                }
            }
        }
    }

    for (let i = 2; i < board.length; i++)
    {
        for (let j = 0; j < board[i].length; j++)
        {
            // if piece is a king (same as dark conditions)
            if (board [i][j] === 1000 || board[i][j] === 8888)
            {
                console.log("testing light can eat (king only)");
                if (board[i - 1][j - 1] !== undefined && board[i - 2][j - 2] !== undefined && 
                    (board[i - 1][j - 1] === 1 || board[i - 1][j - 1] === 1111) && board[i - 2][j - 2] === -1)
                {
                    console.log("LIGHT KING CAPTURE MOVE POSSIBLE");
                    return true;
                }
                if (board[i - 1][j + 1] !== undefined && board[i - 2][j + 2] === -1 !== undefined && 
                    (board[i - 1][j + 1] === 1 || board[i - 1][j + 1] === 1111) && board[i - 2][j + 2] === -1)
                {
                    console.log("LIGHT KING CAPTURE MOVE POSSIBLE");
                    return true;
                }
            }
        }
    }
    console.log("NO VALID LIGHT CAPTURE MOVE");
    return false;
}
