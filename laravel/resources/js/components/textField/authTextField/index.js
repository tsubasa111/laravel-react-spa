import React from 'react';
import useStyles from './style';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const AuthTextField = (props) => {
    const classes = useStyles();

    let errorMessage;
    if (props.errors) {
        errorMessage = props.errors.map(error => {
            return <Typography
                key={error}
                color="error"
                align="left"
            >{error}</Typography>
        });
    } else {
        errorMessage = "";
    }

    return (
        <>
            <TextField
                className={classes.root}
                id={props.id}
                label={props.label}
                type={props.type}
                fullWidth
            />
            {errorMessage}
        </>
    );
}

AuthTextField.defaultProps = {
    id: '',
    label: '',
    type: 'text',
    errors: undefined
}

export default AuthTextField;