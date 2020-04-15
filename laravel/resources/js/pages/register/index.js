import React from 'react';
import * as Style from './style';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AuthTextField from '../../components/textFiled/authTextField/index';

const fileds = [
    {
        id: 'name',
        label: '名前'
    },
    {
        id: 'mail_address',
        label: 'メールアドレス'
    },
    {
        id: "password",
        label: "パスワード"
    },
    {
        id: "password_confirmed",
        label: "再パスワード"
    }
];

const Register = () => {
    const classes = Style.useStyles();

    return (
        <Container>
            <Card className={classes.root}>
                <LockIcon className={classes.fontSizeLarge} />
                <Typography align="center" variant="h3">Rgister</Typography>
                {
                    fileds.map(filed => {
                        return <AuthTextField key={filed.id} id={filed.id} label={filed.label} />
                    })
                }
                <Button classes={{
                    root: classes.button
                }} fullWidth variant="contained" color="primary">Register</Button>
                <Style.LinkText to="/login">ログイン</Style.LinkText>
            </Card>
        </Container >
    )
}

export default Register;