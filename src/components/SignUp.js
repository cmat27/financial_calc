import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../constants/routes";
import { auth } from "../firebase";
import {
  WebFormContainer,
  FormTitle,
  PrimaryButton
} from "../styled/forms";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";

const SignUpPage = ({ history }) => (
  <WebFormContainer>
    <FormTitle> Sign Up</FormTitle>
    <Divider />
    <SignUpForm history={history} />
  </WebFormContainer>
);
const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, passwordOne } = this.state;

    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey("erro", error));
      });

    event.preventDefault();
  };
  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={this.onSubmit}>
        <TextField
          id="name"
          label="Full Name"
          margin="dense"
          fullWidth="true"
          onChange={event =>
            this.setState(byPropKey("username", event.target.value))
          }
        />

        <TextField
          id="email"
          label="E-mail"
          margin="dense"
          fullWidth="true"
          value={email}
          onChange={event =>
            this.setState(byPropKey("email", event.target.value))
          }
        />

        <TextField
          id="passwordOne"
          label="Password"
          margin="dense"
          fullWidth="true"
          value={passwordOne}
          onChange={event =>
            this.setState(byPropKey("passwordOne", event.target.value))
          }
        />

        <TextField
          id="passwordOne"
          label="Confirm Password"
          margin="dense"
          fullWidth="true"
          value={passwordTwo}
          onChange={event =>
            this.setState(byPropKey("passwordTwo", event.target.value))
          }
        />
        <PrimaryButton rel="primaryButton" disabled={isInvalid} type="submit">
          Sign Up
        </PrimaryButton>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    {/* <span rel="shortMsg">Don't have an account? {''}</span> */}
    <Link rel="redirectLink" to={routes.SIGN_UP}>
      Sign Up
    </Link>
  </p>
);

export default withRouter(SignUpPage);

export { SignUpForm, SignUpLink };
