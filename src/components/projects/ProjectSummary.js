import React from "react";
import moment from "moment";
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect, getVal} from "react-redux-firebase";

const ProjectSummary = ({project, firebase: {remove}}) => (
    <div className="card z-depth-0 project-summary boxShadow">
        <div className="card-content grey-text text-darken-3 ">
      <span
          onClick={() =>
              remove(
                  `projects/${project.id}`,
                  () => console.log("siker")
              )
          }
      >
        <i className="right small material-icons">delete</i>
      </span>
            <span className="card-title">{project.title}</span>
            <p>
                Posted by {project.authorFirstName} {project.authorLastName}
            </p>
            <p className="grey-text">
                {moment(project.createdAt.toDate()).calendar()}
            </p>
        </div>
    </div>
);

const enhance = compose(
    firestoreConnect(
        props => [`projects/${props.project.id}`],
        connect((state, props) => ({
            project: getVal(
                state.firestore.ordered.projects,
                `projects/${props.project.id}`
            )
        }))
    )
);

export default enhance(ProjectSummary);