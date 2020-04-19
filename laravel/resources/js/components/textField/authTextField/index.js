import React from 'react';
import useStyles from './style';
import TextField from '@material-ui/core/TextField';

const AuthTextField = (props) => {
    const classes = useStyles();

    return <TextField
        className={classes.root}
        id={props.id}
        label={props.label}
        type={props.type}
        fullWidth
    />;
}

AuthTextField.defaultProps = {
    id: '',
    label: '',
    type: 'text'
}

export default AuthTextField;