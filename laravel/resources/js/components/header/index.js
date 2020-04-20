import React from 'react';
import { connect } from 'react-redux';
import { operations } from '../../reducers/ducks/login/index';
import * as Style from './style';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Header = (props) => {
    const classes = Style.useStyles();

    const handleLogout = () => {
        if (props.authenticated) {
            props.logout();
        }
    }

    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
                <Style.LinkBtn to="/login">
                    <Button color="inherit" onClick={handleLogout}>{props.authenticated ? 'logout' : 'login'}</Button>
                </Style.LinkBtn>
            </Toolbar>
        </AppBar>
    );
}

function mapStateToProps ({ login }) {
    return {
        authenticated: login.authenticated
    }
}

function mapDispatchToProps (dispatch) {
    return {
        logout () {
            dispatch(operations.logout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);