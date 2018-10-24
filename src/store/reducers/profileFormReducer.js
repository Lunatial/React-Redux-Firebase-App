const initState = {};

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