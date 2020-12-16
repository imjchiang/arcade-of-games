export function allPiecesMove(pieceX, pieceY, moveX, moveY, piece, board)
{
    if (piece.substring(1, 5) === "Pawn")
    {
        return pawnMove(pieceX, pieceY, moveX, moveY, piece, board);
    }
}

export function pawnMove(pieceX, pieceY, moveX, moveY, piece, board)
{
    console.log("checking pawn movement");
    if (piece.substring(0, 5) === "DPawn")
    {
        console.log("checking dark pawn");
        console.log("pieceX: " + pieceX + " pieceY: " + pieceY + " moveX: " + moveX + " moveY: " + moveY);
        if (pieceX === moveX - 1 && pieceY === moveY)
        {
            console.log("valid norm move");
            return true;
        }
        else if (pieceX === 1 && pieceX === moveX - 2 && pieceY === moveY)
        {
            console.log("valid hop move");
            return true;
        }
    }
    else if (piece.substring(0, 5) === "LPawn")
    {
        console.log("checking light pawn");
        console.log("pieceX: " + pieceX + " pieceY: " + pieceY + " moveX: " + moveX + " moveY: " + moveY);
        if (pieceX === moveX + 1 && pieceY === moveY)
        {
            console.log("valid norm move");
            return true;
        }
        else if (pieceX === board.length - 2 && pieceX === moveX + 2 && pieceY === moveY)
        {
            console.log("valid hop move");
            return true;
        }
    }
    console.log("invalid move");
    return false;
}