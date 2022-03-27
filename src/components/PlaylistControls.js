import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStyles from '../styles/PlaylistControlsStyles';

const PlaylistControls = (props) => {
    const navigate = useNavigate();
    const { channelsRight, channelsLeft, setChannelsRight, setChannelsLeft, highlighted, setHighlighted, setSelectedChannels } = props;
    const [submitAllowed, setSubmitAllowed] = useState(false);
    const classes = useStyles();

    const removeSelectedClass = () => {
        document.querySelectorAll('li').forEach(li => li.classList.remove('selected'));
    }

    const moveChannelRight = (e) => {
        setChannelsRight([...channelsRight, ...channelsLeft.filter(channel => highlighted.includes(channel.name))]);
        setChannelsLeft(channelsLeft.filter(channel => !highlighted.includes(channel.name)));
        setHighlighted([]);
        removeSelectedClass();
    }

    const moveChannelLeft = (e) => {
        setChannelsLeft([...channelsLeft, ...channelsRight.filter(channel => highlighted.includes(channel.name))])
        setChannelsRight([...channelsRight.filter(channel => !highlighted.includes(channel.name))]);
        setHighlighted([]);
        removeSelectedClass();
    }

    const generateChannels = (e) => {
        setSelectedChannels(channelsRight);
        navigate('/result');
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
                    <button disabled={!submitAllowed} className={classes.generateButton} onClick={generateChannels}>GENERATE PLAYLIST</button>
                </div>
            </div>
        </div>
    )
}

export default PlaylistControls;