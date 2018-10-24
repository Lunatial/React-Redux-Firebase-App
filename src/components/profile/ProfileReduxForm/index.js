import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { customInput } from './fields';
import { required, maxLength, minLength, emailVal } from "./validation";


class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        setTimeout(() => this.handleInitialize(), 450);
    }

    handleInitialize = () => {
        const { profile, auth, initialize } = this.props;
        const initData = {
            "firstName": profile.firstName,
            "lastName": profile.lastName,
            "email": auth.email
        };

        initialize(initData);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form
                onSubmit={handleSubmit}
                className="white"
            >
                <h5 className="grey-text text-darken-3">Profile</h5>
                <div className="input-field">
                    <Field
                        label="Email"
                        name="email"
                        component={customInput}
                        validate={[required, emailVal]}
                        required={true}
                        type="text"
                    />
                </div>
                <div className="input-field">
                    <Field
                        label="Password"
                        name="password"
                        component={customInput}
                        type="password"
                    />
                </div>
                <div className="input-field">
                    <Field
                        label="First Name"
                        name="firstName"
                        component={customInput}
                        validate={[required, minLength, maxLength]}
                        type="text"
                    />
                </div>
                <div className="input-field">
                    <Field
                        label="Last Name"
                        name="lastName"
                        component={customInput}
                        validate={[required, minLength, maxLength]}
                    />
                </div>

                <button
                    type="submit"
                    className="btn pink lighten-1 z-depth-0"
                >
                    OK
                </button>
            </form >
        )
    }
}

export default ProfileForm = reduxForm({
    form: 'ProfileForm'
})(ProfileForm);