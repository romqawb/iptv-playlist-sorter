import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    downloadContainer: {
        width: '70%',
        margin: '10rem auto',
        border: '1px solid black',
        textAlign: 'center',
        padding: '2rem',
        borderRadius: '25px',
        '& > h1': {
            color: 'brown'
        },
        '& > p': {
            fontWeight: '700'
        }
    },
    downloadButton: {
        display: 'inline-block',
        padding: '20px 30px',
        textDecoration: 'none',
        border: '0.5px solid black',
        color: 'teal',
        fontWeight: '700',
        borderRadius: '5px',
        position: 'relative',
        transition: 'all 0.2s ease-in-out',
        backgroundColor: 'rgb(239,239,239)',
        '&:hover': {
            backgroundColor: 'rgb(229,229,229)',
            boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
            cursor: 'pointer'
        }
    }
})

export default useStyles;

