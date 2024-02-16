import React from "react";
import "./UserProfile.css"
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

export default class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            firstname: '',
            lastname: '',
            organization: '',
            dob: '',
            email: '',
            password: '',
            confirmPassword: '',
            subscribe: false,
            firstNameErrorMsg: '',
            lastNameErrorMsg: '',
            orgErrorMsg: '',
            dobErrorMsg: '',
            emailErrorMsg: '',
            passwordErrorMsg: '',
            confirmPasswordErrorMsg: '',
            showPassword: false,
            showConfirmPassword: false,
            saveProfileMsg: ''
        };

        this.errors = {
            firstname: false,
            lastname: false,
            organization: false,
            dob: false,
            email: false,
            password: false,
            confirmPassword: false,
        };
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        var value = event.target.value;

        this.setState({ [name]: value });

        this.setState({ saveProfileMsg: '' });

        if (name === 'firstname') {
            if (!value) {
                this.errors.firstname = true;
                this.setState({ firstNameErrorMsg: 'Please enter Firstname' });
            } else if (value.length < 5) {
                this.errors.firstname = true;
                this.setState({ firstNameErrorMsg: 'Firstname must have atleast 5 characters' });
            } else {
                this.errors.firstname = false;
                this.setState({ firstNameErrorMsg: '' });
            }
        } else if (name === 'lastname') {
            if (!value) {
                this.errors.lastnamename = true;
                this.setState({ lastNameErrorMsg: 'Please enter Lastname' });
            } else if (value.length < 5) {
                this.errors.lastnamename = true;
                this.setState({ lastNameErrorMsg: 'Lastname must have atleast 5 characters' });
            } else {
                this.errors.lastname = false;
                this.setState({ lastNameErrorMsg: '' });
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
        } else if (name === 'confirmPassword') {
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

    validateFirstNameInput = () => {
        if (!this.state.firstname) {
            this.errors.firstname = true;
            this.setState({ firstNameErrorMsg: 'Please enter Firstname' });
        } else if (this.state.firstname.length < 5) {
            this.errors.firstname = true;
            this.setState({ firstNameErrorMsg: 'Firstname must have at least 5 characters' });
        } else {
            this.errors.firstname = false;
            this.setState({ firstNameErrorMsg: '' });
        }
    }

    validateLastNameInput = () => {
        if (!this.state.lastname) {
            this.errors.lastname = true;
            this.setState({ lastNameErrorMsg: 'Please enter Lastname' });
        } else if (this.state.lastname.length < 5) {
            this.errors.lastname = true;
            this.setState({ lastNameErrorMsg: 'Lastname must have at least 5 characters' });
        } else {
            this.errors.lastname = false;
            this.setState({ lastNameErrorMsg: '' });
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
        if (!this.state.firstname || !this.state.lastname || !this.state.email || !this.state.password || !this.state.confirmPassword) {
            if (!this.state.firstname) {
                this.errors.firstname = true;
                this.setState({ firstNameErrorMsg: 'Please enter Firstname' });
            }
            if (!this.state.lastname) {
                this.errors.lastname = true;
                this.setState({ lastNameErrorMsg: 'Please enter Lastname' });
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
            if (this.state.firstname && this.state.lastname && this.state.email && this.state.password && this.state.confirmPassword && 
                !this.errors.firstname && !this.errors.lastname && !this.errors.email && !this.errors.password && !this.errors.confirmPassword) {
                this.setState({ saveProfileMsg: 'Profile details saved successfully.' });
            } else {
                this.errors.firstname = false;
                this.errors.lastname = false;
                this.errors.email = false;
                this.errors.password = false;
                this.errors.confirmPassword = false;
            }
        }
    }

    render() {
        return (
            <div className="user-profile">
                <div>
                    <div className="base-container">
                        <div className="profile">
                            <div className="header">Profile</div>
                            <div className="content">
                                <div className="form">
                                    <table>
                                    <tr><td colSpan={2}>
                                        <div className="form-group">
                                            <label htmlFor="username">Username</label>
                                            <input type="text" name="username" value={this.state.username} placeholder="Username" />
                                        </div>
                                    </td></tr>
                                    <tr>
                                        <td><div className="form-group">
                                            <label htmlFor="firstname">Firstname</label>
                                            <input type="text" name="firstname" value={this.state.firstname} placeholder="Firstname" onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} onBlur={this.validateFirstNameInput} />
                                            <span className="error-msg">{this.errors.firstname && <span>{this.state.firstNameErrorMsg}</span>}</span>
                                        </div></td>
                                        <td><div className="form-group">
                                            <label htmlFor="lastname">Lastname</label>
                                            <input type="text" name="lastname" value={this.state.lastname} placeholder="Lastname" onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} onBlur={this.validateLastNameInput} />
                                            <span className="error-msg">{this.errors.lastname && <span>{this.state.lastNameErrorMsg}</span>}</span>
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td><div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" name="email" value={this.state.email} placeholder="Email" onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} onBlur={this.validateEmailInput} />
                                            <span className="error-msg">{this.errors.email && <span>{this.state.emailErrorMsg}</span>}</span>
                                        </div></td>
                                        <td><div className="form-group">
                                            <label htmlFor="organization">Organization</label>
                                            <input type="text" name="organization" value={this.state.organization} placeholder="Organization" onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} />
                                        </div></td>                                        
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-group">
                                                <div>
                                                    <label htmlFor="password">Password</label>
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
                                        </td>
                                        <td>
                                            <div className="form-group">
                                                <label htmlFor="confirmPassword">Confirm Password</label>
                                                <div>
                                                    <input type={this.state.showConfirmPassword ? 'text' : 'password'} name="confirmPassword" value={this.state.confirmPassword} placeholder="Confirm Password" onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} onBlur={this.validateConfirmPasswordInput} />
                                                    <button className="eye" onClick={this.setShowConfirmPassword}>{this.state.showConfirmPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}</button>
                                                </div>
                                                <span className="error-msg">{this.errors.confirmPassword && <span>{this.state.confirmPasswordErrorMsg}</span>}</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr><td colSpan={2}>
                                        <div>
                                            <span><label>
                                            <input type="checkbox" name="subscribe" value={this.state.subscribe} onChange={this.handleInputChange} /> Subscribe for updates</label></span>
                                        </div>
                                    </td></tr>
                                    </table>
                                </div>
                            </div>
                            <div className="footer">
                                <button type="submit" className="btn" onClick={this.handleSubmit}>
                                    Save
                                </button>
                            </div>
                            <div className="save-msg">
                                <label>{this.state.saveProfileMsg}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}