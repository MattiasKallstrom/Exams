import React, { Component } from 'react';
import './default.css';
import { auth, userProfile } from './firebase/utils';
import { BrowserRouter as  Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages
import Home from './pages/Home/home';
import About from './pages/About/about';
import Contact from './pages/Contact/contact';
import Login from './pages/Login/login';
import Register from './pages/Register/register';


//Layout
import MainLayout from './layouts/MainLayout';

const initialState = {
  loggedIn: null
};



class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      ...initialState
    });
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
     if (userAuth) {
       const userReference = await userProfile(userAuth);
       userReference.onSnapshot(snapshot => {
         this.setState({
           loggedIn: {
             id: snapshot.id,
             ...snapshot.data()
           }
         })
       })
     }
     this.setState({
       ...initialState
     });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { loggedIn } = this.state;
    return (
     <Route basename="/Exams">
      <div className="App">
        <div className="">
         
        </div>
      </div>
    </Route>
    )
  }
  
}



export default App;
