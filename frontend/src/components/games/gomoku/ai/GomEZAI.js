// ----------------------------------------------------------------------------------------------------
//                                              HORIZONTAL                                             
// ----------------------------------------------------------------------------------------------------
export function fourHoriz(grid, piece)
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
                return [i, j + 4];
            }
        }
    }
}

export function threeHorizNone(grid, piece)
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

export function threeHorizOne(grid, piece)
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
                return [i, j + 3];
            }
        }
    }
}

// ----------------------------------------------------------------------------------------------------
//                                               VERTICAL                                              
// ----------------------------------------------------------------------------------------------------
export function fourVert(grid, piece)
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
                return [i + 4, j];
            }
        }
    }
}

export function threeVertNone(grid, piece)
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

export function threeVertOne(grid, piece)
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
                return [i + 3, j];
            }
        }
    }
}

// ----------------------------------------------------------------------------------------------------
//                                      DIAGONAL (L to R from TOP)                                     
// ----------------------------------------------------------------------------------------------------
export function fourDiagFromTL(grid, piece)
{
    for (let i = 0; i < grid.length - 4; i++)
    {
        for (let j = 0; j < grid[i].length - 4; j++)
        {
            if (grid[i][j] === undefined && grid[i + 1][j + 1] === piece && 
                grid[i + 2][j + 2] === piece && grid[i + 3][j + 3] === piece && grid[i + 4][j + 4] === piece)
            {
                return [i, j];
            }

            if (grid[i][j] === piece && grid[i + 1][j + 1] === piece && 
                grid[i + 2][j + 2] === piece && grid[i + 3][j + 3] === piece && grid[i + 4][j + 4] === undefined)
            {
                return [i + 4, j + 4];
            }
        }
    }
}

export function threeDiagNoneFromTL(grid, piece)
{
    for (let i = 0; i < grid.length - 4; i++)
    {
        for (let j = 0; j < grid[i].length - 4; j++)
        {
            if (grid[i][j] === undefined && grid[i + 1][j + 1] === piece && 
                grid[i + 2][j + 2] === piece && grid[i + 3][j + 3] === piece && grid[i + 4][j + 4] === undefined)
            {
                if (Math.floor(Math.random()*2) === 0)
                {
                    return [i, j];
                }
                return [i + 4, j + 4];
            }
        }
    }
}

export function threeDiagOneFromTL(grid, piece)
{
    for (let i = 0; i < grid.length - 3; i++)
    {
        for (let j = 0; j < grid[i].length; j++)
        {
            if (grid[i][j] === undefined && grid[i + 1][j + 1] === piece && 
                grid[i + 2][j + 2] === piece && grid[i + 3][j + 3] === piece)
            {
                return [i, j];
            }

            if (grid[i][j] === piece && grid[i + 1][j + 1] === piece && 
                grid[i + 2][j + 2] === piece && grid[i + 3][j + 3] === undefined)
            {
                return [i + 3, j + 3];
            }
        }
    }
}
