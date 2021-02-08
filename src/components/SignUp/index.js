import React, { Component } from 'react';
import { auth, userProfile} from './../../firebase/utils';
import './styles.css';
import Input from './../forms/Input';
import Button from './../forms/Button';

const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPass: '',
    error: ''
};



class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        };
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    submitHandler = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPass} = this.state;
        if (password !== confirmPass) {
            const err = ['Password has to match'];
            this.setState({
                error: err
            });
            return;
        }
        try {
          const {user} = await auth.createUserWithEmailAndPassword(email, password);
          await userProfile(user, {displayName});
          this.setState({
              ...initialState
          });

        } catch(err) {
            
        }
    }

    render() {
        const { displayName, email, password, confirmPass, error } = this.state;

        return(
        <div className="signup">
              {error.length > 0 && (
                <ul className="errorMsg">
                    {error.map((err, index) => {
                        return (
                            <li key={index}>
                                {err}
                            </li>
                        );
                    })}
                </ul>
            )}
            <div className="wrapper">
           
            <div className="formWrapper">
            <h1>
                Registrera dig
            </h1>

            <form onSubmit={this.submitHandler}>
                <Input placeholder="Name" type="text"
                name="displayName"
                value={displayName}
                onChange={this.changeHandler}
                />
                <Input placeholder="E-post" type="text"
                name="email"
                value={email}
                onChange={this.changeHandler}
                />
                <Input placeholder="Lösenord" type="password"
                name="password"
                value={password}
                onChange={this.changeHandler}
                />
                <Input placeholder="Upprepa lösenord" type="password"
                name="confirmPass"
                value={confirmPass}
                onChange={this.changeHandler}
                />

                <Button type="submit">
                    Skicka
                </Button>
            </form>
            </div>

           </div>
        </div>
        );
    }
}

export default SignUp;