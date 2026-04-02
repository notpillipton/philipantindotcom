import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: 'var(--theme-primary-main)',
            contrastText: 'var(--theme-primary-contrast)',
        },
        secondary: {
            main: 'var(--theme-secondary-main)',
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
            fontWeight: 700,
        },
        h2: {
            fontFamily: 'var(--theme-font-header)',
        },
        h3: {
            fontFamily: 'var(--theme-font-header)',
            color: 'var(--theme-text-primary)',
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
            fontSize: '20px',
            fontWeight: 300,
            lineHeight: 1.45,
            color: 'var(--theme-text-primary)',
        },
        button: {
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
