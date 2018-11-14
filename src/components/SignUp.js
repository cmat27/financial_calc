
import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import * as routes from '../constants/routes';
import { auth } from '../firebase';



const SignUpPage =({history})=>
<div class ="webForm"> 
    <h1> Sign Up</h1>
    <SignUpForm history={history} />
</div>
const INITIAL_STATE={
    username:'',
    email:'',
    passwordOne:'',
    passwordTwo:'',
    error:null,
}

const byPropKey = (propertyName, value)=>()=>({
    [propertyName]: value,
});

class SignUpForm extends Component{
    constructor(props){
        super(props);

        this.state ={...INITIAL_STATE};
    }

    onSubmit =(event) => {
        const{
            username,
            email,
            passwordOne,
        }=this.state;

        const{history,}=this.props;

        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({...INITIAL_STATE});
                history.push(routes.HOME);
            })
            .catch(error=>{
                this.setState(byPropKey('erro',error));
            });

            event.preventDefault();

    }
    render(){
        const{
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        }= this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email===''||
            username==='';
        

        return(
            <form onSubmit={this.onSubmit}>
                <input
                    rel="userInput"
                    value={username}
                    onChange={event=>this.setState(byPropKey('username', event.target.value))}
                    type="text"
                    placeholder="Full Name"
                />
                <br/>
                <input
                    rel="userInput"
                    value={email}
                    onChange={event=>this.setState(byPropKey('email', event.target.value))}
                    type="text"
                    placeholder="Email Address"
                />
                <br/>
                <input
                    rel="userInput"
                    value={passwordOne}
                    onChange={event=>this.setState(byPropKey('passwordOne', event.target.value))}
                    type="text"
                    placeholder="Password"
                />
                <br/>
                <input
                    rel="userInput"
                    value={passwordTwo}
                    onChange={event=>this.setState(byPropKey('passwordTwo', event.target.value))}
                    type="text"
                    placeholder="Confirm Password"
                />
                <br/>
                <button rel="primaryButton" disabled={isInvalid} type="submit">Sign Up</button>

                {error && <p>{error.message}</p>}

            </form>
        );
    }
}

const SignUpLink =()=>
<p>
    {/* <span rel="shortMsg">Don't have an account? {''}</span> */}
    <Link rel="redirectLink"  to={routes.SIGN_UP}>Sign Up</Link>
</p>

export default withRouter(SignUpPage);

export{
    SignUpForm,
    SignUpLink,
    }