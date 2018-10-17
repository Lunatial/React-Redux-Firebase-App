export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOG_IN_SUCCESS'});
        }).catch(err => {
            dispatch({type: 'LOG_IN_ERROR'}, err);
        });
    }
};