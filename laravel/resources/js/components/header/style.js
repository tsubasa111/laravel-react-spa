import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

export const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export const LinkBtn = styled(Link)`
    color: #fff;
    &:hover {
        color: #fff;
    }
`;