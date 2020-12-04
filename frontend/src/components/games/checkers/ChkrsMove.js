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