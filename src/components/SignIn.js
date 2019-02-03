import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { SignUpLink } from "./SignUp";
import { PasswordForgetLink } from "./PasswordForget";
import { auth } from "../firebase";
import * as routes from "../constants/routes";
import {
  WebFormContainer,
  FormTitle,
  PrimaryButton
} from "../styled/forms";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";

const SignInPage = ({ history }) => (
  <WebFormContainer>
    <FormTitle> Login </FormTitle>
    <Divider />
    <SignInForm history={history} />
    <Divider />
    <PasswordForgetLink />
    <SignUpLink />
  </WebFormContainer>
);
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
        alert("fail");
      });
    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;

    const isValid = password !== "" || email !== "";

    return (
      <form onSubmit={this.onSubmit}>
        <TextField
          id="user-name"
          label="User Name"          
          margin="dense"
          fullWidth="true"
          onChange={event =>
            this.setState(byPropKey("email", event.target.value))
          }

        />
        <TextField
          id="password"
          label="Password"
          margin="dense"
          fullWidth="true"
          onChange={event =>
            this.setState(byPropKey("password", event.target.value))
          }
        />
        <PrimaryButton disabled={!isValid} type="submit" rel="primaryButton">
          Sign In
        </PrimaryButton>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withRouter(SignInPage);

export { SignInForm };
