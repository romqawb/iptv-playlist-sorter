import { useState } from 'react';
import useStyles from '../styles/PlaylistStyles';
import ChannelList from './ChannelList';
import Filter from './Filter';
import PlaylistHeader from './PlaylistHeader';
import PlaylistControls from './PlaylistControls';
import Error from './Error';

const Playlist = (props) => {
    const { allChannels, setSelectedChannels } = props;
    const classes = useStyles();
    const channelGroups = [];
    allChannels.map(channel => !channelGroups.includes(channel.group.title) ? channelGroups.push(channel.group.title) : null)
    const [selectedGroups, setSelectedGroups] = useState(channelGroups);
    const [channelsLeft, setChannelsLeft] = useState(allChannels.map(channel => {
        return ({
            name: channel.name,
            group: channel.group.title,
            rec: channel.tvg.rec,
            url: channel.url
        })
    }));
    const [channelsRight, setChannelsRight] = useState([]);
    const [highlighted, setHighlighted] = useState([]);
    let content;

    if (allChannels.length > 0) {
        content = (
            <div className={classes.playlistContainer}>
                <PlaylistHeader />
                <Filter
                    channels={allChannels}
                    setSelectedGroups={setSelectedGroups}
                    channelGroups={channelGroups}
                />
                <p className={classes.shiftInstructions}>You can use <span>'click + Shift'</span> to select more then one channel at the time.</p>
                <div className={classes.mainContainer}>
                    <ChannelList
                        channels={channelsLeft}
                        groups={selectedGroups}
                        setHighlighted={setHighlighted}
                    />
                    <PlaylistControls
                        channelsRight={channelsRight}
                        channelsLeft={channelsLeft}
                        setChannelsRight={setChannelsRight}
                        setChannelsLeft={setChannelsLeft}
                        highlighted={highlighted}
                        setHighlighted={setHighlighted}
                        setSelectedChannels={setSelectedChannels}
                    />
                    <ChannelList
                        channels={channelsRight}
                        groups={false}
                        setHighlighted={setHighlighted}
                    />
                </div>
            </div>)
    } else {
        content = <Error />
    }

    return (
        <div className={classes.playlistContainer}>
            <div className={classes.mainContainer}>
                {content}
            </div>
        </div>
    )
}

export default Playlist;