// ----------------------------------------------------------------------------------------------------
//                                              HORIZONTAL                                             
// ----------------------------------------------------------------------------------------------------
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
                return [i, j + 4]
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

// ----------------------------------------------------------------------------------------------------
//                                               VERTICAL                                              
// ----------------------------------------------------------------------------------------------------
export function fourInRowVert(grid, piece)
{
    for (let i = 0; i < grid.length - 4; i++)
    {
        for (let j = 0; j < grid[i].length; j++)
        {
            if (grid[i][j] === undefined && grid[i + 1][j] === piece && 
                grid[i + 2][j] === piece && grid[i + 3][j] === piece && grid[i + 4][j] === piece)
            {
                return [i, j];
            }

            if (grid[i][j] === piece && grid[i + 1][j] === piece && 
                grid[i + 2][j] === piece && grid[i + 3][j] === piece && grid[i + 4][j] === undefined)
            {
                return [i + 4, j]
            }
        }
    }
}

export function threeInRowVertNONE(grid, piece)
{
    for (let i = 0; i < grid.length - 4; i++)
    {
        for (let j = 0; j < grid[i].length; j++)
        {
            if (grid[i][j] === undefined && grid[i + 1][j] === piece && 
                grid[i + 2][j] === piece && grid[i + 3][j] === piece && grid[i + 4][j] === undefined)
            {
                if (Math.floor(Math.random()*2) === 0)
                {
                    return [i, j];
                }
                return [i + 4, j];
            }
        }
    }
}

export function threeInRowVertONE(grid, piece)
{
    for (let i = 0; i < grid.length - 3; i++)
    {
        for (let j = 0; j < grid[i].length; j++)
        {
            if (grid[i][j] === undefined && grid[i + 1][j] === piece && 
                grid[i + 2][j] === piece && grid[i + 3][j] === piece)
            {
                return [i, j];
            }

            if (grid[i][j] === piece && grid[i + 1][j] === piece && 
                grid[i + 2][j] === piece && grid[i + 3][j] === undefined)
            {
                return [i + 3, j]
            }
        }
    }
}
