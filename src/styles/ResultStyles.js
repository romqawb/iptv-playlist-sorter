import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    downloadContainer: {
        width: '70%',
        margin: '10rem auto',
        border: '3px solid rgb(53,118,202)',
        backgroundColor: 'rgb(21,4,69)',
        textAlign: 'center',
        letterSpacing: '2px',
        padding: '1rem',
        borderRadius: '25px',
        color: 'rgb(243,255,255)',
        '& > p': {
            fontWeight: '700',
            color: 'rgb(130,225,240)'
        }
    },
    downloadButton: {
        padding: '20px 30px',
        border: 'none',
        color: 'white',
        fontWeight: '700',
        letterSpacing: '2px',
        borderRadius: '25px',
        position: 'relative',
        transition: 'all 0.2s ease-in-out',
        backgroundColor: 'rgb(83,72,245)',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(104,120,238)',
        }
    }
})

export default useStyles;

