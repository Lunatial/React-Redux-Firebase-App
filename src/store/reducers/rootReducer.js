import authReducer from './authReducer'
import projectReducer from './projectReducer'
import navReducer from './navReducer'
import profileFormReducer from './profileFormReducer'
import {combineReducers} from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    nav: navReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    profileFormReducer: profileFormReducer,
    form: formReducer
})


export default rootReducer