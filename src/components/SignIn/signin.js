import React, { Component } from "react";
import "./styles.css";
import { signInWithGoogle, auth } from "./../../firebase/utils";
import Input from "./../forms/Input/input";
import Button from "./../forms/Button/button";
import { Container } from "react-bootstrap";

const initialState = {
  email: "",
  password: "",
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  submitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState,
      });
    } catch (err) {}
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <div className="signin">
          <div className="formWrapper">
            <h1>Inloggning</h1>
            <form onSubmit={this.submitHandler}>
              <Input
                type="email"
                name="email"
                value={email}
                placeholder="E-post"
                onChange={this.changeHandler}
              />
              <Input
                type="password"
                name="password"
                value={password}
                placeholder="Lösenord"
                onChange={this.changeHandler}
              />
              <Button type="submit">Logga in</Button>

              <div className="googleSignin">
                <div>
                  <Button onClick={signInWithGoogle}>
                    Logga in med Google
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    );
  }
}

export default SignIn;
