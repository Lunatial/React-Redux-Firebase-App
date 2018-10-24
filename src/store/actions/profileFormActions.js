export const profileFormInit = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        var user = firebase.auth().currentUser;

        if (user) {
            dispatch({
                type: 'PROFILE_FORM_LOAD',
                payload: user.email
            });
        }
    }
};

export const updateProfile = (displayName, photoURL) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: `${displayName}`,
            photoURL: `${photoURL}`
        }).then(() => {
            dispatch({
                type: 'PROFILE_UPDATE_SUCCESS'
            });
        }).catch((error) => {
            console.error(error)
            dispatch({
                type: 'PROFILE_UPDATE_FAIL'
            });
        });
    }
};