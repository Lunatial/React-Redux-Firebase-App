import React from "react";
import { Field, reduxForm, initialize } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { customInput } from "./fields";
import { required, maxLength, minLength, emailVal } from "./validation";

import {
  profileFormInit,
  updateProfile
} from "../../../store/actions/profileFormActions";

class ProfileForm extends React.Component {
  componentDidMount() {
    this.props.profileFormInit();
    this.handleInitialize();
  }

  handleInitialize = () => {
    const { initialValues } = this.props;
    const initData = {
      email: initialValues.email
    };

    this.props.initialize(initData);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="white">
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
          <Field label="Photo URL" name="photoURL" component={customInput} />
        </div>

        <button type="submit" className="btn pink lighten-1 z-depth-0">
          OK
        </button>
      </form>
    );
  }
}

const onSubmit = (values, dispatch, form) => {
//   console.log("Formvalues: ", values);
//   console.log(updateProfile);
  updateProfile(values);
};

const mapStateToProps = state => {
  return {
    initialValues: state.profileForm.initialValues
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      profileFormInit,
      updateProfile: values => dispatch(updateProfile(values))
    },
    dispatch
  );
};

const reduxFormCreated = reduxForm({
  form: "ProfileForm",
  onSubmit
})(ProfileForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxFormCreated);
