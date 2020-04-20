import React from 'react';
import * as Style from './style';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AuthTextField from '../../components/textField/authTextField/index';
import { operations } from '../../reducers/ducks/login/index';

const fields = [
    {
        id: 'name',
        label: '名前',
        type: 'text'
    },
    {
        id: 'email',
        label: 'メールアドレス',
        type: 'text'
    },
    {
        id: "password",
        label: "パスワード",
        type: 'password'
    },
    {
        id: "password_confirmation",
        label: "再パスワード",
        type: 'password'
    }
];

const Register = (props) => {
    const classes = Style.useStyles();

    const handleRegister = () => {
        let data = [];
        fields.map(field => {
            data.push(document.getElementById(field.id).value);
        });
        props.register(...data);
    }

    return (
        <Container>
            <Card className={classes.root}>
                <LockIcon className={classes.fontSizeLarge} />
                <Typography align="center" variant="h3">Register</Typography>
                {
                    fields.map(field => {
                        return <AuthTextField key={field.id} id={field.id} label={field.label} type={field.type} />
                    })
                }
                <Button classes={{
                    root: classes.button
                }}
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleRegister}
                >
                    Register
                </Button>
                <Style.LinkText to="/login">ログイン</Style.LinkText>
            </Card>
        </Container >
    )
}

function mapStateToProps () {
    return {}
}

function mapDispatchToProps (dispatch) {
    return {
        register (name, email, password, password_confirmation) {
            dispatch(operations.register(name, email, password, password_confirmation));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);