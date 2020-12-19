export function allPiecesCap(pieceX, pieceY, moveX, moveY, piece, board)
{
    if (piece.substring(1, 5) === "Pawn")
    {
        return pawnCap(pieceX, pieceY, moveX, moveY, piece, board);
    }
    if (piece.substring(1, 5) === "Rook")
    {
        return;
    }
    if (piece.substring(1, 7) === "Knight")
    {
        return;
    }
    if (piece.substring(1, 7) === "Bishop")
    {
        return;
    }
    if (piece.substring(1, 6) === "Queen")
    {
        return;
    }
    if (piece.substring(1, 5) === "King")
    {
        return;
    }
}

export function pawnCap(pieceX, pieceY, moveX, moveY, piece, board)
{
    console.log("---------------------------");
    console.log("checking PAWN capture");
    if (piece.substring(0, 5) === "DPawn")
    {
        console.log("checking DARK PAWN");
        console.log("pieceX: " + pieceX + " pieceY: " + pieceY + " moveX: " + moveX + " moveY: " + moveY);
        // if piece moves in same column one space downwards
        // if piece hops in same column two spaces downwards (confirm piece has not moved before)
        if (pieceX === moveX - 1 && (pieceY === moveY + 1 || pieceY === moveY - 1) && board[moveX][moveY].substring(0, 1) !== "D")
        {
            console.log("valid DARK PAWN capture");
            return true;
        }
    }
    else if (piece.substring(0, 5) === "LPawn")
    {
        console.log("checking LIGHT PAWN");
        console.log("pieceX: " + pieceX + " pieceY: " + pieceY + " moveX: " + moveX + " moveY: " + moveY);
        if (pieceX === moveX + 1 && (pieceY === moveY + 1 || pieceY === moveY - 1) && board[moveX][moveY].substring(0, 1) !== "L")
        {
            console.log("valid LIGHT PAWN capture");
            return true;
        }
    }
    console.log("invalid PAWN capture");
    return false;
}