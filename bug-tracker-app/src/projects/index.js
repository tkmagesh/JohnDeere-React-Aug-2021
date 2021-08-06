import { Fragment, useState } from 'react';

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

export default Projects;
