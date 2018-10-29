import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {signIn} from '../../store/actions/authActions'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = (e) => {
        const {id, value} = e.target;
        this.setState({
            [id]: value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    };

    render() {
        const {auth} = this.props
        if (auth.uid) {
            return <Redirect to="/"/>
        }

        return (
            <div className="container boxShadow">
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
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateTopProps = state => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateTopProps, mapDispatchToProps)(SignIn);
