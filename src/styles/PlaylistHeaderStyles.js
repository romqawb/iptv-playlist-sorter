import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    header: {
        textAlign: 'center',
        letterSpacing: '3px',
        color: 'rgb(220,220,220)',
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
            textTransform: 'uppercase',
            color: 'rgb(130,225,240)',
        }
    },
})

export default useStyles;