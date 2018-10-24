export const profileFormInit = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        var user = firebase.auth().currentUser;

        if (user) {
            dispatch({
                type: 'PROFILE_FORM_LOAD',
                payload: user.email
            });
            console.log(user)
        } 
    }
};