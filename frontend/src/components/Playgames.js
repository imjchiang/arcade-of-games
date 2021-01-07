import React from 'react';
import { Link } from 'react-router-dom';

const Playgames = (props) => 
{
    console.log(props);
    
    return (
        <div>
            <h1>Play and Explore</h1>
            {/* need api call to access all games and display games here with button to add them */}
            {/* check if gaame is in gamesPlayed list and if it is, then use remove button instead of add button */}
            <h3><Link to="/game/gomoku">Gomoku</Link></h3>
            <h3><Link to="/game/checkers">Checkers</Link></h3>
            <h3><Link to="/game/chess">Chess</Link></h3>
        </div>
    );
}

export default Playgames;