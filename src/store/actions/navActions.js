export const showMobileMenu = (status) => {
    return dispatch => {
        dispatch({
            type: 'SHOW_MOBILE_MENU',
            payload: status
        });
    }
};

