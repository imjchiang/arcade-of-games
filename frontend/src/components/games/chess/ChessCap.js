export function allPiecesCap(pieceX, pieceY, moveX, moveY, piece, board)
{
    if (piece.substring(1, 5) === "Pawn")
    {
        return pawnCap(pieceX, pieceY, moveX, moveY, piece, board);
    }
    if (piece.substring(1, 5) === "Rook")
    {
        return rookCap(pieceX, pieceY, moveX, moveY, piece, board);
    }
    if (piece.substring(1, 7) === "Knight")
    {
        return knightCap(pieceX, pieceY, moveX, moveY, piece, board);
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

export function rookCap(pieceX, pieceY, moveX, moveY, piece, board)
{
    console.log("---------------------------");
    console.log("checking ROOK capture");
    // need to implement for castling later
    console.log("pieceX: " + pieceX + " pieceY: " + pieceY + " moveX: " + moveX + " moveY: " + moveY);
    if ((piece.substring(0, 5) === "DRook" && board[moveX][moveY].substring(0, 1) !== "D") || 
        (piece.substring(0, 5) === "LRook" && board[moveX][moveY].substring(0, 1) !== "L"))
    {
        if (pieceX === moveX && moveY > pieceY)
        {
            console.log("ROOK capturing RIGHT");
            for (let i = pieceY + 1; i < moveY; i++)
            {
                if (board[moveX][i] === null)
                {
                    console.log("no piece obstructing rook");
                }
                else
                {
                    console.log("PIECE OBSTRUCTING ROOK");
                    return false;
                }
            }
            console.log("valid ROOK capture");
            return true;
        }
        else if (pieceX === moveX && moveY < pieceY)
        {
            console.log("ROOK capturing LEFT");
            for (let i = moveY + 1; i < pieceY; i++)
            {
                if (board[moveX][i] === null)
                {
                    console.log("no piece obstructing rook");
                }
                else
                {
                    console.log("PIECE OBSTRUCTING ROOK");
                    return false;
                }
            }
            console.log("valid ROOK capture");
            return true;
        }
        else if (pieceY === moveY && moveX > pieceX)
        {
            console.log("ROOK capturing DOWN");
            for (let i = pieceX + 1; i < moveX; i++)
            {
                if (board[i][moveY] === null)
                {
                    console.log("no piece obstructing rook");
                }
                else
                {
                    console.log("PIECE OBSTRUCTING ROOK");
                    return false;
                }
            }
            console.log("valid ROOK capture");
            return true;
        }
        else if (pieceY === moveY && moveX < pieceX)
        {
            console.log("ROOK capturing UP");
            for (let i = moveX + 1; i < pieceX; i++)
            {
                if (board[i][moveY] === null)
                {
                    console.log("no piece obstructing rook");
                }
                else
                {
                    console.log("PIECE OBSTRUCTING ROOK");
                    return false;
                }
            }
            console.log("valid ROOK capture");
            return true;
        }
        console.log("invalid ROOK move");
        return false;
    }
}

export function knightCap(pieceX, pieceY, moveX, moveY, piece, board)
{
    console.log("---------------------------");
    console.log("checking KNIGHT capture");
    console.log("pieceX: " + pieceX + " pieceY: " + pieceY + " moveX: " + moveX + " moveY: " + moveY);
    if ((piece.substring(0, 7) === "DKnight" && board[moveX][moveY].substring(0, 1) !== "D") || 
        (piece.substring(0, 7) === "LKnight" && board[moveX][moveY].substring(0, 1) !== "L"))
    {
        if (pieceX + 2 === moveX && pieceY + 1 === moveY)
        {
            console.log("KNIGHT capturing DOWN2/RIGHT");
            console.log("valid KNIGHT capture");
            return true;
        }
        else if (pieceX + 2 === moveX && pieceY - 1 === moveY)
        {
            console.log("KNIGHT capturing DOWN2/LEFT");
            console.log("valid KNIGHT capture");
            return true;
        }
        else if (pieceX - 2 === moveX && pieceY + 1 === moveY)
        {
            console.log("KNIGHT capturing UP2/RIGHT");
            console.log("valid KNIGHT capture");
            return true;
        }
        else if (pieceX - 2 === moveX && pieceY - 1 === moveY)
        {
            console.log("KNIGHT capturing UP2/LEFT");
            console.log("valid KNIGHT capture");
            return true;
        }
        else if (pieceX + 1 === moveX && pieceY + 2 === moveY)
        {
            console.log("KNIGHT capturing DOWN/RIGHT2");
            console.log("valid KNIGHT capture");
            return true;
        }
        else if (pieceX + 1 === moveX && pieceY - 2 === moveY)
        {
            console.log("KNIGHT capturing DOWN/LEFT2");
            console.log("valid KNIGHT capture");
            return true;
        }
        else if (pieceX - 1 === moveX && pieceY + 2 === moveY)
        {
            console.log("KNIGHT capturing UP/RIGHT2");
            console.log("valid KNIGHT capture");
            return true;
        }
        else if (pieceX - 1 === moveX && pieceY - 2 === moveY)
        {
            console.log("KNIGHT capturing UP/LEFT2");
            console.log("valid KNIGHT capture");
            return true;
        }
    }
    console.log("invalid KNIGHT move");
    return false;
}