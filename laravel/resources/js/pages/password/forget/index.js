import React from 'react';
import { connect } from 'react-redux';
import { operations } from '../../../reducers/ducks/password/index';
import * as Style from './style';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import AuthTextField from '../../../components/textField/authTextField/index';
import Button from '@material-ui/core/Button';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import PasswordSent from '../../../components/passwordSent/index';

const PasswordForget = (props) => {
    const classes = Style.useStyles();
    let fields = [
        {
            id: 'email',
            label: 'メールアドレス',
            type: 'text',
            errors: props.errors.email !== undefined ? props.errors.email : []
        }
    ];

    const handlePost = () => {
        if (!props.isLoading) {
            const email = document.getElementById('email').value;
            props.getPasswordResetEmail(email);
        }
    }

    return (
        props.send
            ? <PasswordSent />
            : <Container>
                <Card className={classes.root}>
                    <ContactSupportIcon className={classes.fontSizeLarge} />
                    <Typography align="center" variant="h3">Password Forget</Typography>
                    {
                        fields.map(field => {
                            return <AuthTextField key={field.id} id={field.id} label={field.label} type={field.type} errors={field.errors} />
                        })
                    }
                    <Button classes={{
                        root: classes.button
                    }} fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handlePost}
                    >
                        Post
                </Button>
                    <Style.LinkList>
                        <Style.LinkText to="/login">ログイン</Style.LinkText>
                    </Style.LinkList>
                </Card>
            </Container >
    );
}

function mapStateToProps ({ password }) {
    return {
        send: password.send,
        errors: password.errors,
        isLoading: password.isLoading
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getPasswordResetEmail (email) {
            dispatch(operations.getPasswordResetEmail(email));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordForget);