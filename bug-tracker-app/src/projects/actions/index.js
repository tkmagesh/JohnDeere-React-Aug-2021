 let currentProjectId = 0;
 const projectActionCreators = {
    addNew(newProjectName){
        const newProject = { id : ++currentProjectId, name : newProjectName }
        return { type : 'PROJECT_ADD', payload : newProject };
    }
};

export default projectActionCreators;