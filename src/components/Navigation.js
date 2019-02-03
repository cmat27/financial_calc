import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import SignOutButtom from './SignOut';
import AuthUserContext from './AuthUserContext';
/* --- */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const Navigation = () =>

    <AuthUserContext.Consumer>
        {authUser => authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />}
    </AuthUserContext.Consumer>

const NavigationAuth = () =>

    <AppBar 
        position="sticky"
        color= 'default'
        >
        <Toolbar>
            <Button color="inherit"><Link to={routes.HOME} >
                Home</Link></Button>
            <Button color="green"><Link to={routes.ACCOUNT} >   
               Account</Link></Button>
            <SignOutButtom />
        </Toolbar>
    </AppBar>

    



const NavigationNonAuth = () =>
    <AppBar 
        position="sticky"
        color= 'default'
        >
        <Toolbar>
                      
            <Button color="inherit"><Link to={routes.LANDING}                       rel="navLink">Landing</Link></Button>
            <Button color="green"><Link to={routes.SIGN_UP} 
                rel="navLink">
                 SIGN_UP</Link></Button>
            <Button color="inherit"><Link to={routes.SIGN_IN}  
                rel="navLink">Login</Link></Button>
        </Toolbar>
    </AppBar>

export default Navigation;
