import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useStyles from '../styles/FileUploadStyles';
import parser from 'iptv-playlist-parser';

const FileUpload = (props) => {
  const { setAllChannels } = props;
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [allowSubmit, toggleSubmitStatus] = useState(false);
  const [fileName, changeFileName] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    try {
      const reader = new FileReader();
      const target = e.target;
      reader.onload = (e) => {
        // localStorage.setItem('channels', e.target.result);
        const channels = parser.parse(e.target.result);
        const uniqueChannels = [...new Map(channels.items.map((item) => [item.name, item])).values()]; parser.parse(e.target.result);
        setAllChannels(uniqueChannels);
      }
      if (target.files[0]) {
        reader.readAsText(target.files[0]);
        changeFileName(target.files[0].name);
        if (target.files[0].name.substr(target.files[0].name.length - 5) === '.m3u8') {
          setError(null);
          toggleSubmitStatus(true);
        } else {
          setError('Please select .m3u8 playlist');
          toggleSubmitStatus(false);
        }
      }
    } catch (e) {
      setError(e)
    }
  }

  const handleSelectButton = (e) => {
    e.preventDefault();
    document.querySelector('#playlist').click();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setError(null);
      navigate('playlist');
    } catch (e) {
      toggleSubmitStatus(false);
      setError('This is not a playlist! Please select .m3u8 file.')
    }
  }

  return (
    <div className={classes.container}>
      <h1>Upload your m3u8 playlist here</h1>
      <form className={classes.fileSubmitForm} onSubmit={handleSubmit}>
        <label className={classes.fileSubmitFormLabel} htmlFor="playlist">Select m3u8 playlist</label>
        <button className={classes.fileSubmitButtons} id='selectFile' onClick={handleSelectButton}>SELECT FILE</button>
        <input className={classes.hiddenForm} type="file" id='playlist' onChange={handleChange} />
        <button className={classes.fileSubmitButtons} disabled={!allowSubmit} type='submit'>UPLOAD FILE</button>
      </form>
      <h3>{fileName ? `Selected file: ${fileName}` : 'No file selected'}</h3>
      <h2 className={classes.fileError}>{error ? error : null}</h2>
    </div>
  );
}

export default FileUpload;
