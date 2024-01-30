import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    page:{
        backgroundColor: "#ffa8b2",
        height: "100vh",
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
        background: "#ffa8b2",
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    centeredText: {
        textAlign: 'center',
    },

    customFontStyle: {
        fontFamily: "Century Schoolbook",
        textAlign: "center"
    },

    buttonContainer: {
        display: "flex",
        justifyContent: "center",
    },
    button: {
        margin: theme.spacing(1),
        color: "#f36d5f"
    },
  }));
  
  export default useStyles;