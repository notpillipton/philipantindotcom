import React from 'react';
import { Box, Container, Grid, Link, Typography, List, ListItem } from '@mui/material';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import data from '@shared/assets/nav-items.json';
import '@shared/i18n';

const navKeyMap: Record<string, string> = {
    'About Philip': 'nav.about',
    'Competencies': 'nav.competencies',
    'Contact Philip': 'nav.contact',
    'Time Warp': 'nav.past',
};

export const Footer: React.FC = () => {
    const { t } = useTranslation();
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
                            {data.navItems.map((item) => {
                                const label = navKeyMap[item.label] ? t(navKeyMap[item.label]) : item.label;
                                return (
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
                                            {label}
                                        </Link>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Typography variant="body2">
                        {t('footer.copyright', { year: new Date().getFullYear() })}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};
