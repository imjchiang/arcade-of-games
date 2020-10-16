import React from 'react';
import { Link } from 'react-router-dom';

const Exploregames = (props) => 
{
    console.log(props);
    const userData = props.user ? 
    (<div>
        <h1>Explore and Find New Games to Play Here</h1>
        {/* need api call to access all games and display games here with button to add them */}
        {/* check if gaame is in gamesPlayed list and if it is, then use remove button instead of add button */}
    </div>) : <h4>Loading...</h4>

    const errorDiv = () => 
    {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
    return (
        <div>
            { props.user ? userData : errorDiv() }
        </div>
    );
}

export default Exploregames;