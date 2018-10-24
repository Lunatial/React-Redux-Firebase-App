const initState = {
    email: '',
    displayName: '',
    photoURL: ''
};

const profileFormReducer = (state = initState, action) => {
    switch (action.type) {
        case 'PROFILE_FORM_LOAD':
            console.log('PROFILE_FORM_LOAD', action.payload);
            return {
                ...state,
                email: action.payload
            };
        default:
            return state
    }
};

export default profileFormReducer;

// You can set a user's email address with the updateEmail method. For example:

// var user = firebase.auth().currentUser;

// user.updateEmail("user@example.com").then(function() {
//   // Update successful.
// }).catch(function(error) {
//   // An error happened.
// });