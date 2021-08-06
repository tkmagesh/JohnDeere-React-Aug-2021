import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BugStats from './components/bug-stats'
import BugSort from './components/bug-sort'
import BugEdit from './components/bug-edit'
import BugList from './components/bug-list'

import bugActionCreators from './actions';

import './index.css'

const Bugs = ({bugs, addNew, projects, load }) => {
    return(
        <>
            <h3>Bugs</h3>
            <input type="button" value="Load" onClick={load}/>
            <BugStats bugs={bugs} />
            <BugSort />
            <BugEdit addNew={addNew} projects={projects} />
            <BugList/>
        </>
    );
}

function mapStateToProps(storeState){
    const bugsFromStore = storeState.bugState;
    const projectsFromStore = storeState.projectState;
    return { bugs : bugsFromStore, projects : projectsFromStore };
}

function mapDispatchToProps(dispatch){
    const { addNew, load } = bindActionCreators(bugActionCreators, dispatch);
    return { addNew, load };
}

export default connect(mapStateToProps, mapDispatchToProps)(Bugs);