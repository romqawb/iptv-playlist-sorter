import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStyles from '../styles/ResultStyles';

const Result = (props) => {
    const { selectedChannels } = props;
    const [counter, setCounter] = useState(3);
    const navigate = useNavigate();
    const classes = useStyles();
    let content;

    if (selectedChannels.length > 0) {
        content = (
            <>
                <h1>Your playlist is ready to be downloaded</h1>
                <div>
                    <button className={classes.downloadButton}> DOWNLOAD PLAYLIST</button>
                </div>
            </>

        )
    } else {
        content = (
            <>
                <h1>Please upload a playlist on the main page</h1>
                <p>Redirecting in {counter} seconds</p>
            </>


        )
    }

    useEffect(() => {
        if (selectedChannels.length > 0) {
            const saveBlob = (function () {
                const button = document.querySelector("button");
                document.querySelector('.download-container').appendChild(button);
                return function (blob, fileName) {
                    var url = window.URL.createObjectURL(blob);
                    button.href = url;
                    button.download = fileName;
                };
            }());

            const createStream = () => {
                let stringStream = '#EXTM3U\r\n';
                for (let channel of selectedChannels) {
                    stringStream += `#EXTINF:0 tvg-rec="${channel.rec}",${channel.name}\r\n#EXTGRP:${channel.group}\r\n${channel.url}\r\n`;
                }
                return stringStream;
            }
            let file = new Blob([createStream()], { type: 'audio/mpegurl' });
            saveBlob(file, 'playlist.m3u8');
        } else {
            counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
            counter === 0 && navigate('/');
        }
    })

    return (
        <div className={`download-container ${classes.downloadContainer}`}>
            {content}
        </div>
    )
}

export default Result;