
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../firebase';
import * as routes from '../constants/routes';
import {
    WebFormContainer,
    FormTitle,
    PrimaryButton
  } from "../styled/forms";
  import Divider from "@material-ui/core/Divider";
  import TextField from "@material-ui/core/TextField";

const PasswordForgetPage =()=>
    <WebFormContainer>
        <FormTitle> Password Reset </FormTitle>
        <Divider/>
        <PasswordForgetForm/>
    </WebFormContainer>

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


<TextField
          id="email"
          label="E-mail"
          margin="dense"
          fullWidth="true"
          onChange ={event => this.setState(byPropKey('email', event.target.value))}

        />

                    <PrimaryButton rel="primaryButton" disabled={isInvalid} type="submit"> Reset Password </PrimaryButton>

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
