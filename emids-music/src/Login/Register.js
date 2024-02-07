import React from "react";
import "./RegisterLogin.css"
import musicImg from "../music.jpg"


export default class Register extends React.Component {
    constructor(props) {
        super(props);
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
                                        <input type="text" name="username" placeholder="username" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" name="email" placeholder="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="text" name="password" placeholder="password" />
                                    </div>
                                </div>
                            </div>
                            <div className="footer">
                                <button type="button" className="btn">
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