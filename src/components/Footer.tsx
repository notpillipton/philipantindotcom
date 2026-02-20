import React from 'react';
import { Box, Container, GridLegacy as Grid, Link, Typography, List, ListItem } from '@mui/material';

const Footer: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box component="footer" sx={{ bgcolor: '#333', color: '#888', py: 6 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <List sx={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
                            {['About Philip', 'Projects', 'Updates', 'Contact Philip'].map((text, index) => {
                                const targets = ['bio', 'projects', 'updates', 'contact'];
                                return (
                                    <ListItem key={text} disablePadding sx={{ width: 'auto', mr: 3 }}>
                                        <Link
                                            component="button"
                                            onClick={() => scrollToSection(targets[index])}
                                            underline="none"
                                            sx={{
                                                color: '#888',
                                                '&:hover': { color: '#ddd' },
                                                fontFamily: 'Ubuntu',
                                                fontSize: '16px'
                                            }}
                                        >
                                            {text}
                                        </Link>
                                    </ListItem>
                                );
                            })}
                            <ListItem disablePadding sx={{ width: 'auto' }}>
                                <Link
                                    href="https://itunes.apple.com/us/developer/philip-antin/id1393861539?mt=8"
                                    target="_blank"
                                    underline="none"
                                    sx={{
                                        color: '#888',
                                        '&:hover': { color: '#ddd' },
                                        fontFamily: 'Ubuntu',
                                        fontSize: '16px'
                                    }}
                                >
                                    App Store
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Typography variant="body2">
                        Copyright &copy; {new Date().getFullYear()} by Philip Antin. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
