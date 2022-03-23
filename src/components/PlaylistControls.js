import { useState, useEffect } from 'react';
import useStyles from '../styles/PlaylistControlsStyles';

const PlaylistControls = (props) => {
    const { channelsRight, channelsLeft, setChannelsRight, setChannelsLeft, highlighted, setHighlighted } = props;
    const [submitAllowed, setSubmitAllowed] = useState(false);
    const classes = useStyles();

    const moveChannelRight = (e) => {
        setChannelsRight([...channelsRight, ...channelsLeft.filter(channel => highlighted.includes(channel.name))]);
        setChannelsLeft(channelsLeft.filter(channel => !highlighted.includes(channel.name)));
        setHighlighted([]);
    }

    const moveChannelLeft = (e) => {
        setChannelsLeft([...channelsLeft, ...channelsRight.filter(channel => highlighted.includes(channel.name))])
        setChannelsRight([...channelsRight.filter(channel => !highlighted.includes(channel.name))]);
        setHighlighted([]);
    }

    useEffect(() => {
        channelsRight.length > 0 ? setSubmitAllowed(true) : setSubmitAllowed(false);
    }, [channelsRight])


    return (
        <div className="btn-container">
            <div className={classes.sticky}>
                <div className={classes.topButtons}>
                    <button onClick={moveChannelRight} id='moveRight'>&#8594;</button>
                    <button onClick={moveChannelLeft} id='moveLeft'>&#8592;</button>
                </div>
                <div className={classes.bottomButton}>
                    <button disabled={!submitAllowed} className={classes.generateButton}>GENERATE PLAYLIST</button>
                </div>
            </div>
        </div>
    )
}

export default PlaylistControls;