import BugItem from './bug-item';

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

export default BugList;