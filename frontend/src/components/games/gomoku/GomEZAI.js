export function fourInRowHoriz(grid, piece)
{
    for (let i = 0; i < grid.length; i++)
    {
        for (let j = 0; j < grid[i].length - 4; j++)
        {
            if (grid[i][j] === undefined && grid[i][j + 1] === piece && 
                grid[i][j + 2] === piece && grid[i][j + 3] === piece && grid[i][j + 4] === piece)
            {
                return [i, j];
            }

            if (grid[i][j] === piece && grid[i][j + 1] === piece && 
                grid[i][j + 2] === piece && grid[i][j + 3] === piece && grid[i][j + 4] === undefined)
            {
                return [i, j + 3]
            }
        }
    }
}

export function threeInRowHorizNONE(grid, piece)
{
    for (let i = 0; i < grid.length; i++)
    {
        for (let j = 0; j < grid[i].length - 4; j++)
        {
            if (grid[i][j] === undefined && grid[i][j + 1] === piece && grid[i][j + 2] === piece && 
                grid[i][j + 3] === piece && grid[i][j + 4] === undefined)
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

export function threeInRowHorizONE(grid, piece)
{
    for (let i = 0; i < grid.length; i++)
    {
        for (let j = 0; j < grid[i].length - 3; j++)
        {
            if (grid[i][j] === undefined && grid[i][j + 1] === piece && 
                grid[i][j + 2] === piece && grid[i][j + 3] === piece)
            {
                return [i, j];
            }

            if (grid[i][j] === piece && grid[i][j + 1] === piece && 
                grid[i][j + 2] === piece && grid[i][j + 3] === undefined)
            {
                return [i, j + 3]
            }
        }
    }
}
