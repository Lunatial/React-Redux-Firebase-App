import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import SignedInMobilMenu from './SignedInMobilMenu'
import SignedOutMobilMenu from './SignedOutMobilMenu'
import appTitle from '../../assets/img/appTitle/title2.png'
import {showMobileMenu} from "../../store/actions/navActions"

class NavBar extends Component {

    handleShowMenu = (e) => {
        e.preventDefault()
        this.props.showMobileMenu(true)
        window.document.body.style.overflow = "hidden"
    };

    handleHideMenu = (e) => {
        e.preventDefault()
        this.props.showMobileMenu(false)
        window.document.body.style.overflow = "visible"
    };

    render() {
        const {auth, profile, showMobilMenu} = this.props
        const currentLinks = auth.uid
            ? <SignedInLinks profile={profile}/>
            : <SignedOutLinks/>
        const mobilMenu = auth.uid
            ? <SignedInMobilMenu profile={profile} handleHideMenu={this.handleHideMenu}/>
            : <SignedOutMobilMenu handleHideMenu={this.handleHideMenu}/>
        return (
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to='/' className="brand-logo">
                        <img src={appTitle} alt={"logo"} style={{maxHeight: '62px'}}/>
                    </Link>
                    <a href="" className="sidenav-trigger" onClick={this.handleShowMenu}>
                        <i className="material-icons">menu</i>
                    </a>

                    {showMobilMenu && <div
                        className="sidenav-overlay"
                        style={{display: "block", opacity: 1}}
                        onClick={this.handleHideMenu}>

                    </div>}

                    <ul className="sidenav" style={{
                        transform: `translateX(${showMobilMenu ? '0%' : '-105%'})`,
                        transitionDuration: '0.5s'
                    }}>
                        {mobilMenu}
                    </ul>

                    {currentLinks}
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        showMobilMenu: state.nav.showMobilMenu
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showMobileMenu: (status) => dispatch(showMobileMenu(status))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)