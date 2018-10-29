import {toastr} from 'react-redux-toastr'

export const profileFormInit = () => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        var user = firebase.auth().currentUser;

        if (user) {
            dispatch({
                type: "PROFILE_FORM_LOAD",
                payload: {
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                }
            });
        }
    };
};

export const updateProfile = values => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        var user = firebase.auth().currentUser;
        // var newPassword = getASecureRandomPassword();

        user
            .updateProfile({
                displayName: `${values.displayName}`,
                photoURL: `${values.photoURL}`
            })
            .then(() => {
                dispatch({
                    type: "PROFILE_UPDATE_SUCCESS",
                    payload: values
                });
                toastr.success('Success!', 'Profile has been updated')
            })
            .catch(error => {
                console.error(error);
                dispatch({
                    type: "PROFILE_UPDATE_FAIL",
                    payload: error
                });
                toastr.error('Ooups!', 'Something went wrong')
            });

        user
            .updateEmail(values.email)
            .then(() => {
                dispatch({
                    type: "PROFILE_EMAIL_UPDATE_SUCCESS",
                    payload: values
                });
            })
            .catch(error => {
                console.error(error);
                dispatch({
                    type: "PROFILE_EMAIL_UPDATE_FAIL",
                    payload: error
                });
            });

        // user
        //   .updatePassword(newPassword)
        //   .then((newPassword) => {
        //       console.log(newPassword)
        //     dispatch({
        //         type: "PROFILE_PASSWORD_UPDATE_SUCCESS",
        //         payload: newPassword
        //       });
        //   })
        //   .catch(error => {
        //     // An error happened.
        //   });
    };
};
