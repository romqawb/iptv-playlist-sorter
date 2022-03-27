import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    errorContainer: {
        width: '70%',
        margin: '10rem auto',
        border: '3px solid rgb(53,118,202)',
        backgroundColor: 'rgb(21,4,69)',
        textAlign: 'center',
        letterSpacing: '2px',
        padding: '2rem',
        borderRadius: '25px',
        color: 'rgb(243,255,255)',
        '& > p': {
            fontWeight: '700',
            color: 'rgb(130,225,240)'
        }
    }
})

export default useStyles;