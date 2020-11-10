export function threeInRowHorizNONE(grid)
{
    for (let i = 0; i < grid.length; i++)
    {
        for (let j = 0; j < grid[i].length - 4; j++)
        {
            if (grid[i][j] === undefined && grid[i][j + 1] === "w" && grid[i][j + 2] === "w" && 
                grid[i][j + 3] === "w" && grid[i][j + 4] === undefined)
            {
                if (Math.floor(Math.random()*2) === 0)
                {
                    return [i, j];
                }
                return [i, j + 4];
            }
        }
    }
}

export function threeInRowHorizONE(grid)
{
    for (let i = 0; i < grid.length; i++)
    {
        for (let j = 0; j < grid[i].length - 3; j++)
        {
            if (grid[i][j] === undefined && grid[i][j + 1] === "w" && 
                grid[i][j + 2] === "w" && grid[i][j + 3] === "w")
            {
                return [i, j];
            }

            if (grid[i][j] === "w" && grid[i][j + 1] === "w" && 
                grid[i][j + 2] === "w" && grid[i][j + 3] === undefined)
            {
                return [i, j + 3]
            }
        }
    }
}
