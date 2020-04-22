import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        marginLeft: '4rem',
    }
});

export const Wrapper = styled.div`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: .7;
    background-color: black;
    z-index: 10000;
    align-items: center;
    justify-content: center;
`;

export const Card = styled.div``;

export const Text = styled.p`
    color: grey;
    font-size: 4rem;
    text-align: center;
    margin-top: 1rem;
`;