import React from 'react'
import { connect } from 'react-redux';
import { operations } from '../../../reducers/ducks/resetPassword/index';
import * as Style from './style';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import AuthTextField from '../../../components/textField/authTextField/index';
import Button from '@material-ui/core/Button';
import getParam from '../../../utils/getParam';

const PasswordReset = (props) => {
    const classes = Style.useStyles();

    let fields = [
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

    const handleResetPassword = () => {
        let data = [];
        fields.map(field => {
            data.push(document.getElementById(field.id).value);
        });
        data.push(getParam.token);
        props.resetPassword(...data);
    }

    return (
        <Container>
            <Card className={classes.root}>
                <LockIcon className={classes.fontSizeLarge} />
                <Typography align="center" variant="h3">Password Reset</Typography>
                {
                    fields.map(field => {
                        return <AuthTextField key={field.id} id={field.id} label={field.label} type={field.type} />
                    })
                }
                <Button classes={{
                    root: classes.button
                }} fullWidth variant="contained" color="primary" onClick={handleResetPassword}>Password Reset</Button>
            </Card>
        </Container >
    );
}

function mapStateToProps ({ resetPassword }) {
    return {
        isReset: resetPassword.reset,
        isLoading: resetPassword.isLoading
    }
}

function mapDispatchToProps (dispatch) {
    return {
        resetPassword (email, password, password_confirmation, token) {
            dispatch(operations.resetPassword(email, password, password_confirmation, token));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset);