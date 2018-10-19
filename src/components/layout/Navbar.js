import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import appTitle from '../../assets/img/appTitle/title2.png'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {showMobilMenu: false};
    }

    render() {
        const {auth, profile} = this.props
        const currentLinks = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>
        return (
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to='/' className="brand-logo">
                        <img src={appTitle} alt={"logo"} style={{maxHeight: '62px'}}/>
                    </Link>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="sidenav" id="mobile-demo" style={{transform: "translateX(-105%)"}}>
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">Javascript</a></li>
                        <li><a href="mobile.html">Mobile</a></li>
                    </ul>
                    {currentLinks}
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(NavBar)