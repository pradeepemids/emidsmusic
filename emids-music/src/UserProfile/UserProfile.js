import React from "react";
import "./UserProfile.css"
import blankPhoto from "./blankPhoto.png"


class FormGroup extends React.Component {
    render () {
        if(this.props.type === "text")
            return (
                <div className="form-group">
                    <label htmlFor={this.props.name}>{this.props.label}</label>
                    <input type="text" name={this.props.name} value={this.props.state} placeholder={this.props.label} onChange={this.props.onchange} onKeyDown={this.props.onkeydown} />
                </div>
            );
        else if(this.props.type === "checkbox")
            return (
                <div>
                    <span><label>
                        <input type="checkbox" name={this.props.name} value={this.props.state} onChange={this.props.onchange} /> {this.props.label}
                    </label></span>
                </div>
            );
    }
}

export default class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            firstname: '',
            lastname: '',
            mobile: '',
            addr1: '',
            addr2: '',
            zipcode: '',
            city: '',
            state: '',
            organization: '',
            subscribe: false,
            saveProfileMsg: ''
        };
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        var value = event.target.value;

        this.setState({ [name]: value });

        this.setState({ saveProfileMsg: '' });
    }

    handleKeyDown = (e) => {
        if (e.key === " ") {
            e.preventDefault();
        }
    }

    handleSubmit = () => {
        this.setState({ saveProfileMsg: 'Profile details saved successfully.' });
    }

    render() {
        return (
            <div className="user-profile">
                <div>
                    <div className="base-container">
                        <div className="profile">
                            <div className="header">Profile Settings</div>
                            <div className="content">
                                <div className="userinfo">
                                    <div className="image-cropper">
                                        <img src={blankPhoto} alt="Photo" className="image" />
                                    </div>
                                    <span className="username">{this.state.username}</span>
                                    <span>{this.state.email}</span>
                                </div>
                                <div className="form">
                                    <FormGroup type="text" name="firstname" label="Firstname" state={this.state.firstname} onchange={this.handleInputChange} onkeydown={this.handleKeyDown} />
                                    <FormGroup type="text" name="lastname" label="Lastname" state={this.state.lastname} onchange={this.handleInputChange} onkeydown={this.handleKeyDown} />
                                    <FormGroup type="text" name="mobile" label="Mobile" state={this.state.mobile} onchange={this.handleInputChange} onkeydown={this.handleKeyDown} />
                                    <FormGroup type="text" name="addr1" label="Address1" state={this.state.addr1} onchange={this.handleInputChange} onkeydown={this.handleKeyDown} />
                                    <FormGroup type="text" name="addr2" label="Address2" state={this.state.addr2} onchange={this.handleInputChange} onkeydown={this.handleKeyDown} />
                                    <FormGroup type="text" name="city" label="City" state={this.state.city} onchange={this.handleInputChange} onkeydown={this.handleKeyDown} />
                                    <FormGroup type="text" name="state" label="State" state={this.state.state} onchange={this.handleInputChange} onkeydown={this.handleKeyDown} />
                                    <FormGroup type="text" name="zipcode" label="Zipcode" state={this.state.zipcode} onchange={this.handleInputChange} onkeydown={this.handleKeyDown} />
                                    <FormGroup type="checkbox" name="subscribe" label="Subscribe to get our latest updates on your Email!" state={this.state.subscribe} onchange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="footer">
                                <button type="submit" className="btn" onClick={this.handleSubmit}>
                                    Save Profile
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