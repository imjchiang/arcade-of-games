import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => 
{
    let i = 0;

    console.log(props);

    const userData = props.user ? 
    (<div>
        <h1>{props.user.username}'s Profile</h1>
        {/* <p><strong>ID:</strong> {props.user.id}</p>  */}
        <p><strong>Name:</strong> {props.user.name}</p> 
        <p><strong>Username:</strong> {props.user.username}</p> 
        <p><strong>Email:</strong> {props.user.email}</p> 
        
        <>
            {props.user.gamesPlayed
            ? <div>
                <h1>Game Stats</h1>
                <>
                    {
                        props.user.gamesPlayed.map((eachGame, idx) =>
                        {
                            return(<h3>{eachGame} {idx}</h3>)
                        })
                    }
                </>
            </div>
            :
            <></>
            }
        </>
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

export default Profile;