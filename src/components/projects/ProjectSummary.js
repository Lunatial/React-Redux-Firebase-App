import React from 'react';
import moment from 'moment'
import {compose} from 'redux'
import {connect} from 'react-redux'

import {firestoreConnect, firebaseConnect, getVal} from 'react-redux-firebase'

const ProjectSummary = (props) =>
    <div className="card z-depth-0 project-summary boxShadow">
        <div className='card-content grey-text text-darken-3 '>
            <span onClick={() => props.firebaseConnect.remove(`projects/6Uk0aoRU6hOw3pMlhFdp`,console.log('siker'))}>
                <i className="right small material-icons">delete</i>
            </span>
            <span className="card-title">{props.project.title}</span>
            <p>Posted by {props.project.authorFirstName} {props.project.authorLastName}</p>
            <p className="grey-text">{moment(props.project.createdAt.toDate()).calendar()}</p>
            {/*<code>{JSON.stringify(props, null, 4)}</code>*/}
            {console.log(props)}
        </div>
    </div>;

const enhance = compose(
    firestoreConnect(props => ([
            `projects/${props.project.id}`
        ]),
        firebaseConnect(props => ([
                `projects/${props.project.id}`
            ]),
            connect((state, props) => ({
                    project: getVal(state.firestore.ordered.projects,
                        `projects/${props.project.id}`),
                })
            )
        )
    )
)

export default enhance(ProjectSummary)
