import React from 'react';
import moment from 'moment'
import {connect} from "react-redux";
import {deleteProject} from "../../store/actions/projectActions";

const ProjectSummary = ({project, deleteProject}) =>
    <div className="card z-depth-0 project-summary boxShadow">
        <div className='card-content grey-text text-darken-3 '>
            <span onClick={() => deleteProject(project)}>
                <i className="right small material-icons">delete</i>
            </span>
            <span className="card-title">{project.title}</span>
            <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
            <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
            <code>{JSON.stringify(project, null, 4)}</code>
        </div>
    </div>;

const mapDispatchToProps = dispatch => {
    return {
        deleteProject: (project) => dispatch(deleteProject(project.id))
    }
}

export default connect(null, mapDispatchToProps)(ProjectSummary)