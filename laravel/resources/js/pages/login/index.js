import React, { Component } from 'react';
import useStyles from './style';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = (props) => {
    const classes = useStyles();

    return (
        <Container>
            <Card className={classes.root}>
                <LockIcon className={classes.fontSizeLarge} />
                <Typography align="center" variant="h3">Login</Typography>
                <TextField
                    classes={{
                        root: classes.textFiled
                    }}
                    id="mailaddress"
                    label="メールアドレス"
                    variant="outlined"
                />
                <TextField
                    classes={{
                        root: classes.textFiled
                    }}
                    id="password"
                    label="パスワード"
                    variant="outlined"
                />
                <Button classes={{
                    root: classes.button
                }} fullWidth variant="contained" color="primary">Login</Button>
            </Card>
        </Container >
    )
}

export default Login;