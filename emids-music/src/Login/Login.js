import React from "react";
import "./RegisterLogin.css"
import musicImg from "../music.jpg"
import { Link } from "react-router-dom";

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            userNameErrorMsg: '',
            passwordErrorMsg: '',
            errorMsg: ''
        };

        this.errors = {
            username: false,
            password: false,
            error: false
        };
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        var value = event.target.value;

        this.setState({ [name]: value });
        this.setState({ errorMsg: '' });

        this.errors = {
            username: false,
            password: false,
            error: false
        };
    }

    handleSubmit = () => {
        if (!this.state.username || !this.state.password) {
            if (!this.state.username) {
                this.errors.username = true;
                this.setState({ userNameErrorMsg: 'Please enter Username' });
            }
            if (!this.state.password) {
                this.errors.password = true;
                this.setState({ passwordErrorMsg: 'Please enter Password' });
            }
        } else {
            //const navigate = useNavigate();
            if (this.state.username.toLowerCase() === 'emidsmusic' && this.state.password === "EmidsMusic") {
                //navigate('/layout');
                localStorage.setItem('isUserActive', true);
                window.location.href = '/layout/dashboard';
            }
            else {
                this.errors.error = true;
                this.setState({ errorMsg: 'Username or Password is wrong' });
            }
        }
    }

    render() {
        return (
            <div className="login">
                <div>
                    <div className="base-container">
                        <div>
                            <img src={musicImg} alt="Emids Music" className="image" />
                        </div>
                        <div className="login-form">
                            <div className="header">Login</div>
                            <div className="content">
                                <div className="form">
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleInputChange} />
                                        <span className="error-msg">{this.errors.username && <span>{this.state.userNameErrorMsg}</span>}</span>
                                    </div>
                                    <div className="form-group margin">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleInputChange} />
                                        <span className="error-msg">{this.errors.password && <span>{this.state.passwordErrorMsg}</span>}</span>
                                    </div>
                                    <div className="error-msg">
                                        {this.errors.error && <span>{this.state.errorMsg}</span>}
                                    </div>
                                </div>
                                <div className="link">
                                    New User? <Link to="/register" className="link-color">Sign up</Link>
                                </div>
                            </div>
                            <div className="footer">
                                <button type="submit" className="btn" onClick={this.handleSubmit}>
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}