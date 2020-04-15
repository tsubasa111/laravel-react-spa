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
    textFiled: {
        width: '100%',
        marginTop: '2rem'
    },
    button: {
        marginTop: '2.5rem',
    },
    gridContainer: {
        marginTop: '1rem'
    },
    gridRight: {
        textAlign: 'right'
    }
});

export const LinkLeftText = styled(Link)`
    font-size: 1.5rem;
`;

export const LinkRightText = styled(Link)`
    font-size: 1.5rem;
`;