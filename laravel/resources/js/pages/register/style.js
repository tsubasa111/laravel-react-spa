import styled from 'styled-components';
import { makeStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom';

export const useStyles = makeStyles({
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
    button: {
        marginTop: '2.5rem',
    }
});

export const LinkText = styled(Link)`
    display: block;
    margin-top: 1rem;
    font-size: 1.5rem;
    text-align: right;
`;