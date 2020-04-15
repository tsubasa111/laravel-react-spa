import React from 'react';
import * as Style from './style';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import AuthTextField from '../../components/textFiled/authTextField/index';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const fileds = [
    {
        id: 'mail_address',
        label: 'メールアドレス'
    },
    {
        id: "password",
        label: "パスワード"
    }
];

const Login = () => {
    const classes = Style.useStyles();

    return (
        <Container>
            <Card className={classes.root}>
                <LockIcon className={classes.fontSizeLarge} />
                <Typography align="center" variant="h3">Login</Typography>
                {
                    fileds.map(filed => {
                        return <AuthTextField key={filed.id} id={filed.id} label={filed.label} />
                    })
                }
                <Button classes={{
                    root: classes.button
                }} fullWidth variant="contained" color="primary">Login</Button>
                <Grid container classes={{
                    root: classes.gridContainer
                }}>
                    <Grid item xs={6}>
                        <Style.LinkLeftText to="/register">ユーザー作成</Style.LinkLeftText>
                    </Grid>
                    <Grid item xs={6} classes={{
                        item: classes.gridRight
                    }}>
                        <Style.LinkRightText to="/passwor_forget">パスワード忘れた場合</Style.LinkRightText>
                    </Grid>
                </Grid>
            </Card>
        </Container >
    )
}

export default Login;