import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        color: 'rgb(243,255,255)',
        letterSpacing: '2px',
        backgroundColor: 'rgb(21,4,69)',
        textAlign: 'center',
        textTransform: 'uppercase',
        width: '70%',
        margin: '10rem auto',
        border: '3px solid rgb(53,118,202)',
        borderRadius: '25px',
        '& > h1': {
            letterSpacing: '2px'
        }
    },
    fileSubmitForm: {
        width: '70%',
        margin: '0 auto'
    },
    fileSubmitButtons: {
        backgroundColor: 'rgb(83,72,245)',
        fontSize: '1.25rem',
        letterSpacing: '2px',
        color: 'white',
        outline: 'none',
        borderRadius: '10px',
        border: 'none',
        display: 'block',
        width: '50%',
        height: '50px',
        margin: '0.5rem auto',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(104,120,238)'
        },
        "&[disabled]": {
            cursor: 'not-allowed',
            backgroundColor: 'rgba(83,72,245,0.6)'
        },

    },
    fileSubmitFormLabel: {
        display: 'block',
        fontWeight: '700',
        margin: '20px 10px',
        fontSize: '1.5rem',
        color: 'rgb(130,225,240)',
        letterSpacing: '1px'
    },
    hiddenForm: {
        display: 'none'
    },
    fileError: {
        color: 'rgb(236,90,240)'
    },
    fileName: {
        color: 'rgb(130,225,240)'
    }

})

export default useStyles;