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
        case 'SIGNOUT_SUCCESS':
            console.log('signed out success')
            return state
        case 'SIGNUP_SUCCESS':
            console.log('signed up success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('login error')
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }
};

export default authReducer;