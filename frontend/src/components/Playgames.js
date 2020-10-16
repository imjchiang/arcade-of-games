import React from 'react';
import { Link } from 'react-router-dom';

const Playgames = (props) => 
{
    console.log(props);
    const userData = props.user ? 
    (<div>
        <h1>Play Your Games</h1>
        {/* add api call to user's games and allow him to click on button to redirect to game page */}
    </div>) : <h4>Loading...</h4>

    const errorDiv = () => {
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

export default Playgames;