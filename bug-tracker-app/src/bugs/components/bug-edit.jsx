import { useState } from 'react';

const BugEdit = ({addNew, projects}) => {
    const [newBugName, setNewBugName] = useState('');
    const [selectedProjectId, setSelectedProjectId] = useState(0)
    const [errors, setErrors] = useState({})

    const onAddNewClick = () => {
        let validations = {};
        if (newBugName === ''){
            validations = {...validations, name: 'Please enter a bug name'}
        } else {
            validations = {...validations, name: ''}
        }
        if (selectedProjectId === 0 ){
            validations = {...validations, project: 'Please select a project'}
        } else {
            validations = {...validations, project: ''}
        }
        const errorCount = Object.keys(validations).reduce((result, key) => validations[key] !== '' ? result + 1: result, 0)
        console.log(errorCount)
        if (errorCount === 0){
            setErrors({})
            addNew(newBugName, selectedProjectId)
        } else {
            setErrors(validations)
        }
    }
    return (
        <section className="edit">
            <label htmlFor="">Bug Name :</label>
            <input type="text" onChange={evt => setNewBugName(evt.target.value)} />
            {errors['name'] && <span>{errors['name']}</span>}
            <br/>
            <label htmlFor=""> Project : </label>
            <select name="" id="" onChange={evt => setSelectedProjectId(evt.target.value)}>
                <option value="">Select Project</option>
                { projects.map(project => <option key={project.id} value={project.id}>{project.name}</option>)}
            </select>
            {errors['project'] && <span>{errors['project']}</span>}
            <br/>
            <input type="button" value="Add New" onClick={onAddNewClick} />
        </section>

    )
};

export default BugEdit;