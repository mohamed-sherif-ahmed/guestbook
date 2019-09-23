import React from 'react';
import './login.css';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();
        alert(this.state.email + this.state.password);
        localStorage.setItem('loggedIn', 'true');
    }

    render() {
        return (
            <div className="login-banner">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <div className="form-entry">
                        <h3>Login</h3>
                    </div>
                    <div className="form-entry">
                        <input type="text" placeholder="email" name="email" onChange={this.handleChange}/>
                    </div>
                    <div className="form-entry">
                        <input type="text" placeholder="password" name="password" onChange={this.handleChange}/>
                    </div>
                    <div className="form-entry">
                        <input type="submit" value="login" />
                    </div>
                </form>
            </div>
        );
    }
}

