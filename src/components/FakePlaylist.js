import useStyles from "../styles/FakePlaylistStyles";
import FakePlaylistFile from "../assets/FakePlaylist";
import { useNavigate } from "react-router-dom";

const FakePlaylist = (props) => {
    const { setAllChannels } = props;
    const classes = useStyles();
    const navigate = useNavigate();
    const handleClick = (e) => {
        setAllChannels(FakePlaylistFile);
        navigate('playlist');
    }
    return (
        <div className={classes.container}>
            <h1>Use pre-uploaded fake playlist.</h1>
            <p className={classes.fileSubmitFormLabel}>Press button below to check functionality of the app.</p>
            <button className={classes.fileSubmitButtons} onClick={handleClick} type='submit'>USE FAKE PLAYLIST</button>
        </div>
    )
}

export default FakePlaylist;