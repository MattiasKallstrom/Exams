import React, { Component } from "react";
import { auth, userProfile } from "./../../firebase/utils";
import "./styles.css";
import Input from "../forms/Input/input";
import Button from "../forms/Button/button";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPass: "",
  error: "",
};

class SignUp extends Component {
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

  submitHandler = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPass } = this.state;
    if (password !== confirmPass) {
      const err = ["Password has to match"];
      this.setState({
        error: err,
      });
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await userProfile(user, { displayName });
      this.setState({
        ...initialState,
      });
    } catch (err) {}
  };

  render() {
    const { displayName, email, password, confirmPass, error } = this.state;

    return (
      <div>
        <div className=" w-full bg-hero bg-auto">
          <div className="text-3xl md:text-5xl flex text-uppercase text-red-500 font-bold justify-center -ml-5 p-5">
            Registrera
          </div>
        </div>
        <div className="signup flex">
          {error.length > 0 && (
            <ul className="errorMsg">
              {error.map((err, index) => {
                return <li key={index}>{err}</li>;
              })}
            </ul>
          )}
          <div className="wrapper">
            <div className="formWrapper">
              <h1>Registrera dig</h1>

              <form onSubmit={this.submitHandler}>
                <Input
                  placeholder="Namn"
                  type="text"
                  name="displayName"
                  value={displayName}
                  onChange={this.changeHandler}
                />
                <Input
                  placeholder="E-post"
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.changeHandler}
                />
                <Input
                  placeholder="Lösenord"
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.changeHandler}
                />
                <Input
                  placeholder="Upprepa lösenord"
                  type="password"
                  name="confirmPass"
                  value={confirmPass}
                  onChange={this.changeHandler}
                />

                <button
                  type="submit"
                  className="bg-black font-semibold text-uppercase hover:bg-red-500 cursor-pointer p-3 h-12 w-24 my-2 text-white text-xl items-center hover:no-underline	flex justify-center"
                >
                  Skicka
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
