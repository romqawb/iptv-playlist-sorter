import useStyles from '../styles/PlaylistHeaderStyles.js';
const PlaylistHeader = () => {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <h1>List of channels from playlist</h1>
            <p>Please move channels you would like to keep in the new playlist from left side to the right side and click
                <span> 'Generate new playlist'</span> to create desired playlist.
            </p>
        </div>
    )
}

export default PlaylistHeader;