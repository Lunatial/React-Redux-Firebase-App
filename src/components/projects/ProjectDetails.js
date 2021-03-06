import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'

const ProjectDetails = (props) => {
    const {project, auth} = props
    if (!auth.uid) {
        return <Redirect to="/signin"/>
    }

    const projectIdFromURL = props.location.pathname.slice(9)

    if (project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0 boxShadow">
                    <div className="card-content">
                         <span style={{cursor: "pointer"}}
                               onClick={() => {
                                   props.firestore
                                       .delete(`projects/${projectIdFromURL}`)
                                       .then(() => props.history.push('/'))
                               }}
                         >
                             <i className="right small material-icons">delete</i>
                         </span>
                        <span className="card-title">
                            {project.title}
                        </span>
                        <p>{project.content}</p>
                        <div className="card-action gret lighten-4 grey-text">
                            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                            <div>{moment(project.createdAt.toDate()).calendar()}</div>
                        </div>
                        <button type="button"
                                onClick={() => props.history.goBack()}
                                className="btn grey lighten-1 z-depth-0"
                                style={{marginLeft: '1rem'}}>
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={"container center"}>
                <p>Loading project...</p>
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails);