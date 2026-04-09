import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: 'var(--theme-primary-main)',
            light: 'var(--theme-primary-hover)',
            dark: 'var(--theme-primary-hover)',
            contrastText: 'var(--theme-primary-contrast)',
        },
        secondary: {
            main: 'var(--theme-secondary-main)',
            light: 'var(--theme-secondary-main)',
            dark: 'var(--theme-secondary-main)',
            contrastText: 'var(--theme-primary-contrast)',
        },
        background: {
            default: 'var(--theme-bg-default)',
            paper: 'var(--theme-bg-paper)',
        },
        text: {
            primary: 'var(--theme-text-primary)',
        }
    },
    typography: {
        fontFamily: 'var(--theme-font-body)',
        h1: {
            fontFamily: 'var(--theme-font-header)',
        },
        h2: {
            fontFamily: 'var(--theme-font-header)',
        },
        h3: {
            fontFamily: 'var(--theme-font-header)',
        },
        h4: {
            fontFamily: 'var(--theme-font-header)',
        },
        h5: {
            fontFamily: 'var(--theme-font-header)',
        },
        h6: {
            fontFamily: 'var(--theme-font-header)',
        },
        body1: {
            fontFamily: 'var(--theme-font-body)',
        },
        button: {
            fontFamily: 'var(--theme-font-header)',
            textTransform: 'none',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 'var(--theme-button-radius)',
                    padding: '10px 30px',
                    fontSize: '18px',
                },
                containedPrimary: {
                    '&:hover': {
                        backgroundColor: 'var(--theme-primary-hover)',
                    }
                }
            }
        }
    }
});

export default theme;
