import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    container: {
        color: 'rgb(243,255,255)',
        letterSpacing: '2px',
        backgroundColor: 'rgb(21,4,69)',
        textAlign: 'center',
        textTransform: 'uppercase',
        width: '70%',
        margin: '2rem auto',
        border: '3px solid rgb(53,118,202)',
        borderRadius: '25px',
        paddingBottom: '1rem',
        '& > h1': {
            letterSpacing: '3px',
            color: 'rgb(220,220,220)'
        }
    },
    fileSubmitButtons: {
        backgroundColor: 'rgb(83,72,245)',
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
        fontWeight: '700',
        '&:hover': {
            backgroundColor: 'rgb(104,120,238)'
        }
    },
    fileSubmitFormLabel: {
        display: 'block',
        fontWeight: '700',
        margin: '20px 10px',
        fontSize: '1.5rem',
        color: 'rgb(130,225,240)',
        letterSpacing: '1px'
    },
})

export default useStyles;