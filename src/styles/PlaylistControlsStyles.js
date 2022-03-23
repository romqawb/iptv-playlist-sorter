import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    sticky: {
        position: 'sticky',
        top: '50%'
    },
    topButtons: {
        display: 'flex',
        justifyContent: 'space-around',
        '& > button': {
            height: '50px',
            fontSize: '2rem',
            width: '75px',
            margin: '0 5px 20px 5px'
        }
    },
    bottomButton: {
        display: 'flex',
        justifyContent: 'center'
    },
    generateButton: {
        width: '150px',
        height: '50px'
    }

})

export default useStyles;