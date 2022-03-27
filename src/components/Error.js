import useStyles from '../styles/ErrorStyles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const classes = useStyles();
    const [counter, setCounter] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        counter === 0 && navigate('/');
    })
    return (
        <div className={classes.errorContainer}>
            <h1>Please upload a playlist on the main page</h1>
            <p>Redirecting in {counter} seconds</p>
        </div>
    )
}

export default Error;