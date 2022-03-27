import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    playlistContainer: {
        width: '90%',
        margin: '3rem auto',
    },
    mainContainer: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    shiftInstructions: {
        color: 'white',
        textAlign: 'center',
        letterSpacing: '1px',
        '& > span': {
            color: 'rgb(130,225,240)',
            fontWeight: '700'
        }
    }
})

export default useStyles;
