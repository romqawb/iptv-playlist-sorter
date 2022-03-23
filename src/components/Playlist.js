import { useState } from 'react';
import parser from 'iptv-playlist-parser';
import useStyles from '../styles/PlaylistStyles';
import ChannelList from './ChannelList';
import Filter from './Filter';
import PlaylistHeader from './PlaylistHeader';
import PlaylistControls from './PlaylistControls';

const Playlist = () => {
    const classes = useStyles();
    const channels = parser.parse(window.localStorage.getItem('channels'));
    const uniqueChannels = [...new Map(channels.items.map((item) => [item.name, item])).values()];
    const channelGroups = [];
    uniqueChannels.map(channel => !channelGroups.includes(channel.group.title) ? channelGroups.push(channel.group.title) : null)
    const [selectedGroups, setSelectedGroups] = useState(channelGroups);
    const [channelsLeft, setChannelsLeft] = useState(uniqueChannels.map(channel => {
        return ({
            name: channel.name,
            group: channel.group.title
        })
    }));
    const [channelsRight, setChannelsRight] = useState([]);
    const [highlighted, setHighlighted] = useState([]);

    return (
        <div className={classes.playlistContainer}>
            <PlaylistHeader />
            <Filter
                channels={uniqueChannels}
                setSelectedGroups={setSelectedGroups}
                channelGroups={channelGroups}
            />
            <div className={classes.mainContainer}>
                <ChannelList
                    channels={channelsLeft}
                    groups={selectedGroups}
                    highlighted={highlighted}
                    setHighlighted={setHighlighted}
                />
                <PlaylistControls
                    channelsRight={channelsRight}
                    channelsLeft={channelsLeft}
                    setChannelsRight={setChannelsRight}
                    setChannelsLeft={setChannelsLeft}
                    highlighted={highlighted}
                    setHighlighted={setHighlighted}
                />
                <ChannelList
                    channels={channelsRight}
                    groups={false}
                    highlighted={highlighted}
                    setHighlighted={setHighlighted}
                />
            </div>
        </div>
    )
}

export default Playlist;