import React, { Component } from "react";
import "./index.css";
import { auth, userProfile } from "./firebase/utils";
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Pages
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";

//Layout
import MainLayout from "./layouts/MainLayout";

const initialState = {
  loggedIn: null,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userReference = await userProfile(userAuth);
        userReference.onSnapshot((snapshot) => {
          this.setState({
            loggedIn: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      this.setState({
        ...initialState,
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { loggedIn } = this.state;
    return (
      <Route basename="/">
        <div className="App">
          <Switch>
            <Route
              basename="/Exams"
              exact
              path="/Exams"
              render={() => (
                <MainLayout loggedIn={loggedIn}>
                  <Home />
                </MainLayout>
              )}
            />
            <Route
              basename="/Exams"
              exact
              path="/about"
              render={() => (
                <MainLayout loggedIn={loggedIn}>
                  <About />
                </MainLayout>
              )}
            />
            <Route
              basename="/Exams"
              exact
              path="/contact"
              render={() => (
                <MainLayout loggedIn={loggedIn}>
                  <Contact />
                </MainLayout>
              )}
            />
            <Route
              basename="/Exams"
              exact
              path="/register"
              render={() =>
                loggedIn ? (
                  <Redirect to="/Exams" />
                ) : (
                  <MainLayout loggedIn={loggedIn}>
                    <Register />
                  </MainLayout>
                )
              }
            />
            <Route
              basename="/Exams"
              exact
              path="/login"
              render={() =>
                loggedIn ? (
                  <Redirect to="/Exams" />
                ) : (
                  <MainLayout loggedIn={loggedIn}>
                    <Login />
                  </MainLayout>
                )
              }
            />
          </Switch>
        </div>
      </Route>
    );
  }
}

export default App;
