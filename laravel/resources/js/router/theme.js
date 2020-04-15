import { createMuiTheme } from '@material-ui/core';
import { blue } from "@material-ui/core/colors";

export default createMuiTheme({
    typography: {
        fontSize: 20,
        button: {
            textTransform: "none"
        }
    },
    props: {
        MuiTextField: {
            variant: "outlined"
        },
        MuiCheckbox: {
            color: "primary"
        },
        MuiRadio: {
            color: "primary"
        },
        MuiSwitch: {
            color: "primary"
        }
    },
    palette: {
        primary: {
            light: blue["300"],
            main: blue["500"],
            dark: blue["700"],
        }
    },
    mixins: {
        toolbar: {
            minHeight: 48
        }
    }
});