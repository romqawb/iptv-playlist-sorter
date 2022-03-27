import useStyles from '../styles/ChannelListStyles';
import { useState } from 'react';

const ChannelList = (props) => {
    const { channels, groups, setHighlighted } = props;
    const classes = useStyles();
    const [lastEle, setLastEle] = useState(null);
    let content;

    const handleClick = (e) => {
        if (e.shiftKey) {
            const lis = document.querySelectorAll(`.${e.target.parentNode.classList.value} li`);
            const liArr = [...lis];
            let remove;
            e.target.classList.toggle('selected');
            e.target.classList.value === 'selected' ? remove = false : remove = true;
            let currentEleIndex = liArr.indexOf(e.target);
            let lastEleIndex = liArr.indexOf(lastEle);
            if (currentEleIndex > lastEleIndex) {
                while (currentEleIndex !== lastEleIndex) {
                    if (remove) {
                        lis.item(currentEleIndex).classList.remove('selected');
                    } else {
                        lis.item(currentEleIndex).classList.add('selected');
                    }
                    currentEleIndex--;
                }
            } else {
                while (lastEleIndex !== currentEleIndex) {
                    if (remove) {
                        lis.item(currentEleIndex).classList.remove('selected');
                    } else {
                        lis.item(currentEleIndex).classList.add('selected');
                    }
                    currentEleIndex++;
                }
            }
        } else {
            e.target.classList.toggle('selected');
            setLastEle(e.target);
        }
        const selectedLis = [...document.querySelectorAll(`.${e.target.parentNode.classList.value} li.selected`)];
        const selectedChannels = selectedLis.map(item => item.innerHTML);
        setHighlighted(selectedChannels);
    }

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
            <ul className='channelContainer'>
                {content}
            </ul>
        </div>
    )
}

export default ChannelList;