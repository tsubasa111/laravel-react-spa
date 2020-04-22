import styled from 'styled-components';
import { makeStyles } from '@material-ui/styles';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: .7;
    background-color: black;
    transition: all 1.5s;
    z-index: 10000;
    opacity: ${props => props.opacityData};
    display: ${props => props.displayData};
`;

export const Text = styled.p`
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 8rem;
    color: red;
    text-align: center;
`;

export const useStyles = makeStyles({
    bar: {
        width: '90%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
});