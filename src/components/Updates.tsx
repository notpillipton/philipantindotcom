import React from 'react';
import { Box, Container, GridLegacy as Grid, Typography, Paper, Link } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';

const updates = [
    {
        image: '/img/headshot.jpg',
        title: 'PhilipAntin.com',
        date: '2018-07-04',
        content: 'PhilipAntin.com goes live',
        link: null
    },
    {
        image: '/img/headshot.jpg',
        title: 'PhilipAntin.com',
        date: '2018-06-29',
        content: 'Registration of PhilipAntin.com',
        link: null
    },
    {
        image: '/img/ArithmeticDrill120.png',
        title: 'Arithmetic Drill',
        date: '2018-06-22',
        content: 'Version 1.2 - Now available from the App Store!',
        link: 'https://itunes.apple.com/us/app/arithmetic-drill/id1393861540?mt=8',
        store: true
    },
    {
        image: '/img/ArithmeticDrill120.png',
        title: 'Arithmetic Drill',
        date: '2018-06-12',
        content: 'Version 1.1 - Now available from the App Store!',
        link: 'https://itunes.apple.com/us/app/arithmetic-drill/id1393861540?mt=8',
        store: true
    }
];

const Updates: React.FC = () => {
    return (
        <Box component="section" id="updates" sx={{ py: 8, bgcolor: '#f4f4f4' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h4" component="h3" gutterBottom sx={{ fontSize: '180%', textTransform: 'uppercase' }}>
                        Here are the most recent updates
                    </Typography>
                    <Box sx={{ width: '100px', height: '2px', bgcolor: 'primary.main', mx: 'auto', mb: 4 }} />
                </Box>

                <Grid container spacing={4}>
                    {updates.map((update, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Paper sx={{ p: 2, textAlign: 'center', height: '100%', borderRadius: 2 }}>
                                <img src={update.image} alt={update.title} style={{ width: 'auto', height: 100, marginBottom: 15, borderRadius: 5 }} />
                                <Typography variant="h6" gutterBottom color="primary">{update.title}</Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1, color: 'text.secondary' }}>
                                    <AccessTimeIcon sx={{ fontSize: 18, mr: 0.5 }} />
                                    <Typography variant="body2">{update.date}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, color: 'text.secondary', px: 1 }}>
                                    <StarIcon sx={{ fontSize: 18, mr: 0.5 }} />
                                    <Typography variant="body2">{update.content}</Typography>
                                </Box>

                                {update.link && update.store && (
                                    <Box sx={{ mt: 'auto' }}>
                                        <Link href={update.link} target="_blank">
                                            <img src="/img/AppleAppStore.png" alt="Download from App Store" style={{ height: 40 }} />
                                        </Link>
                                    </Box>
                                )}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Updates;
