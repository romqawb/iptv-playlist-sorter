import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    filter: {
        width: '80%',
        margin: '20px auto',
        textAlign: 'center',
        color: 'white',
        '& > form > button': {
            display: 'block',
            width: '110px',
            height: '50px',
            textTransform: 'uppercase',
            margin: '40px auto'
        }
    },
})

export default useStyles;