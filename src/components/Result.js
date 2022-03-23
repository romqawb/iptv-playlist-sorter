import { useEffect } from 'react';

const Result = () => {
    const selectedChannels = JSON.parse(window.localStorage.getItem('selectedChannels'));
    useEffect(() => {
        const saveBlob = (function () {
            const a = document.querySelector("a");
            document.querySelector('#target').appendChild(a);
            return function (blob, fileName) {
                var url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = fileName;
            };
        }());

        const createStream = () => {
            let stringStream = '#EXTM3U\r\n';
            for (let channel of selectedChannels) {
                stringStream += `#EXTINF:0 tvg-rec="${channel.tvg.rec}",${channel.name}\r\n#EXTGRP:${channel.group.title}\r\n${channel.url}\r\n`;
            }
            return stringStream;
        }
        let file = new Blob([createStream()], { type: 'audio/mpegurl' });
        saveBlob(file, 'playlist.m3u8');
    })

    return (
        <div id='target'>
            <h1>Your playlist is ready to be downloaded</h1>
            <div className="download-button">
                <a id='download'> DOWNLOAD PLAYLIST</a>
            </div>
        </div>
    )
}

export default Result;