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
      <div className="min-h-screen">
        <div className=" w-full bg-hero bg-auto">
          <div className="text-3xl md:text-5xl flex text-uppercase text-red-500 font-bold justify-center -ml-5 p-5">
            Mälarö El AB
          </div>
        </div>
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
                <button
                  type="submit"
                  className="bg-black font-semibold text-uppercase hover:bg-red-500 cursor-pointer p-3 my-2 text-white text-xl items-center hover:no-underline	flex justify-center"
                >
                  Logga in
                </button>

                <div className="googleSignin">
                  <div>
                    {" "}
                    <button
                      onClick={signInWithGoogle}
                      type="submit"
                      className="bg-black font-semibold text-uppercase hover:bg-red-500 cursor-pointer p-3 my-2 text-white text-xl items-center hover:no-underline	flex justify-center"
                    >
                      Logga in med Google konto
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default SignIn;
