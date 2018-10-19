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
            <li>
                <NavLink to='/create' onClick={handleHideMenu}>New Project</NavLink>
            </li>
            <li>
                <a className="link-button" style={{color: 'black'}} onClick={this.onClick}>Log Out</a>
            </li>
            <li>
                <NavLink
                    to='/'
                    style={{color: 'pink'}}
                    onClick={handleHideMenu}>
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