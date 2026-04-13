import React from 'react';
import { Box, Container, Grid, Link, Typography, List, ListItem } from '@mui/material';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import data from '@shared/assets/nav-items.json';

export const Footer: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    const scrollToSection = (target: string, isRoute?: boolean) => {
        if (target === 'contact') {
            setSearchParams({ ...Object.fromEntries(searchParams), contact: 'true' }, { replace: true });
            window.dispatchEvent(new Event('popstate'));
            return;
        }

        if (isRoute) {
            navigate(target);
            return;
        }

        if (location.pathname !== '/') {
            navigate(`/#${target}`);
            return;
        }

        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box component="footer" sx={{ bgcolor: '#333', color: '#888', py: 6 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <List sx={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
                            {data.navItems.map((item) => (
                                <ListItem key={item.target} disablePadding sx={{ width: 'auto', mr: 3 }}>
                                    <Link
                                        component="button"
                                        onClick={() => scrollToSection(item.target, item.isRoute)}
                                        underline="none"
                                        sx={{
                                            color: '#888',
                                            '&:hover': { color: '#ddd' },
                                            fontFamily: 'Ubuntu',
                                            fontSize: '16px'
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                </ListItem>
                            ))}
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
