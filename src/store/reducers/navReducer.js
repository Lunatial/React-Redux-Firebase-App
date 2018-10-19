const initState = {showMobilMenu: false};

const navReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SHOW_MOBILE_MENU':
            return Object.assign({}, state, {
                showMobilMenu: action.payload
            })
        default:
            return state
    }
};

export default navReducer;