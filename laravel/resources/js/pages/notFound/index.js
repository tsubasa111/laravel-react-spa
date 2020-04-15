import React from 'react'
import * as Style from './style';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const NotFound = () => {
    const classes = Style.useStyles();

    return (
        <Container>
            <Style.Card>
                <Typography className={classes.h2} variant="h2" align="center">404</Typography>
                <Typography className={classes.h3} variant="h3" align="center">Not Found</Typography>
            </Style.Card>
        </Container>
    )
}

export default NotFound;