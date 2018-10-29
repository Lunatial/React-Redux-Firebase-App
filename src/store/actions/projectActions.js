import {toastr} from 'react-redux-toastr'

export const createProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT_SUCCESS', project });
            toastr.success('Success!', 'Project has been created')
        }).catch(err => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err,});
            toastr.error('Ooups!', 'Something went wrong')
        });
    }
};

export const deleteProject = (projectId) => {
    return (dispatch, getState, {getFirestore}) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').doc(projectId).delete().then(() => {
            dispatch({ type: 'DELETE_PROJECT_SUCCESS', payload: projectId});
        }).catch(err => {
            dispatch({ type: 'DELETE_PROJECT_ERROR', err,});
        });
    }
};