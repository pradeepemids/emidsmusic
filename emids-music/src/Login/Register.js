import React from "react";
import "./RegisterLogin.css"
import musicImg from "../music.jpg"
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            userNameErrorMsg: '',
            emailErrorMsg: '',
            passwordErrorMsg: '',
            errorMsg: ''
        };

        this.errors = {
            username: false,
            email: false,
            password: false,
            error: false
        };
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        var value = event.target.value;

        this.setState({ [name]: value });
        this.setState({ errorMsg: '' });

        if (name === 'username') {
            if (!value) {
                this.errors.username = true;
                this.setState({ userNameErrorMsg: 'Please enter Username' });
            } else if (value.length < 5) {
                this.errors.username = true;
                this.setState({ userNameErrorMsg: 'Username must have atleast 5 characters' });
            } else {
                this.errors.username = true;
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
        } else {
            const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            if (!value) {
                this.errors.password = true;
                this.setState({ passwordErrorMsg: 'Please enter Password' });
            } else if (!value.match(isValidPassword)) {
                this.errors.password = true;
                this.setState({ passwordErrorMsg: 'Please enter a valid Password' });
            } else {
                this.errors.password = true;
                this.setState({ passwordErrorMsg: '' });
            }
        }
    }

    validateNameInput = () => {
        if (!this.state.username) {
            this.errors.username = true;
            this.setState({ userNameErrorMsg: 'Please enter Username' });
        } else if (this.state.username.length < 5) {
            this.errors.username = true;
            this.setState({ userNameErrorMsg: 'Username must have atleast 5 characters' });
        } else {
            this.errors.username = true;
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
        // At least 8 characters
        // At least one uppercase letter
        // At least one lowercase letter
        // At least one number
        const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!this.state.password) {
            this.errors.password = true;
            this.setState({ passwordErrorMsg: 'Please enter Password' });
        } else if (!this.state.email.match(isValidPassword)) {
            this.errors.password = true;
            this.setState({ passwordErrorMsg: 'Please enter a valid Password' });
        } else {
            this.errors.password = true;
            this.setState({ passwordErrorMsg: '' });
        }
    }

    handleKeyDown = (e) => {
        if (e.key === " ") {
            e.preventDefault();
        }
    }

    handleSubmit = () => {
        if (!this.state.username || !this.state.email || !this.state.password) {
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
        } else {
            //const navigate = useNavigate();
            if (this.state.username && this.state.password) {
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
                            <div className="header">Register</div>
                            <div className="content">
                                <div className="form">
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} onBlur={this.validateNameInput} />
                                        <span className="error-msg">{this.errors.username && <span>{this.state.userNameErrorMsg}</span>}</span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" name="email" value={this.state.email} placeholder="Email" onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} onBlur={this.validateEmailInput} />
                                        <span className="error-msg">{this.errors.email && <span>{this.state.emailErrorMsg}</span>}</span>
                                    </div>
                                    <div className="form-group">
                                        <div>
                                            <label htmlFor="password">Password</label>
                                            <Tooltip className="info" title="Password must contain at least 8 characters with one uppercase letter, one lowercase letter and one number">
                                                <InfoOutlinedIcon />
                                            </Tooltip>
                                        </div>

                                        <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} onBlur={this.validatePasswordInput} />
                                        <span className="error-msg">{this.errors.password && <span>{this.state.passwordErrorMsg}</span>}</span>
                                    </div>
                                    <div className="error-msg">
                                        {this.errors.error && <span>{this.state.errorMsg}</span>}
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