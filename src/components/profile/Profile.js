import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";

import ProfileForm from './ProfileReduxForm'


class Profile extends Component {

    render() {
        const { auth, history } = this.props
        if (!auth.uid) {
            return <Redirect to="/" />
        }        

        return (
            <div className="container boxShadow">
                <ProfileForm history={history} />
            </div>
        );
    }
}

const mapStateTopProps = state => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateTopProps)(Profile);
