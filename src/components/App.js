import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import FileUpload from './FileUpload';
import Playlist from './Playlist';
import Result from './Result';
import '../styles/styles.css';
const App = () => {
    const [allChannels, setAllChannels] = useState([]);
    const [selectedChannels, setSelectedChannels] = useState([]);
    return (
        <Routes>
            <Route path='/' element={<FileUpload setAllChannels={setAllChannels} />} />
            <Route path='/playlist' element={<Playlist allChannels={allChannels} setSelectedChannels={setSelectedChannels} />} />
            <Route path='/result' element={<Result selectedChannels={selectedChannels} />} />
        </Routes>
    )
}

export default App;