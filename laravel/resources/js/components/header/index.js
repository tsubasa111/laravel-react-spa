import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { operations } from '../../reducers/ducks/login/index';
import * as Style from './style';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';

const Header = (props) => {
    const classes = Style.useStyles();
    const [open, setOpen] = React.useState(false);

    const links = [
        {
            text: 'Home',
            url: '/home',
            icon: <HomeIcon style={{ color: "#fff" }} />
        },
        {
            text: 'Company',
            url: '/company',
            icon: <HomeIcon style={{ color: "#fff" }} />
        }
    ];

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        if (props.authenticated) {
            props.logout();
        }
    }

    return (
        <Style.Wrapper>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                        color="inherit"
                        aria-label="drawer"
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} noWrap>
                        {props.title}
                    </Typography>
                    <Style.LinkBtn to="/login">
                        <Button color="inherit" onClick={handleLogout}>{props.authenticated ? 'logout' : 'login'}</Button>
                    </Style.LinkBtn>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="temporary"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
                onClose={handleDrawerClose}
            >
                <Style.DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon style={{
                            color: '#fff'
                        }} />
                    </IconButton>
                </Style.DrawerHeader>
                <Divider />
                <List>
                    {links.map(link => (
                        <Style.LinkBtn key={link.text} to={link.url} onClick={handleDrawerClose}>
                            <ListItem button >
                                <ListItemIcon>
                                    {link.icon}
                                </ListItemIcon>
                                <ListItemText primary={link.text} />
                            </ListItem>
                        </Style.LinkBtn>
                    ))}
                </List>
            </Drawer>
        </Style.Wrapper>
    );
}

function mapStateToProps ({ login, header }) {
    return {
        authenticated: login.authenticated,
        title: header.title
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