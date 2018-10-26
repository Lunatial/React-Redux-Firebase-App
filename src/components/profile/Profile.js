import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";

import ProfileForm from './ProfileReduxForm'


class Profile extends Component {

    render() {
        const { auth } = this.props
        if (!auth.uid) {
            return <Redirect to="/" />
        }        

        return (
            <div className="container boxShadow">
                <ProfileForm />
            </div>
        );
    }
}

const mapStateTopProps = state => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        firebase: state.firebase
    }
}

export default connect(mapStateTopProps)(Profile);
