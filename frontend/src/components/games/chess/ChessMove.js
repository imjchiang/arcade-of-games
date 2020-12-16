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
    if (piece.substring(1, 7) === "Knight")
    {
        return knightMove(pieceX, pieceY, moveX, moveY, piece, board);
    }
    if (piece.substring(1, 7) === "Bishop")
    {
        return bishopMove(pieceX, pieceY, moveX, moveY, piece, board);
    }
    if (piece.substring(1, 6) === "Queen")
    {
        return queenMove(pieceX, pieceY, moveX, moveY, piece, board);
    }
    if (piece.substring(1, 5) === "King")
    {
        return kingMove(pieceX, pieceY, moveX, moveY, piece, board);
    }
}

export function pawnMove(pieceX, pieceY, moveX, moveY, piece, board)
{
    console.log("---------------------------");
    console.log("checking PAWN movement");
    if (piece.substring(0, 5) === "DPawn")
    {
        console.log("checking DARK PAWN");
        console.log("pieceX: " + pieceX + " pieceY: " + pieceY + " moveX: " + moveX + " moveY: " + moveY);
        // if piece moves in same column one space downwards
        // if piece hops in same column two spaces downwards (confirm piece has not moved before)
        if ((pieceX === moveX - 1 && pieceY === moveY) || 
            (pieceX === 1 && pieceX === moveX - 2 && pieceY === moveY))
        {
            console.log("valid DARK PAWN movement");
            return true;
        }
    }
    else if (piece.substring(0, 5) === "LPawn")
    {
        console.log("checking LIGHT PAWN");
        console.log("pieceX: " + pieceX + " pieceY: " + pieceY + " moveX: " + moveX + " moveY: " + moveY);
        if ((pieceX === moveX + 1 && pieceY === moveY) || 
            (pieceX === board.length - 2 && pieceX === moveX + 2 && pieceY === moveY))
        {
            console.log("valid LIGHT PAWN movement");
            return true;
        }
    }
    console.log("invalid PAWN move");
    return false;
}

export function rookMove(pieceX, pieceY, moveX, moveY, piece, board)
{
    console.log("---------------------------");
    console.log("checking ROOK movement");
    // need to implement for castling later
    // if (piece.substring(0, 5) === "DRook")
    // else if (piece.substring(0, 5) === "LRook")
    console.log("pieceX: " + pieceX + " pieceY: " + pieceY + " moveX: " + moveX + " moveY: " + moveY);
    if (pieceX === moveX && moveY > pieceY)
    {
        console.log("ROOK moving RIGHT");
        for (let i = pieceY + 1; i <= moveY; i++)
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
        console.log("valid ROOK movement");
        return true;
    }
    else if (pieceX === moveX && moveY < pieceY)
    {
        console.log("ROOK moving LEFT");
        for (let i = moveY; i < pieceY; i++)
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
        console.log("valid ROOK movement");
        return true;
    }
    else if (pieceY === moveY && moveX > pieceX)
    {
        console.log("ROOK moving DOWN");
        for (let i = pieceX + 1; i <= moveX; i++)
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
        console.log("valid ROOK movement");
        return true;
    }
    else if (pieceY === moveY && moveX < pieceX)
    {
        console.log("ROOK moving UP");
        for (let i = moveX; i < pieceX; i++)
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
        console.log("valid ROOK movement");
        return true;
    }
    console.log("invalid ROOK move");
    return false;
}

export function knightMove(pieceX, pieceY, moveX, moveY, piece, board)
{
    console.log("temp");
}

export function bishopMove(pieceX, pieceY, moveX, moveY, piece, board)
{
    console.log("---------------------------");
    console.log("checking BISHOP movement");
    console.log("pieceX: " + pieceX + " pieceY: " + pieceY + " moveX: " + moveX + " moveY: " + moveY);
    if (Math.abs(moveX - pieceX) === Math.abs(moveY - pieceY))
    {
        if (moveX < pieceX && moveY < pieceY)
        {
            console.log("BISHOP moving UP/LEFT");
            let i = pieceX - 1;
            let j = pieceY - 1;
            while (i >= moveX && j >= moveY)
            {
                if (board[i][j] === null)
                {
                    console.log("no piece obstructing bishop");
                }
                else
                {
                    console.log("PIECE OBSTRUCTING BISHOP");
                    return false;
                }
                i--;
                j--;
            }
            console.log("valid BISHOP movement");
            return true;
        }
        else if (moveX > pieceX && moveY > pieceY)
        {
            console.log("BISHOP moving DOWN/RIGHT");
            let i = pieceX + 1;
            let j = pieceY + 1;
            while (i <= moveX && j <= moveY)
            {
                if (board[i][j] === null)
                {
                    console.log("no piece obstructing bishop");
                }
                else
                {
                    console.log("PIECE OBSTRUCTING BISHOP");
                    return false;
                }
                i++;
                j++;
            }
            console.log("valid BISHOP movement");
            return true;
        }
        else if (moveX < pieceX && moveY > pieceY)
        {
            console.log("BISHOP moving UP/RIGHT");
            let i = pieceX - 1;
            let j = pieceY + 1;
            while (i >= moveX && j <= moveY)
            {
                if (board[i][j] === null)
                {
                    console.log("no piece obstructing bishop");
                }
                else
                {
                    console.log("PIECE OBSTRUCTING BISHOP");
                    return false;
                }
                i--;
                j++;
            }
            console.log("valid BISHOP movement");
            return true;
        }
        else if (moveX > pieceX && moveY < pieceY)
        {
            console.log("BISHOP moving DOWN/LEFT");
            let i = pieceX + 1;
            let j = pieceY - 1;
            while (i <= moveX && j >= moveY)
            {
                if (board[i][j] === null)
                {
                    console.log("no piece obstructing bishop");
                }
                else
                {
                    console.log("PIECE OBSTRUCTING BISHOP");
                    return false;
                }
                i++;
                j--;
            }
            console.log("valid BISHOP movement");
            return true;
        }
    }
    console.log("invalid BISHOP move");
    return false;
}

export function queenMove(pieceX, pieceY, moveX, moveY, piece, board)
{
    console.log("+++++++++++++++++++++++++++");
    console.log("QUEEN MOVEMENT");
    if (rookMove(pieceX, pieceY, moveX, moveY, piece, board) || bishopMove(pieceX, pieceY, moveX, moveY, piece, board))
    {
        console.log("valid QUEEN move");
        console.log("+++++++++++++++++++++++++++");
        return true;
    }
    console.log("invalid QUEEN move");
    console.log("+++++++++++++++++++++++++++");
    return false;
}

export function kingMove(pieceX, pieceY, moveX, moveY, piece, board)
{
    console.log("---------------------------");
    console.log("checking KING movement");
    console.log("pieceX: " + pieceX + " pieceY: " + pieceY + " moveX: " + moveX + " moveY: " + moveY);
    if ((pieceX === moveX - 1 && pieceY === moveY) || 
        (pieceX === moveX + 1 && pieceY === moveY) || 
        (pieceX === moveX && pieceY === moveY - 1) || 
        (pieceX === moveX && pieceY === moveY + 1))
    {
        console.log("valid KING movement")
        return true;
    }
    if ((pieceX === moveX - 1 && pieceY === moveY - 1) || 
        (pieceX === moveX + 1 && pieceY === moveY + 1) || 
        (pieceX === moveX + 1 && pieceY === moveY - 1) || 
        (pieceX === moveX - 1&& pieceY === moveY + 1))
    {
        console.log("valid KING movement")
        return true;
    }
    console.log("invalid KING move");
    return false;
}