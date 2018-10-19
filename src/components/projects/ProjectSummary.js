import React from 'react';
import moment from 'moment'
import {firebaseConnect} from 'react-redux-firebase'

const ProjectSummary = ({project, firebase: {remove}}) =>
    <div className="card z-depth-0 project-summary boxShadow">
        <div className='card-content grey-text text-darken-3 '>
            <span onClick={() => remove(`projects/${project.id}`)}>
                <i className="right small material-icons">delete</i>
            </span>
            <span className="card-title">{project.title}</span>
            <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
            <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
            <code>{JSON.stringify(project.id, null, 4)}</code>
        </div>
    </div>;

export default firebaseConnect()(ProjectSummary)