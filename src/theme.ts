import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#cc3300', // Orange accent from original site
            contrastText: '#fff',
        },
        secondary: {
            main: '#555555', // Dark grey
        },
        background: {
            default: '#fff',
            paper: '#f4f4f4',
        },
        text: {
            primary: '#555555',
        }
    },
    typography: {
        fontFamily: 'Ubuntu, sans-serif',
        h1: {
            fontFamily: 'Philosopher, sans-serif',
            fontWeight: 700,
        },
        h2: {
            fontFamily: 'Philosopher, sans-serif',
        },
        h3: {
            fontFamily: 'Philosopher, sans-serif',
            color: '#555555',
        },
        h4: {
            fontFamily: 'Philosopher, sans-serif',
        },
        h5: {
            fontFamily: 'Philosopher, sans-serif',
        },
        h6: {
            fontFamily: 'Philosopher, sans-serif',
        },
        body1: {
            fontFamily: 'Ubuntu, sans-serif',
            fontSize: '20px',
            fontWeight: 300,
            lineHeight: 1.45,
            color: '#555555',
        },
        button: {
            textTransform: 'none',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '200px',
                    padding: '10px 30px',
                    fontSize: '18px',
                },
                containedPrimary: {
                    '&:hover': {
                        backgroundColor: '#cc6b4b',
                    }
                }
            }
        }
    }
});

export default theme;
