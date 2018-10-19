import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutMobilMenu = (props) =>
    <Fragment>
        <li>
            <NavLink to='/signup' onClick={props.handleHideMenu}>Signup</NavLink>
        </li>
        <li>
            <NavLink to='/signin' onClick={props.handleHideMenu}>Login</NavLink>
        </li>
    </Fragment>

export default SignedOutMobilMenu;