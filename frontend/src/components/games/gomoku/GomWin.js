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
            return("bw");
        }
        if (fiveInRowW === 4)
        {
            return("ww");
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
                return("bw");
            }
            if (fiveInRowW === 4)
            {
                return("ww");
            }
        }
    }
}

export function fiveInRowDiagLtoR(grid)
{
    let fiveInRowB = 0;
    let fiveInRowW = 0;
    for (let i = grid.length - 1; i > 3; i--)
    {
        for (let j = grid[i].length; j > 3; j--)
        {
            let row = i;
            let col = j;
            let incrementorB = 0;
            let incrementorW = 0;

            while (incrementorB < 5 && grid[i][j] === "x" && grid[row][col] === "x")
            {
                incrementorB++;
                row--;
                col--;
                fiveInRowB++;
            }
            while (incrementorW < 5 && grid[i][j] === "o" && grid[row][col] === "o")
            {
                incrementorW++;
                row--;
                col--;
                fiveInRowW++;
            }

            if (incrementorB === 5)
            {
                return("bw")
            }
            if (incrementorW === 5)
            {
                return("ww")
            }
        }
    }
}

export function fiveInRowDiagRTtoLB(grid)
{
    let fiveInRowB = 0;
    let fiveInRowW = 0;
    for (let i = 0; i < grid.length - 4; i++)
    {
        for (let j = grid[i].length; j > 3; j--)
        {
            let row = i;
            let col = j;
            let incrementorB = 0;
            let incrementorW = 0;

            while (incrementorB < 5 && grid[i][j] === "x" && grid[row][col] === "x")
            {
                incrementorB++;
                row++;
                col--;
                fiveInRowB++;
            }
            while (incrementorW < 5 && grid[i][j] === "o" && grid[row][col] === "o")
            {
                incrementorW++;
                row++;
                col--;
                fiveInRowW++;
            }

            if (incrementorB === 5)
            {
                return("bw")
            }
            if (incrementorW === 5)
            {
                return("ww")
            }
        }
    }
}