import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

import {createProject} from '../../store/actions/projectActions';

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    };

    handleChange = (e) => {
        const {id, value} = e.target;
        this.setState({
            [id]: value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(JSON.stringify(this.state, null, 4))
        this.props.createProject(this.state)
        this.props.history.push('/');
    };

    render() {
        const {auth, history} = this.props
        if (!auth.uid) {
            return <Redirect to="/signin"/>
        }

        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create new project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea className="materialize-textarea" id="content" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button type="submit" className="btn pink lighten-1 z-depth-0">Create</button>
                        <button type="button"
                                onClick={() => history.goBack()}
                                className="btn grey lighten-1 z-depth-0"
                                style={{marginLeft: '1rem'}}>
                            Go Back
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
