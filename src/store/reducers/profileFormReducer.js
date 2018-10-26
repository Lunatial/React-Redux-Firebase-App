const initState = {
    initialValues: {},
    message: '',
    messageColor: ''
};

const profileForm = (state = initState, action) => {
    switch (action.type) {
        case "PROFILE_FORM_LOAD":
            console.log("PROFILE_FORM_LOAD", action.payload);
            return {
                ...state,
                initialValues: action.payload
            };
        case "PROFILE_UPDATE_SUCCESS":
            console.log("PROFILE_UPDATE_SUCCESS", action.payload);
            return {
                initialValues: Object.assign({}, action.payload),
                message: 'Update success',
                messageColor: 'green'
            };
        case "PROFILE_UPDATE_FAIL":
            console.error("PROFILE_UPDATE_FAIL", action.payload);
            return {
                ...state,
                message: action.payload,
                messageColor: 'red'
            };
        default:
            return state;
    }
};

export default profileForm;
