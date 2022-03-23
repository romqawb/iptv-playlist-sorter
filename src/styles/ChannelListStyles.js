import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
    channelList: {
        width: '40vw',
        textAlign: 'center',
        border: '1px solid black',
        borderRadius: '5px',
        '& > ul': {
            listStyle: 'none',
            paddingLeft: '0'
        },
        '& > ul > li': {
            userSelect: 'none'
        }
    }
})

export default useStyles;