export function allPiecesMove(pieceX, pieceY, moveX, moveY, piece, board)
{
    if (piece.substring(1, 5) === "Pawn")
    {
        pawnMove(pieceX, pieceY, moveX, moveY, piece, board);
    }
}

export function pawnMove(pieceX, pieceY, moveX, moveY, piece, board)
{
    if (piece.substring(0, 5) === "LPawn")
    {
        if (pieceX === moveX + 1 && pieceY === moveY)
        {
            return true;
        }
        else if (pieceX === board.length - 2 && pieceX === moveX + 2 && pieceY === moveY)
        {
            return true;
        }
    }
    else if (piece.substring(0, 5) === "DPawn")
    {
        if (pieceX === moveX - 1 && pieceY === moveY)
        {
            return true;
        }
        else if (pieceX === 1 && pieceX === moveX - 2 && pieceY === moveY)
        {
            return true;
        }
    }
    return false;
}