import BugStats from './components/bug-stats'
import BugSort from './components/bug-sort'
import BugEdit from './components/bug-edit'
import BugList from './components/bug-list'
import './index.css'

const Bugs = ({bugs, addNew, toggle, remove, removeClosed }) => {
    return(
        <>
            <h3>Bugs</h3>
            <BugStats bugs={bugs} />
            <BugSort />
            <BugEdit addNew={addNew} />
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </>
    );
}

export default Bugs;