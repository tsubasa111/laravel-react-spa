import styled from 'styled-components';
import { makeStyles } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';

export const Card = styled.div`
    max-width: 50rem;
    margin: 10rem auto 0;
`;

export const useStyles = makeStyles({
    h2: {
        color: grey["700"]
    },
    h3: {
        color: grey["700"],
        marginTop: '2rem'
    }
});