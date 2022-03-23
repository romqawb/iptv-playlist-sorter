import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        textAlign: 'center',
        textTransform: 'uppercase',
        width: '70%',
        margin: '10rem auto',
        border: '1px solid black'
    },
    fileSubmitForm: {
        width: '70%',
        margin: '0 auto'
    },
    fileSubmitButtons: {
        display: 'block',
        width: '50%',
        height: '50px',
        margin: '0.5rem auto',
        cursor: 'pointer',
        "&[disabled]": {
            cursor: 'not-allowed',
        }
    },
    fileSubmitFormLabel: {
        display: 'block',
        fontWeight: '700',
        margin: '20px 10px',
        fontSize: '1.5rem',
        color: 'brown'
    },
    hiddenForm: {
        display: 'none'
    },
    fileError: {
        color: 'brown'
    }

})

export default useStyles;