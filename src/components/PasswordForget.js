
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../firebase';
import * as routes from '../constants/routes';

const PasswordForgetPage =()=>
    <div class="webForm">
        <h1> Password Reset </h1>
        <PasswordForgetForm/>
    </div>

    const byPropKey =(propertyName, value)=> () =>({
        [propertyName]: value,
    });

    const INITIAL_STATE ={
        email: '',
        error: null,
    };

    class PasswordForgetForm extends Component{
        constructor(props){
            super(props);
            this.state ={...INITIAL_STATE};
        }

        onSubmit =(event)=>{
            const {email} = this.state;

            auth.doPasswordReset(email)
                .then(() => {
                    this.setState({...INITIAL_STATE});
                })
                .catch(error =>{
                    this.setState(byPropKey('error', error));
                });
            event.preventDefault();
        }

        render(){
            const{
                email,
                error,
            } = this.state;

            const isInvalid = email === '';

            return(
                <form onSubmit={this.onSubmit}>
                    <input 
                        rel="userInput"
                        value={this.state.email}
                        onChange ={event => this.setState(byPropKey('email', event.target.value))}
                        type="text"
                        placeholder="Email Address"
                    />
                    <br/>
                    <button rel="primaryButton" disabled={isInvalid} type="submit"> Reset Password </button>

                    {error && <p>{error.message}</p>}
                </form>
            );
        }
    }

    const PasswordForgetLink =()=> 
    <p>
        <Link rel="redirectLink" to={routes.PASSWORD_FOGET}>Forgot Password</Link>
    </p>

    export default PasswordForgetPage;

    export{
        PasswordForgetForm,
        PasswordForgetLink,
    }
