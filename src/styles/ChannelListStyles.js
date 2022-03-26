import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
    channelList: {
        width: '40vw',
        textAlign: 'center',
        border: '3px solid rgb(53,118,202)',
        borderRadius: '25px',
        '& > ul': {
            listStyle: 'none',
            paddingLeft: '0'
        },
        '& > ul > li': {
            userSelect: 'none',
            color: 'white'
        }
    }
})

export default useStyles;