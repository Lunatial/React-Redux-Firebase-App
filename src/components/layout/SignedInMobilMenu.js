import React, {Component, Fragment} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from "react-redux"
import {signOut} from "../../store/actions/authActions"

class SignedInMobilMenu extends Component {
    onClick = (e) => {
    this.props.signOut();
    this.props.handleHideMenu(e);
}

render() {
        const {handleHideMenu, profile} = this.props
    return (
        <Fragment>
            <li onClick={handleHideMenu}>
                <NavLink to='/create'>New Project</NavLink>
            </li>
            <li onClick={this.onClick}>
                <a className="link-button" style={{color: 'black'}} >Log Out</a>
            </li>
            <li onClick={handleHideMenu}>
                <NavLink
                    to='/profile'
                    style={{color: 'pink'}}
                    >
                    {profile.initials}
                </NavLink>
            </li>
        </Fragment>
    )
}
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInMobilMenu)