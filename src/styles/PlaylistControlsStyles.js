import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    sticky: {
        position: 'sticky',
        top: '25%'
    },
    topButtons: {
        display: 'flex',
        justifyContent: 'space-around',
        '& > button': {
            height: '50px',
            fontSize: '2rem',
            width: '75px',
            margin: '0 5px 20px 5px',
            backgroundColor: 'rgb(83,72,245)',
            border: 'none',
            borderRadius: '25px',
            color: 'white',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: 'rgb(104,120,238)'
            }
        }
    },
    bottomButton: {
        display: 'flex',
        justifyContent: 'center'
    },
    generateButton: {
        width: '150px',
        height: '50px',
        backgroundColor: 'rgb(83,72,245)',
        border: 'none',
        borderRadius: '25px',
        padding: '0 1rem',
        cursor: 'pointer',
        color: 'white',
        fontWeight: '700',
        letterSpacing: '2px',
        '&:hover': {
            backgroundColor: 'rgb(104,120,238)'
        },
        "&[disabled]": {
            cursor: 'not-allowed',
            backgroundColor: 'rgba(83,72,245,0.2)'
        }
    }
})

export default useStyles;