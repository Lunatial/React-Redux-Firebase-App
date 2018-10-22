import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutMobilMenu = (props) =>
    <Fragment>
        <li onClick={props.handleHideMenu}>
            <NavLink to='/signup' >Signup</NavLink>
        </li>
        <li onClick={props.handleHideMenu}>
            <NavLink to='/signin' >Login</NavLink>
        </li>
    </Fragment>

export default SignedOutMobilMenu;