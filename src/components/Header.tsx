import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, Button, Container, IconButton, Drawer, List, ListItem, ListItemText, useScrollTrigger, Slide } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const navItems = [
    { label: 'About Philip', target: 'bio' },
    { label: 'Current Projects', target: 'projects' },
    { label: 'Recent Updates', target: 'updates' },
    { label: 'Contact Philip', target: 'contact' },
];

function HideOnScroll(props: { children: React.ReactElement }) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Header: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileOpen(false);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2, fontFamily: 'Philosopher' }}>
                Philip Antin
            </Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.target} disablePadding>
                        <Button onClick={() => scrollToSection(item.target)} sx={{ textAlign: 'center', width: '100%', color: 'text.primary' }}>
                            <ListItemText primary={item.label} primaryTypographyProps={{ fontFamily: 'Ubuntu' }} />
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <HideOnScroll>
                <AppBar position="sticky" color="default" elevation={1} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
                    <Container maxWidth="lg">
                        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src="/img/headshot.jpg" alt="Antin headshot" style={{ height: 50, borderRadius: '50%', marginRight: 10 }} />
                            </Box>

                            {isMobile ? (
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                >
                                    <MenuIcon />
                                </IconButton>
                            ) : (
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    {navItems.map((item) => (
                                        <Button
                                            key={item.target}
                                            onClick={() => scrollToSection(item.target)}
                                            sx={{ color: 'text.primary', fontWeight: 700, fontSize: '90%' }}
                                        >
                                            {item.label.toUpperCase()}
                                        </Button>
                                    ))}
                                </Box>
                            )}
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>

            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>

            {/* Hero Section */}
            <Box
                sx={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/img/hero.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textAlign: 'center',
                    marginTop: '-64px' // Offset existing AppBar height involved in sticky positioning if needed, or just let it be. 
                }}
            >
                <Container>
                    <Typography variant="h1" sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '4rem' } }}>
                        Programmer. Professor. Philosopher.
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 4, fontWeight: 300 }}>
                        Applying pedagogy and critical thinking in software development.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => scrollToSection('contact')}
                        >
                            Get this guy on the line!
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{ color: 'primary.main', borderColor: 'primary.main', borderWidth: 2, '&:hover': { borderWidth: 2, borderColor: '#cf6d17', color: '#cf6d17' } }}
                            onClick={() => scrollToSection('bio')}
                        >
                            Show me more
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{ color: 'primary.main', borderColor: 'primary.main', borderWidth: 2, '&:hover': { borderWidth: 2, borderColor: '#cf6d17', color: '#cf6d17' } }}
                            onClick={() => scrollToSection('projects')}
                        >
                            Let me play
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Header;
