
import React, {Component} from 'react';
import {auth} from '../firebase';
/* import { isValidFormat } from '@firebase/util'; */

const byPropKey = (propertyName, value) => ()=>({
    [propertyName]: value,
});

const INITITAL_STATE ={
    passwordOne: '',
    passwordTwo: '',
    error: null,
}

class PasswordChangeForm extends Component{
    constructor(props){
        super(props);

        this.state ={...INITITAL_STATE};
    }

    onSubmit =(event) => {
        const {passwordOne} = this.state;
        
        auth.doPasswordUpdate(passwordOne)
            .then(() =>{
                this.setState({...INITITAL_STATE});
            })
            .catch(error=>{
                this.setState(byPropKey('error', error));
            });

            event.preventDefault();
    }

    render(){
        const{
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInValid =
             passwordOne !== passwordTwo ||
             passwordOne ==='';
        
        return(
            <form onSubmit ={this.onSubmit}>
                <input
                    value={passwordOne}
                    onChange ={event => this.setState(byPropKey('passwordOne', event.target.value))}
                    type = "text"
                    placeholder="Password"
                />
                <input 
                    value={passwordTwo}
                    onChange ={event=> this.setState(byPropKey('passwordTwo', event.target.value))}
                    type="text"
                    placeholder="Confirm Password"
                />

                <button disabled={isInValid} type="submit">
                    Reset password
                </button>

                {error && <p>{error.message}</p>}

            </form>
        );
    }
}

export default PasswordChangeForm;
