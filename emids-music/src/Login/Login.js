import React from "react";
import "./RegisterLogin.css"
import musicImg from "../music.jpg"
import { Link } from "react-router-dom";
import ApiManager from "../Shared/ApiManager";

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

    validateUserCredentials = () => {
        ApiManager.validateCredentials(this.state).then(email => {
            //const navigate = useNavigate();
            if (email) {
                //navigate('/layout');
                const activeUser = {
                    email: email,
                    isActive: true
                }
                const currentUser = activeUser.email;
                localStorage.setItem('currentUser', currentUser);
                let activeUsers = JSON.parse(localStorage.getItem('activeUser'));
                if (!activeUsers) {
                    activeUsers = [];
                    activeUsers.push(activeUser);
                    localStorage.setItem('activeUser', JSON.stringify(activeUsers));
                } else {
                    const active = JSON.parse(localStorage.getItem('activeUser'));
                    const index = active.findIndex(user => user.email === localStorage.getItem('currentUser'));
                    if (index !== -1) {
                        active[index].isActive = true;
                        localStorage.setItem('activeUser', JSON.stringify(active));
                    } else {
                        activeUsers.push(activeUser);
                        localStorage.setItem('activeUser', JSON.stringify(activeUsers));
                    }
                }
                window.location.href = '/layout/dashboard';
            }
            else {
                this.errors.error = true;
                this.setState({ errorMsg: 'Username or Password is wrong' });
            }
        })
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
            this.validateUserCredentials();
        }
    }

    render() {
        return (
            <div className="register-login">
                <div>
                    <div className="base-container">
                        <div className="image-div">
                            <img src={musicImg} alt="Emids Music" className="image" />
                        </div>
                        <div className="login-form">
                            <div className="header">Login</div>
                            <div className="content">
                                <div className="form">
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleInputChange} />
                                        <span className="error-msg">{this.errors.username && <span>{this.state.userNameErrorMsg}</span>}</span>
                                    </div>
                                    <div className="form-group margin">
                                        <label>Password</label>
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