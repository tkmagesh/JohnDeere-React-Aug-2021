import BugItem from './bug-item';
/* import { connect } from 'react-redux'; */
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import bugActionCreators from '../actions'

const BugList = () => {
    const dispatch = useDispatch();
    const bugs = useSelector(state => state.bugState);
   
    const { toggle, remove, removeClosed } = bindActionCreators(bugActionCreators, dispatch);
    const bugList = bugs.map(bug => (
        <BugItem key={bug.id} {...{bug, toggle, remove}} />
    ));
    return(
        <section className="list">
            <ol>
                {bugList}
            </ol>
            <input type="button" value="Remove Closed" onClick={() => removeClosed(bugs)} />
        </section>
    )
}

/* export default connect(
    storeState =>({bugs : storeState.bugState}) ,
    dispatch => bindActionCreators(bugActionCreators, dispatch) 
)(BugList); 
*/

export default BugList;
