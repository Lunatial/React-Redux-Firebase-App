import authReducer from './authReducer'
import projectReducer from './projectReducer'
import navReducer from './navReducer'
import {combineReducers} from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    nav: navReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})


export default rootReducer