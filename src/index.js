import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import ReduxToastr from "react-redux-toastr";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css"
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import fbConfig from './store/config/fbConfig'

import './index.css';
import App from './App';
import rootReducer from './store/reducers/rootReducer'

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reactReduxFirebase(fbConfig, {
                useFirestoreForProfile: true,
                userProfile: 'users',
                attachAuthIsReady: true,
                timestampsInSnapshots: true
            }
        ),
        reduxFirestore(fbConfig),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <Fragment>
                <ReduxToastr
                    position="top-right"
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                />
                <App/>
            </Fragment>
        </Provider>, document.getElementById('root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
