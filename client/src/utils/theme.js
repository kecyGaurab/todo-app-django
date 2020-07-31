import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#26a69a',
      light: '64d8cb',
      dark: '#00766c',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

theme.overrides = {
  MuiInputAdornment: {
    root: {
      cursor: 'pointer',
    },
  },
  MuiContainer: {
    root: {
      padding: '10px 0',
    },
  },
  MuiTextField: {
    root: {
      backgroundColor: theme.palette.common.white,
      fontSize: '30px',
      borderRadius: '5px',
    },
  },
  MuiInputBase: {
    root: {
      borderRadius: '15px',
      height: '3.5em',
    },
  },
  MuiSvgIcon: {
    root: {
      paddingRight: '5px',
      fontSize: '30px',
    },
    fontSizeInherit: {
      fontSize: '60px',
      paddingTop: '25px',
    },
    fontSizeLarge: {
      fontSize: '50px',
    },
  },
  MuiButton: {
    root: {
      margin: '5px',
    },
    sizeLarge: {
      height: '55px',
    },
    outlinedSecondary: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  MuiAppBar: {
    root: {
      background: theme.palette.background.default,
    },
    colorPrimary: {
      backgroundColor: theme.palette.background.default,
    },
  },
};

export default theme;
