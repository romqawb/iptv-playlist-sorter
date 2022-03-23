import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    header: {
        textAlign: 'center',
        letterSpacing: '2px',
        '& > h1': {
            textTransform: 'uppercase',
        },
        '& > p': {
            display: 'block',
            width: '60vw',
            margin: '0 auto',
            lineHeight: '30px',
            letterSpacing: '1px'
        },
        '& > p > span': {
            fontWeight: '700',
            textTransform: 'uppercase'
        }
    },
})

export default useStyles;