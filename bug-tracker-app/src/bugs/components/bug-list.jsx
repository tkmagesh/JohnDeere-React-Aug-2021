import BugItem from './bug-item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import bugActionCreators from '../actions'

const BugList = ({bugs, toggle, remove, removeClosed}) => {
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

export default connect(
    storeState =>({bugs : storeState.bugState}) /* mapStateToProps */,
    dispatch => bindActionCreators(bugActionCreators, dispatch) /* mapDispatchToProps */
)(BugList);
