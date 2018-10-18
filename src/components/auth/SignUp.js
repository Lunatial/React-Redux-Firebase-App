import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from "react-redux";

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    };

    handleChange = (e) => {
        const {id, value} = e.target;
        this.setState({
            [id]: value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(this.state, null, 4))
    };

    render() {
        const {auth} = this.props
        if (auth.uid) {
            return <Redirect to="/"/>
        }

        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sing Up</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateTopProps = state => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateTopProps)(SignIn);
