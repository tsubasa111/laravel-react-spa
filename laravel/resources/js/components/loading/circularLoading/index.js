import React from 'react';
import * as Style from './style';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function CircularIndeterminate () {
    const classes = Style.useStyles();

    return (
        <Style.Wrapper>
            <Style.Card>
                <CircularProgress className={classes.root} size={100} />
                <Style.Text>...Loading</Style.Text>
            </Style.Card>
        </Style.Wrapper>
    );
}