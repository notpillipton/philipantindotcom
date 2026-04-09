import { createTheme } from '@mui/material/styles';
import { ThemeTokens } from './theme-tokens';

const theme = createTheme({
    palette: {
        primary: {
            main: ThemeTokens['--theme-primary-main'],
            light: ThemeTokens['--theme-primary-hover'],
            dark: ThemeTokens['--theme-primary-hover'],
            contrastText: ThemeTokens['--theme-primary-contrast'],
        },
        secondary: {
            main: ThemeTokens['--theme-secondary-main'],
            light: ThemeTokens['--theme-secondary-main'],
            dark: ThemeTokens['--theme-secondary-main'],
            contrastText: ThemeTokens['--theme-primary-contrast'],
        },
        background: {
            default: ThemeTokens['--theme-bg-default'],
            paper: ThemeTokens['--theme-bg-paper'],
        },
        text: {
            primary: ThemeTokens['--theme-text-primary'],
        }
    },
    typography: {
        fontFamily: ThemeTokens['--theme-font-body'],
        h1: {
            fontFamily: ThemeTokens['--theme-font-header'],
        },
        h2: {
            fontFamily: ThemeTokens['--theme-font-header'],
        },
        h3: {
            fontFamily: ThemeTokens['--theme-font-header'],
        },
        h4: {
            fontFamily: ThemeTokens['--theme-font-header'],
        },
        h5: {
            fontFamily: ThemeTokens['--theme-font-header'],
        },
        h6: {
            fontFamily: ThemeTokens['--theme-font-header'],
        },
        body1: {
            fontFamily: ThemeTokens['--theme-font-body'],
        },
        button: {
            fontFamily: ThemeTokens['--theme-font-body'],
            textTransform: 'none',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: ThemeTokens['--theme-button-radius'],
                    padding: '10px 30px',
                    fontSize: '18px',
                },
                containedPrimary: {
                    '&:hover': {
                        backgroundColor: ThemeTokens['--theme-primary-hover'],
                    }
                }
            }
        }
    }
});

export default theme;
