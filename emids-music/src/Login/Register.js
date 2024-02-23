import React from "react";
import "./RegisterLogin.css"
import musicImg from "../music.jpg"
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ApiManager from "../Shared/ApiManager";


export default class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            userNameErrorMsg: '',
            emailErrorMsg: '',
            passwordErrorMsg: '',
            confirmPasswordErrorMsg: '',
            showPassword: false,
            showConfirmPassword: false
        };

        this.errors = {
            username: false,
            email: false,
            password: false,
            confirmPassword: false,
        };
    }
    handleInputChange = (event) => {
        const name = event.target.name;
        var value = event.target.value;

        this.setState({ [name]: value });

        if (name === 'username') {
            if (!value) {
                this.errors.username = true;
                this.setState({ userNameErrorMsg: 'Please enter Username' });
            } else if (value.length < 5) {
                this.errors.username = true;
                this.setState({ userNameErrorMsg: 'Username must have atleast 5 characters' });
            } else {
                this.errors.username = false;
                this.setState({ userNameErrorMsg: '' });
            }
        } else if (name === 'email') {
            const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            if (!value) {
                this.errors.email = true;
                this.setState({ emailErrorMsg: 'Please enter Email' });
            } else if (!value.match(isValidEmail)) {
                this.errors.email = true;
                this.setState({ emailErrorMsg: 'Please enter a valid Email' });
            } else {
                this.errors.email = false;
                this.setState({ emailErrorMsg: '' });
            }
        } else if (name === 'password') {
            const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            if (!value) {
                this.errors.password = true;
                this.setState({ passwordErrorMsg: 'Please enter Password' });
            } else if (!value.match(isValidPassword)) {
                this.errors.password = true;
                this.setState({ passwordErrorMsg: 'Please enter a valid Password' });
            } else {
                this.errors.password = false;
                this.setState({ passwordErrorMsg: '' });
            }
        } else {
            if (!value) {
                this.errors.confirmPassword = true;
                this.setState({ confirmPasswordErrorMsg: 'Please enter Confirm Password' });
            } else if (value !== this.state.password) {
                this.errors.confirmPassword = true;
                this.setState({ confirmPasswordErrorMsg: 'Please enter the same Password' });
            } else {
                this.errors.confirmPassword = false;
                this.setState({ confirmPasswordErrorMsg: '' });
            }
        }
    }

    validateNameInput = () => {
        if (!this.state.username) {
            this.errors.username = true;
            this.setState({ userNameErrorMsg: 'Please enter Username' });
        } else if (this.state.username.length < 5) {
            this.errors.username = true;
            this.setState({ userNameErrorMsg: 'Username must have at least 5 characters' });
        } else {
            this.errors.username = false;
            this.setState({ userNameErrorMsg: '' });
        }
    }

    validateEmailInput = () => {
        const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (!this.state.email) {
            this.errors.email = true;
            this.setState({ emailErrorMsg: 'Please enter Email' });
        } else if (!this.state.email.match(isValidEmail)) {
            this.errors.email = true;
            this.setState({ emailErrorMsg: 'Please enter a valid Email' });
        } else {
            this.errors.email = false;
            this.setState({ emailErrorMsg: '' });
        }
    }

    validatePasswordInput = () => {
        const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!this.state.password) {
            this.errors.password = true;
            this.setState({ passwordErrorMsg: 'Please enter Password' });
        } else if (!this.state.password.match(isValidPassword)) {
            this.errors.password = true;
            this.setState({ passwordErrorMsg: 'Please enter a valid Password' });
        } else {
            this.errors.password = false;
            this.setState({ passwordErrorMsg: '' });
        }
    }

    validateConfirmPasswordInput = () => {
        if (!this.state.confirmPassword) {
            this.errors.confirmPassword = true;
            this.setState({ confirmPasswordErrorMsg: 'Please enter Confirm Password' });
        } else if (this.state.confirmPassword !== this.state.password) {
            this.errors.confirmPassword = true;
            this.setState({ passwordErrorMsg: 'Please enter the same Password' });
        } else {
            this.errors.confirmPassword = false;
            this.setState({ confirmPasswordErrorMsg: '' });
        }
    };

    registerNewUser = () => {
        const newUser = {
            "username": this.state.username,
            "email": this.state.email,
            "password": this.state.password
          };

        ApiManager.registerUser(newUser).then(result => {
            if (result) {
                window.location.href = '/';
            }
            else {
                this.errors.error = true;
                this.setState({ errorMsg: 'Unable to register user' });
            }
        });
    }

    setShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    }

    setShowConfirmPassword = () => {
        this.setState({ showConfirmPassword: !this.state.showConfirmPassword });
    }

    handleKeyDown = (e) => {
        if (e.key === " ") {
            e.preventDefault();
        }
    }

    handleSubmit = () => {
        if (!this.state.username || !this.state.email || !this.state.password || !this.state.confirmPassword) {
            if (!this.state.username) {
                this.errors.username = true;
                this.setState({ userNameErrorMsg: 'Please enter Username' });
            }
            if (!this.state.email) {
                this.errors.email = true;
                this.setState({ emailErrorMsg: 'Please enter Email' });
            }
            if (!this.state.password) {
                this.errors.password = true;
                this.setState({ passwordErrorMsg: 'Please enter Password' });
            }
            if (!this.state.confirmPassword) {
                this.errors.password = true;
                this.setState({ confirmPasswordErrorMsg: 'Please enter Confirm Password' });
            }
        } else {
            
            if (this.state.username && this.state.email && this.state.password && this.state.confirmPassword && !this.errors.username && !this.errors.email && !this.errors.password && !this.errors.confirmPassword) {
                //navigate('/layout');
                  this.registerNewUser();
            } else {
                this.errors.username = false;
                this.errors.email = false;
                this.errors.password = false;
                this.errors.confirmPassword = false
            }
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
                            <div className="header">Register</div>
                            <div className="content">
                                <div className="form">
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} onBlur={this.validateNameInput} />
                                        <span className="error-msg">{this.errors.username && <span>{this.state.userNameErrorMsg}</span>}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" name="email" value={this.state.email} placeholder="Email" onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} onBlur={this.validateEmailInput} />
                                        <span className="error-msg">{this.errors.email && <span>{this.state.emailErrorMsg}</span>}</span>
                                    </div>
                                    <div className="form-group">
                                        <div>
                                            <label>Password</label>
                                            <Tooltip className="info" title="Password must contain at least 8 characters with one uppercase letter, one lowercase letter and one number">
                                                <InfoOutlinedIcon />
                                            </Tooltip>
                                        </div>
                                        <div>
                                            <input type={this.state.showPassword ? 'text' : 'password'} name="password" value={this.state.password} placeholder="Password" onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} onBlur={this.validatePasswordInput} />
                                            <button className="eye" onClick={this.setShowPassword}>{this.state.showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}</button>
                                        </div>
                                        <span className="error-msg">{this.errors.password && <span>{this.state.passwordErrorMsg}</span>}</span>
                                    </div>
                                    <div className="error-msg">
                                        {this.errors.error && <span>{this.state.errorMsg}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <div>
                                            <input type={this.state.showConfirmPassword ? 'text' : 'password'} name="confirmPassword" value={this.state.confirmPassword} placeholder="Confirm Password" onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} onBlur={this.validateConfirmPasswordInput} />
                                            <button className="eye" onClick={this.setShowConfirmPassword}>{this.state.showConfirmPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}</button>
                                        </div>
                                        <span className="error-msg">{this.errors.confirmPassword && <span>{this.state.confirmPasswordErrorMsg}</span>}</span>
                                    </div>
                                </div>
                                <div className="link">
                                    Back to <Link to="/" className="link-color">Login</Link>
                                </div>
                            </div>
                            <div className="footer">
                                <button type="submit" className="btn" onClick={this.handleSubmit}>
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}