import { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import projectActionCreators from './actions'
import './index.css';

const Projects = ({projects, addNew}) => {
    const [newProjectName, setNewProjectName] = useState('');
    return (
        <Fragment>
        <h3>Projects</h3>
        <hr/>
        <label>Project Name :</label>
        <input type="text" placeholder="Project Name" onChange={evt => setNewProjectName(evt.target.value)} />
        <input type="button" value="Add New" onClick={ () => addNew(newProjectName)} />
        <ol>
            { projects.map(project => (
                <li key={project.id}>
                    <span className="projectName">{project.name}</span>
                    <div>[Id - {project.id}]</div>
                </li>
            ))}
        </ol>
        </Fragment>
    )
}

function mapStateToProps(storeState){
    const projectsFromStore = storeState.projectState
    return { projects : projectsFromStore }
}

function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(projectActionCreators, dispatch);
    return bugActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
