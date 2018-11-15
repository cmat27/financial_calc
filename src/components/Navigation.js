import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import SignOutButtom from './SignOut';
import AuthUserContext from './AuthUserContext';

const Navigation = () =>

    <AuthUserContext.Consumer>
        {authUser => authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />}
    </AuthUserContext.Consumer>

const NavigationAuth = () =>
    <div class="tabs">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul rel="navLink">
            <li><Link to={routes.HOME} >Home</Link></li>
            <li><Link to={routes.ACCOUNT} > Account</Link></li>
            <li> <SignOutButtom />
            </li>
        </ul>

    </div>
    



const NavigationNonAuth = () =>
    <ul>
        <li><Link to={routes.SIGN_IN} rel="navLink">Sign In</Link></li>
        <li><Link to={routes.SIGN_UP} rel="navLink">Sign Up</Link></li>
        <li><Link to={routes.LANDING} rel="navLink">Landing</Link></li>
    </ul>


export default Navigation;