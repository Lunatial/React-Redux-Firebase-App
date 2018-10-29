import authReducer from './authReducer'
import projectReducer from './projectReducer'
import navReducer from './navReducer'
import profileForm from './profileFormReducer'
import {combineReducers} from 'redux'
import {reducer as toastrReducer} from "react-redux-toastr";
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    nav: navReducer,
    toastr: toastrReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    profileForm: profileForm,
    form: formReducer
})


export default rootReducer