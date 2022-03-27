const generateFakePlaylist = (numberOfChannels, groupList) => {
    const result = [];
    groupList.forEach(group => {
        for (let i = 1; i <= numberOfChannels; i++) {
            result.push({
                catchup: {
                    type: '',
                    days: '',
                    source: ''
                },
                group: {
                    title: group,
                },
                http: {
                    referrer: '',
                    useragent: ''
                },
                line: 2,
                name: `${group} ${i} HD`,
                raw: `#EXTINF:0 tvg-rec="7",${group} ${i} HD\r\r\n#EXTGRP:${group}\r\r\nhttp://localhost/MSGH7NPCC9YBB6/2402/index.m3u`,
                timeshift: '',
                tvg: {
                    country: '',
                    id: '',
                    language: '',
                    logo: '',
                    name: '',
                    rec: '7',
                    url: ''
                },
                url: 'http://localhost/MSGH7NPCC9YBB6/2402/index.m3u'
            })
        }
    })
    return result;
}

const FakePlaylistFile = generateFakePlaylist(10, ['Sports', 'Nature', 'Movies', 'Music']);

export default FakePlaylistFile;