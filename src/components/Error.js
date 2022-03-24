import useStyles from '../styles/Error';
const Error = (props) => {
    const { allChannels } = props;
    const classes = useStyles();
    let content = (
        allChannels.length <= 0 ? <h3 className={classes.error}>Please upload a playlist on the main page!</h3> : null
    )
    return (
        <>
            {content}
        </>
    )
}

export default Error;