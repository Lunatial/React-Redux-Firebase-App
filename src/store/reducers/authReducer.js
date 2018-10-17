const initState = {authError: null};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOG_IN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: null
            }
        case 'LOG_IN_ERROR':
            console.log('login error')
            return {
                ...state,
                authError: 'Login failed'
            }
        default:
            return state
    }
};

export default authReducer;