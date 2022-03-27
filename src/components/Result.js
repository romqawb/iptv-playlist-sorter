import { useEffect } from 'react';
import Error from './Error';
import useStyles from '../styles/ResultStyles';

const Result = (props) => {
    const { selectedChannels } = props;
    const classes = useStyles();
    let content;

    if (selectedChannels.length > 0) {
        content = (
            <div className={`download-container ${classes.downloadContainer}`}>
                <h1>Your playlist is ready to be downloaded</h1>
                <div>
                    <a href='#' className={classes.downloadButton}> DOWNLOAD PLAYLIST</a>
                </div>
            </div>

        )
    } else {
        content = <Error />
    }

    useEffect(() => {
        if (selectedChannels.length > 0) {
            const saveBlob = (function () {
                const button = document.querySelector("a");
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
        }
    })

    return (
        <>
            {content}
        </>
    )
}

export default Result;