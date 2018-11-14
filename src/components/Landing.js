
import React from 'react';
import * as routes from '../constants/routes';
import { Link } from 'react-router-dom';


const LandingPage =()=>
<div class="landing">
    <h1> Chores list </h1>
    <Link to={routes.SIGN_IN}>Sign In</Link>
</div>

export default LandingPage