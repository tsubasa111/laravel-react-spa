import React from 'react'
import * as Style from './style';
import Container from '@material-ui/core/Container'
import { Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ReportIcon from '@material-ui/icons/Report';

const PasswordSent = () => {
    const classes = Style.useStyles();

    return (
        <Container>
            <Card className={classes.root}>
                <ReportIcon className={classes.fontSizeLarge} />
                <Typography classes={{ root: classes.typo }} align="center" variant="h4">パスワードをリセットするメールを送信しました</Typography>
            </Card>
        </Container >
    );
}

export default PasswordSent;
