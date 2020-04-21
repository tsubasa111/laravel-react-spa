import React from 'react'
import * as Style from './style';
import LinearProgress from '@material-ui/core/LinearProgress';

const Loading = (props) => {
    const classes = Style.useStyles();
    const [completed, setCompleted] = React.useState(0);
    const [display, setDisplay] = React.useState('block');
    const [opacity, setOpacity] = React.useState('.7');

    React.useEffect(() => {
        function progress () {
            setCompleted((oldCompleted) => {
                return Math.min(oldCompleted + 1, 99);
            });
        }

        if (!props.isLoading) {
            setCompleted(100);
            setTimeout(function () {
                setOpacity(0);
            }, 500);
            setTimeout(function () {
                setDisplay('none');
            }, 2000);
        } else {
            const timer = setInterval(progress, 100);
            return () => {
                clearInterval(timer);
            };
        }
    }, [props]);

    return (
        <Style.Wrapper opacityData={opacity} displayData={display}>
            <Style.Text>{completed}%</Style.Text>
            <LinearProgress className={classes.bar} variant="determinate" value={completed} />
        </Style.Wrapper>
    );
}

export default Loading;