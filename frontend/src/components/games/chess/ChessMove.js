export function allPiecesMove(pieceX, pieceY, moveX, moveY, piece, board)
{
    if (piece.substring(1, 5) === "Pawn")
    {
        return pawnMove(pieceX, pieceY, moveX, moveY, piece, board);
    }
    if (piece.substring(1, 5) === "Rook")
    {
        return rookMove(pieceX, pieceY, moveX, moveY, piece, board);
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

export function rookMove(pieceX, pieceY, moveX, moveY, piece, board)
{
    console.log("checking rook movement");
    // need to implement for castling later
    // if (piece.substring(0, 5) === "DRook")
    // else if (piece.substring(0, 5) === "LRook")
    if (piece.substring(1, 5) === "Rook")
    {
        // console.log("checking dark rook");
        console.log("pieceX: " + pieceX + " pieceY: " + pieceY + " moveX: " + moveX + " moveY: " + moveY);
        if (pieceX === moveX && moveY > pieceY)
        {
            for (let i = pieceY + 1; i <= moveY; i++)
            {
                if (board[moveX][i] === null)
                {
                    console.log("no piece found");
                }
                else
                {
                    console.log("piece obstructing");
                    return false;
                }
            }
            console.log("valid norm move");
            return true;
        }
        else if (pieceX === moveX && moveY < pieceY)
        {
            for (let i = moveY; i < pieceY; i++)
            {
                if (board[moveX][i] === null)
                {
                    console.log("no piece found");
                }
                else
                {
                    console.log("piece obstructing");
                    return false;
                }
            }
            console.log("valid norm move");
            return true;
        }
        else if (pieceY === moveY && moveX > pieceX)
        {
            for (let i = pieceX + 1; i <= moveX; i++)
            {
                if (board[i][moveY] === null)
                {
                    console.log("no piece found");
                }
                else
                {
                    console.log("piece obstructing");
                    return false;
                }
            }
            console.log("valid norm move");
            return true;
        }
        else if (pieceY === moveY && moveX < pieceX)
        {
            for (let i = moveX; i < pieceX; i++)
            {
                if (board[i][moveY] === null)
                {
                    console.log("no piece found");
                }
                else
                {
                    console.log("piece obstructing");
                    return false;
                }
            }
            console.log("valid norm move");
            return true;
        }
    }
    console.log("invalid move");
    return false;
}