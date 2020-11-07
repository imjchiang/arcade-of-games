export function threeInRowHorizNONE(grid)
{
    let row = 0;
    let col = 0;
    let iterations = 0;
    for (let i = 0; i < grid.length; i++)
    {
        for (let j = 0; j < grid[i].length - 4; j++)
        {
            row = i;
            col = j;
            while (iterations < 5)
            {
                if ((iterations === 0 || iterations === 4) && grid[i][j] === undefined)
                {
                    iterations++;
                }
                else if (iterations > 0 && iterations < 4 && grid[i][j] === "w")
                {
                    iterations++;
                }
                else
                {
                    iterations = 100;
                }
            }
            
            if (iterations === 5)
            {
                return [row, col];
            }
            else
            {
                iterations = 0;
            }
        }
    }
}
