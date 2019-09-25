import React from 'react';
import './login.css';
import AuthenticationService from './Authentication.service';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitSignup = this.handleSubmitSignup.bind(this);

        this.AuthenticationService = new AuthenticationService();
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('hanwala3');
        this.AuthenticationService.login(this.state.email, this.state.password).then(response => {
            sessionStorage.setItem("token", response.token);
        })
            .catch(err => {
                console.log(err);
            });
    }

    handleSubmitSignup(e) {
        e.preventDefault();
        this.AuthenticationService.signup({email: this.state.email, password: this.state.password, name: this.state.name}).then(response => {
            sessionStorage.setItem("token", response.token);
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="login-banner">
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <div className="form-entry">
                            <h2>Login</h2>
                        </div>
                        <div className="form-entry">
                            <input type="text" placeholder="email" name="email" onChange={this.handleChange} />
                        </div>
                        <div className="form-entry">
                            <input type="text" placeholder="password" name="password" onChange={this.handleChange} />
                        </div>
                        <div className="form-entry">
                            <input type="submit" value="login" />
                        </div>
                    </form>
                </div>

                <div className="login-banner">
                    <form className="login-form" onSubmit={this.handleSubmitSignup}>
                        <div className="form-entry">
                            <h2>Signup</h2>
                        </div>
                        <div className="form-entry">
                            <input type="text" placeholder="name" name="name" onChange={this.handleChange} />
                        </div>
                        <div className="form-entry">
                            <input type="text" placeholder="email" name="email" onChange={this.handleChange} />
                        </div>
                        <div className="form-entry">
                            <input type="text" placeholder="password" name="password" onChange={this.handleChange} />
                        </div>
                        <div className="form-entry">
                            <input type="submit" value="Signup" />
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

