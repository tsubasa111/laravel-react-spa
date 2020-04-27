import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 500,
        margin: '10rem auto 0',
        padding: '2rem'
    },
    fontSizeLarge: {
        display: 'block',
        margin: 'auto',
        fontSize: '4rem'
    },
    textFiled: {
        width: '100%',
        marginTop: '2rem'
    },
    button: {
        marginTop: '2.5rem',
    },
    typo: {
        marginTop: '3rem',
    }
}));