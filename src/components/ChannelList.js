import useStyles from '../styles/ChannelListStyles';

const ChannelList = (props) => {
    const { channels, groups, highlighted, setHighlighted } = props;
    const classes = useStyles();
    const handleClick = (e) => {
        e.target.classList.toggle('selected');
        if (!highlighted.includes(e.target.innerHTML)) {
            setHighlighted([...highlighted, e.target.innerHTML])
        } else {
            setHighlighted(highlighted.filter(channel => channel !== e.target.innerHTML))
        }
    }
    let content;
    if (Object.keys(channels).length !== 0) {
        if (groups) {
            content = (
                channels.map(channel => {
                    if (groups && groups.includes(channel.group)) {
                        return <li key={channel.name} onClick={handleClick}>{channel.name}</li>
                    }
                })
            )
        } else {
            content = (
                channels.map(channel => {
                    return <li key={channel.name} onClick={handleClick}>{channel.name}</li>
                })
            )
        }
    }
    return (
        <div className={classes.channelList}>
            <ul>
                {content}
            </ul>
        </div>
    )
}

export default ChannelList;