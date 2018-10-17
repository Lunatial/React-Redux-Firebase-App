const initState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'asd asd asd'},
        {id: '3', title: 'egg hunt with yoshi', content: 'ert ert ert ert'}
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return null;
        default:
            return state
    }
};

export default projectReducer;