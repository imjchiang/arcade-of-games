export function fiveInRowHoriz(grid)
{
    let fiveInRowB = 0;
    let fiveInRowW = 0;
    for (let i = 0; i < grid.length; i++)
    {
        for (let j = 1; j < grid[i].length; j++)
        {
            if (grid[i][j] === "x")
            {
                if (grid[i][j - 1] === "x")
                {
                    fiveInRowB++;
                }
                else
                {
                    fiveInRowB = 0;
                }
            }
            else if (grid[i][j] === "o")
            {
                if (grid[i][j - 1] === "o")
                {
                    fiveInRowW++;
                }
                else
                {
                    fiveInRowW = 0;
                }
            }
        }
        if (fiveInRowB === 4)
        {
            console.log("Black Wins Horizontally!");
        }
        if (fiveInRowW === 4)
        {
            console.log("White Wins Horizontally!");
        }
    }
}

export function fiveInRowVert(grid)
{
    let fiveInRowB = 0;
    let fiveInRowW = 0;
    for (let col = 0; col < grid[0].length; col++)
    {
        for (let i = 1; i < grid.length; i++)
        {
            if (grid[i][col] === "x")
            {
                if (grid[i - 1][col] === "x")
                {
                    fiveInRowB++;
                }
                else
                {
                    fiveInRowB = 0;
                }
            }
            else if (grid[i][col] === "o")
            {
                if (grid[i - 1][col] === "o")
                {
                    fiveInRowW++;
                }
                else
                {
                    fiveInRowW = 0;
                }
            }
            if (fiveInRowB === 4)
            {
                console.log("Black Wins Vertically!");
            }
            if (fiveInRowW === 4)
            {
                console.log("White Wins Vertically!");
            }
        }
    }
}