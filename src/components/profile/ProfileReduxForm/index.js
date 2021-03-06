import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";

import {customInput} from "./fields";
import {required, maxLength, minLength, emailVal} from "./validation";

import {
    profileFormInit,
    updateProfile
} from "../../../store/actions/profileFormActions";

class ProfileForm extends React.Component {
    componentDidMount() {
        this.props.profileFormInit();
    }

    onFormSubmit = (values) => {
        this.props.updateProfile(values);
    };

    render() {
        const {handleSubmit, history} = this.props;
        return (
            <form
                onSubmit={handleSubmit(this.onFormSubmit)}
                className="white"
            >
                <h5 className="grey-text text-darken-3">Profile</h5>
                <div className="input-field">
                    <Field
                        label="Email *"
                        name="email"
                        component={customInput}
                        validate={[required, emailVal]}
                        required={true}
                        type="text"
                    />
                </div>
                {/* <div className="input-field">
          <Field
            label="Password"
            name="password"
            component={customInput}
            type="password"
          />
        </div> */}
                <div className="input-field">
                    <Field
                        label="Display Name"
                        name="displayName"
                        component={customInput}
                        type="text"
                    />
                </div>
                <div className="input-field">
                    <Field label="Photo URL" name="photoURL" component={customInput}/>
                </div>

                <div className="input-field">
                    <button type="submit" className="btn pink lighten-1 z-depth-0">
                        OK
                    </button>
                    <button type="button"
                            onClick={() => history.goBack()}
                            className="btn grey lighten-1 z-depth-0"
                            style={{marginLeft: '1rem'}}>
                        Go Back
                    </button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialValues: state.profileForm.initialValues
    };
};

const mapDispatchToProps = {
    profileFormInit,
    updateProfile
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(reduxForm({form: "eventForm", enableReinitialize: true})(ProfileForm));
