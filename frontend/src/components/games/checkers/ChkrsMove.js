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

export function darkCanEat(board)
{
    let coords = [];
    // loop through entire board
    for (let i = 0; i < board.length; i++)
    {
        for (let j = 0; j < board[i].length; j++)
        {
            // if the piece is dark
            if (board[i][j] === 1 || board[i][j] === 111)
            {
                // if the neighboring diag piece exists and is light
                if (board[i - 1][j - 1] && board[i - 1][j - 1] === 0)
                {
                    coords.push({x: i - 1, y: j - 1});
                }
                if (board[i - 1][j + 1] && board[i - 1][j + 1] === 0)
                {
                    coords.push({x: i - 1, y: j - 1});
                }
            }
        }
    }
    return coords;
}

export function lightCanEat(board)
{
    let coords = [];
    // loop through entire board
    for (let i = 0; i < board.length; i++)
    {
        for (let j = 0; j < board[i].length; j++)
        {
            // if the piece is light
            if (board[i][j] === 0 || board[i][j] === 100)
            {
                // if the neighboring diag piece exists and is dark
                if (board[i + 1][j - 1] && board[i + 1][j - 1] === 0)
                {
                    coords.push({x: i + 1, y: j - 1});
                }
                if (board[i + 1][j + 1] && board[i + 1][j + 1] === 0)
                {
                    coords.push({x: i + 1, y: j - 1});
                }
            }
        }
    }
    return coords;
}