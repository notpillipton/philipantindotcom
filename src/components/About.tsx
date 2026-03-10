import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import DnsIcon from '@mui/icons-material/Dns';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';

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

const About: React.FC = () => {
    return (
        <Box component="section" id="bio" sx={{ py: 8, bgcolor: '#f4f4f4' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 6, width: { xs: '100%', md: '70%' }, mx: 'auto' }}>
                    <Typography variant="h4" component="h3" gutterBottom sx={{ fontSize: '180%', textTransform: 'uppercase', mb: 2 }}>
                        Who Is Philip? What Can He Do?
                    </Typography>
                    <Box sx={{ width: '100px', height: '2px', bgcolor: 'primary.main', mx: 'auto', mb: 4 }} />
                    <Typography variant="body1" sx={{ fontSize: '110%', lineHeight: 1.45, mb: 4, fontStyle: 'italic' }}>
                        Insatiable learner. Effective communicator. Perceptive collaborator.
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '110%', lineHeight: 1.45, mb: 4 }}>
                        Philip draws upon his background in engineering, ethics, and nonprofit leadership to solve complex challenges in software architecture and technical leadership.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {assets.map((item, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Paper elevation={0} sx={{ p: 2, textAlign: 'center', bgcolor: 'transparent' }}>
                                {item.icon}
                                <Typography variant="h6" gutterBottom sx={{ fontSize: '110%', mb: 2, fontWeight: 'bold' }}>{item.title}</Typography>
                                <Typography variant="body2" sx={{ fontSize: '90%', lineHeight: 1.45 }}>{item.description}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        href="/data/Antin Technical Leadership Resume - 2024-03.pdf"
                        target="_blank"
                        startIcon={<DownloadIcon />}
                    >
                        Download Philip's Resume
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default About;
