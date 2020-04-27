import React from 'react';
import * as Style from './style';
import { connect } from 'react-redux';
import { operations } from '../../reducers/ducks/login/index';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import AuthTextField from '../../components/textField/authTextField/index';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const fields = [
    {
        id: 'email',
        label: 'メールアドレス',
        type: 'text'
    },
    {
        id: "password",
        label: "パスワード",
        type: 'password'
    }
];

const Login = (props) => {
    const classes = Style.useStyles();

    const handleLogin = () => {
        let data = [];
        fields.map(field => {
            data.push(document.getElementById(field.id).value);
        });
        props.login(...data);
    }

    return (
        <Container>
            <Card className={classes.root}>
                <LockIcon className={classes.fontSizeLarge} />
                <Typography align="center" variant="h3">Login</Typography>
                {
                    fields.map(field => {
                        return <AuthTextField key={field.id} id={field.id} label={field.label} type={field.type} />
                    })
                }
                <Button classes={{
                    root: classes.button
                }} fullWidth variant="contained" color="primary" onClick={handleLogin}>Login</Button>
                <Grid container classes={{
                    root: classes.gridContainer
                }}>
                    <Grid item xs={6}>
                        <Style.LinkLeftText to="/register">ユーザー作成</Style.LinkLeftText>
                    </Grid>
                    <Grid item xs={6} classes={{
                        item: classes.gridRight
                    }}>
                        <Style.LinkRightText to="/password/forget">パスワード忘れた場合</Style.LinkRightText>
                    </Grid>
                </Grid>
            </Card>
        </Container >
    )
}

function mapStateToProps () {
    return {}
}

function mapDispatchToProps (dispatch) {
    return {
        login (email, password) {
            dispatch(operations.login(email, password));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);