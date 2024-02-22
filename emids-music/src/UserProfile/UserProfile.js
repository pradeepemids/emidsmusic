import React from "react";
import "./UserProfile.css"
import blankPhoto from "./blankPhoto.png"
import ApiManager from "../Shared/ApiManager";


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

        let activeUserEmail = localStorage.getItem("currentUser");
        let cachedUsers = JSON.parse(localStorage.getItem('cachedUsers'));
        let activeUser = cachedUsers.find(user => user.email === activeUserEmail);
        this.state = {
            username: activeUser.username,
            email: activeUser.email,
            firstname: activeUser.firstname,
            lastname: activeUser.lastname,
            phone: activeUser.phone,
            address1: activeUser.address1,
            address2: activeUser.address2,
            city: activeUser.city,
            state: activeUser.state,
            zipcode: activeUser.zipcode,
            subscribe: activeUser.subscribe,
            saveProfileMsg: ''
        }
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
        ApiManager.saveUser(this.state).then(result => {
            if (result)
                this.setState({ saveProfileMsg: 'Profile details saved successfully.' });
        });
    }

    render () {
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
                                    <FormGroup type="text" name="phone" label="Phone" state={this.state.phone} onchange={this.handleInputChange} onkeydown={this.handleKeyDown} />
                                    <FormGroup type="text" name="address1" label="Address1" state={this.state.address1} onchange={this.handleInputChange} onkeydown={this.handleKeyDown} />
                                    <FormGroup type="text" name="address2" label="Address2" state={this.state.address2} onchange={this.handleInputChange} onkeydown={this.handleKeyDown} />
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