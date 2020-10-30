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
            console.log("Black Wins!");
        }
        if (fiveInRowW === 4)
        {
            console.log("White Wins!");
        }
    }
}

