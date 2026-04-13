import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import DnsIcon from '@mui/icons-material/Dns';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';

const assets = [
    {
        icon: <DnsIcon sx={{ fontSize: 50, color: 'primary.main', mb: 1 }} />,
        title: 'Software Architecture & Engineering',
        description: "Philip designs and implements web applications at enterprise scale. He works closely with stakeholders, analysts, and designers to understand needs and refine requirements. He has a proven track record of launching mission-critical systems for logistics and operations."
    },
    {
        icon: <GroupsIcon sx={{ fontSize: 50, color: 'primary.main', mb: 1 }} />,
        title: 'Technical Leadership & Mentoring',
        description: "Leveraging his background in education and nonprofit leadership, Philip excels at leading engineering teams and fostering a culture of continuous learning. He has successfully mentored junior developers into high-performing contributors."
    },
    {
        icon: <SchoolIcon sx={{ fontSize: 50, color: 'primary.main', mb: 1 }} />,
        title: 'Education & Communication',
        description: "With over 20 years of college-level teaching experience, Philip possesses an exceptional ability to communicate complex technical concepts effectively. He is a seasoned public speaker who thrives at the intersection of clarity and innovation."
    },
    {
        icon: <PsychologyIcon sx={{ fontSize: 50, color: 'primary.main', mb: 1 }} />,
        title: 'Analytic philosophy and ethics',
        description: "His graduate studies in philosophy provide a foundation in formal logic, conceptual clarity, and rigorous critical thinking. These skills inform his understanding of complex systems and how they evolve."
    }
];

export const About: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [textIndex, setTextIndex] = useState(0);

    const rotatingHeroText = [
        "Programmer ~ Professor ~ Philosopher",
        "Engineer ~ Educator ~ Ethicist"
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % rotatingHeroText.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [rotatingHeroText.length]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
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
                    <Typography variant="h1" component="div" sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '4rem' } }}>
                        {rotatingHeroText[textIndex]}
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ mb: 4, fontWeight: 300 }}>
                        Enabling human competence in an increasingly intricate digital world.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => {
                                setSearchParams({ ...Object.fromEntries(searchParams), contact: 'true' }, { replace: true });
                                window.dispatchEvent(new Event('popstate'));
                            }}
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
                    </Box>
                </Container>
            </Box>

            <Box component="section" id="bio" sx={{ py: 8, bgcolor: '#f4f4f4' }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 6, width: { xs: '100%', md: '70%' }, mx: 'auto' }}>
                        <Typography variant="h3" component="div" gutterBottom sx={{ fontSize: '250%', textTransform: 'uppercase', mb: 2 }}>
                            Who Is Philip? What Can He Do?
                        </Typography>
                        <Box sx={{ width: '100px', height: '2px', bgcolor: 'primary.main', mx: 'auto', mb: 4 }} />
                        <Typography variant="body1" component="div" sx={{ fontSize: '160%', lineHeight: 1.45, mb: 4, fontStyle: 'italic', fontWeight: 300 }}>
                            Insatiable learner. Effective communicator. Perceptive collaborator.
                        </Typography>
                        <Typography variant="body1" component="div" sx={{ fontSize: '160%', lineHeight: 1.45, mb: 4, fontWeight: 300 }}>
                            Philip draws upon his background in engineering, ethics, and nonprofit leadership to solve complex challenges in software architecture and technical leadership.
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {assets.map((item, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                                <Paper elevation={0} sx={{ p: 2, textAlign: 'center', bgcolor: 'transparent' }}>
                                    {item.icon}
                                    <Typography variant="h3" component="div" gutterBottom sx={{ fontSize: '150%', mb: 2, fontWeight: 'bold' }}>{item.title}</Typography>
                                    <Typography variant="body2" sx={{ fontSize: '120%', lineHeight: 1.45 }}>{item.description}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>

                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 6, flexWrap: 'wrap' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            href="/data/Antin_Resume_Technical_Leadership_2026-03.pdf"
                            download="Antin_Resume_Technical_Leadership_2026-03.pdf"
                            target="_blank"
                            startIcon={<DownloadIcon />}
                        >
                            Download Philip's Resume
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => navigate('/competencies')}
                            startIcon={<VisibilityIcon />}
                            sx={{ borderWidth: 2, '&:hover': { borderWidth: 2 } }}
                        >
                            See Philip's Competencies
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    );
};
