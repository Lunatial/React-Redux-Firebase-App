const initState = {};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT_SUCCESS':
            console.log('created project');
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('created project error:', action.err);
            return state;
        case 'DELETE_PROJECT_SUCCESS':
            console.log('DELETE_PROJECT_SUCCESS');
            return state;
        case 'DELETE_PROJECT_ERROR':
            console.error('delete project error:', action.err);
            return state;
        default:
            return state
    }
};

export default projectReducer;