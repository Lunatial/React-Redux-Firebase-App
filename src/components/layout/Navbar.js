import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const NavBar = () =>
    <nav className="nav-wrapper grey darken-3">
        <div className="container">
            <Link to='/' className="brand-logo">MaterialLessSuffering</Link>
            <SignedInLinks/>
            <SignedOutLinks/>
        </div>
    </nav>;

const mapStateToProps = state => {
    console.log(state)
    return {

    }
}

export default connect(mapStateToProps)(NavBar);