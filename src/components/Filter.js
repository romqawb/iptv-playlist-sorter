import useStyles from '../styles/FilterStyles.js';

const Filter = (props) => {
    const { channels, setSelectedGroups, channelGroups } = props;
    const classes = useStyles();
    let groups;
    const handleFilter = (e) => {
        let groups = document.querySelectorAll('input[type=checkbox]');
        let newGroupsList = [];
        groups.forEach(group => {
            if (group.checked) {
                newGroupsList.push(group.name);
            }
        })
        setSelectedGroups(newGroupsList);
    }

    if (Object.keys(channels).length !== 0) {
        channels.map(channel => !channelGroups.includes(channel.group.title) ? channelGroups.push(channel.group.title) : null)
        groups = (
            channelGroups.map(group => {
                return (
                    <label key={group} htmlFor={group}>{group}
                        <input className="group-checkbox" type="checkbox" defaultChecked onChange={handleFilter} name={group} id={group} />
                    </label>
                )
            })
        )
    }

    return (
        <div className={classes.filter}>
            <form action="#">
                {groups}
            </form>
        </div>
    )
}

export default Filter;