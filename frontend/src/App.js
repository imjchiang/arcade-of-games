import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Signup from './components/Signup';
import Login from './components/Login';

import Profile from './components/Profile';

import Playgames from './components/Playgames';
import Home from './components/Home';
import About from './components/About';

import Gomoku from './components/games/gomoku/Gomoku';
import Checkers from './components/games/checkers/Checkers';
import Chess from './components/games/chess/Chess';

import './App.css';

const PrivateRoute = ({ component: Component, ...rest }) => 
{
    const user = localStorage.getItem('jwtToken');
    return <Route {...rest} render={(props) => 
    {
        return user ? <Component {...rest} {...props} /> : <Redirect to="/login" />
    }}/>;
}

function App() 
{
    // set state values
    let [currentUser, setCurrentUser] = useState("");
    let [isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect(() => 
    {
        let token;
        if (!localStorage.getItem('jwtToken')) {
            setIsAuthenticated(false);
        } 
        else 
        {
            token = jwt_decode(localStorage.getItem('jwtToken'));
            setAuthToken(localStorage.jwtToken);
            setCurrentUser(token);
            setIsAuthenticated(true);
        }
    }, []);

    const nowCurrentUser = (userData) => 
    {
        console.log('nowCurrentUser is working...');
        setCurrentUser(userData);
        setIsAuthenticated(true);
    };

    const handleLogout = () => 
    {
        if (localStorage.getItem('jwtToken')) {
            localStorage.removeItem('jwtToken');
            setCurrentUser(null);
            setIsAuthenticated(false);
        }
    }

    console.log('Current User', currentUser);
    console.log('Authenicated', isAuthenticated);

    return (
        <div>
            <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
            <div className="container mt-5">
                <Switch>
                    <Route path="/signup" component={ Signup } />
                    <Route 
                        path="/login" 
                        render={ (props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser}/>} 
                    />

                    <Route 
                        exact
                        path="/games/play" 
                        render={ (props) => <Playgames {...props} user={currentUser}/>} 
                    />

                    <Route 
                        exact
                        path="/game/gomoku" 
                        render={ (props) => <Gomoku {...props} user={currentUser}/>} 
                    />

                    <Route 
                        exact
                        path="/game/checkers" 
                        render={ (props) => <Checkers {...props} user={currentUser}/>} 
                    />

                    <Route 
                        exact
                        path="/game/chess" 
                        render={ (props) => <Chess {...props} user={currentUser}/>} 
                    />

                    <PrivateRoute path="/profile" component={ Profile } user={currentUser} />
                    <Route path="/about" component={ About } />
                    <Route exact path="/" component={ Home } />
                </Switch>
            </div>
            <Footer />
        </div>
    );
}

export default App;
