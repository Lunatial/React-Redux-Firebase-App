import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";

import ProfileForm from './ProfileReduxForm'
import { profileFormInit } from "../../store/actions/profileFormActions";

class Profile extends Component {

    componentDidMount() {
        this.props.profileFormInit()
    }

    onSubmit = (e, value) => {
        e.preventDefault();
        console.log(value)
        // this.props.signUp(this.state)
    };

    render() {
        const { auth, profile, firebase } = this.props
        if (!auth.uid) {
            return <Redirect to="/" />
        }        

        return (
            <div className="container boxShadow">
                <ProfileForm handleSubmit={this.onSubmit} profile={profile} auth={auth} />
            </div>
        );
    }
}

const mapStateTopProps = state => {
    // console.log(state.firebase.profile)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        firebase: state.firebase
    }
}

const mapDispatchToProps = dispatch => {
    return {
        profileFormInit: () => dispatch(profileFormInit())
    }
}

export default connect(mapStateTopProps, mapDispatchToProps)(Profile);
