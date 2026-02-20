import React from 'react';
import { Box, Container, GridLegacy as Grid, Typography, Card, CardContent, CardMedia, CardActionArea, Chip } from '@mui/material';

const projects = [
    {
        title: 'Arithmetic Drill',
        icon: '/img/ArithmeticDrill120.png',
        link: 'https://itunes.apple.com/us/app/arithmetic-drill/id1393861540?mt=8',
        description: 'Intuitive and customizable mathematics practice app',
        tech: 'Swift (iOS)',
        status: 'Available now on Apple\'s App Store'
    },
    {
        title: 'Twizzum',
        icon: '/img/Twizzum Icon.svg',
        link: null,
        description: 'Original strategy game of shifting alliances',
        tech: 'HTML, CSS, PHP',
        status: 'In development'
    },
    {
        title: 'XAttend',
        icon: '/img/XAttend Icon.png',
        link: null,
        description: 'Cross-platform attendance management tool',
        tech: 'C# (Xamarin), Java (Android), Swift (iOS), PHP, MySQL',
        status: 'In development'
    },
    {
        title: 'PseudoTransparency',
        icon: '/img/PseudoTransparency Icon.svg',
        link: null,
        description: 'Simple interface for retrieving color codes for simulated transparency',
        tech: 'HTML, CSS, JavaScript',
        status: 'In development'
    }
];

const Projects: React.FC = () => {
    return (
        <Box component="section" id="projects" sx={{ py: 8, bgcolor: '#fff' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h4" component="h3" gutterBottom sx={{ fontSize: '180%', textTransform: 'uppercase' }}>
                        Current Projects — Always Creating!
                    </Typography>
                    <Box sx={{ width: '100px', height: '2px', bgcolor: 'primary.main', mx: 'auto', mb: 4 }} />
                </Box>

                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={4}>
                        <img src="/img/devices.gif" alt="Various screens for software development" style={{ width: '100%', maxWidth: '400px', display: 'block', margin: '0 auto' }} />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={2}>
                            {projects.map((project, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <Card elevation={1} sx={{ display: 'flex', height: '100%', p: 1 }}>
                                        <CardActionArea
                                            {...(project.link ? { href: project.link } : {})}
                                            disabled={!project.link}
                                            sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', textAlign: 'left', p: 1 }}
                                        >
                                            <CardMedia
                                                component="img"
                                                sx={{ width: 80, height: 80, objectFit: 'contain', mr: 2 }}
                                                image={project.icon}
                                                alt={project.title}
                                            />
                                            <CardContent sx={{ flex: '1 0 auto', p: '0 !important' }}>
                                                <Typography component="h4" variant="h6" color="primary">
                                                    {project.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                                    {project.description}
                                                </Typography>
                                                <Box sx={{ mb: 0.5 }}>
                                                    <Typography variant="caption" display="block" color="text.secondary">
                                                        <strong>Technologies:</strong> {project.tech}
                                                    </Typography>
                                                </Box>
                                                <Chip label={project.status} size="small" variant="outlined" color={project.status.includes('Available') ? 'success' : 'default'} />
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;
