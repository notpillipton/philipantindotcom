import React from 'react';
import { Box, Container, GridLegacy as Grid, Typography, Paper } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology'; // For philosophy/ethics
import ExploreIcon from '@mui/icons-material/Explore'; // For leadership/compass
import MusicNoteIcon from '@mui/icons-material/MusicNote'; // For fine arts
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';

const assets = [
    {
        icon: <CodeIcon sx={{ fontSize: 50, color: 'primary.main', mb: 1 }} />,
        title: '30 years of coding',
        description: "Philip picked up programming as a teenager and continued as a hobbyist throughout his adult life. Now he's channeling his diverse expertise through his coding skills in order to create useful tools."
    },
    {
        icon: <SchoolIcon sx={{ fontSize: 50, color: 'primary.main', mb: 1 }} />,
        title: '13 years of teaching',
        description: "Philip has more than a decade of experience as a college professor. He's equipped young adults with skills in critical thinking, logic, ethics, and philosophy. His students often return after graduation to thank him for his enthusiasm and effectiveness."
    },
    {
        icon: <PsychologyIcon sx={{ fontSize: 50, color: 'primary.main', mb: 1 }} />,
        title: 'Analytic philosophy and ethics',
        description: "Philip's graduate studies in analytic philosophy emphasized critical thinking, conceptual clarity, and openness to critique, while his research in ethics explored the practical application of these skills."
    },
    {
        icon: <ExploreIcon sx={{ fontSize: 50, color: 'primary.main', mb: 1 }} />,
        title: '13 years of nonprofit leadership',
        description: "In his work with various 501c(3) nonprofit organizations, Philip has equipped student leaders to mentor others, organized volunteer staff, and restructured training programs in order to further the missions of these nonprofits."
    },
    {
        icon: <MusicNoteIcon sx={{ fontSize: 50, color: 'primary.main', mb: 1 }} />,
        title: 'Fine arts',
        description: "Programming might not give him much opportunity to sing opera, but Philip's study of music and art have refined his design sensibilities and given him an eye — and ear! — for presentation."
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
                    <Typography variant="body1" sx={{ fontSize: '110%', lineHeight: 1.45, mb: 4 }}>
                        Philip is an innovative and multitalented professional who combines expertise in the humanities with experience as an educator in order to create intuitive software.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {assets.map((item, index) => (
                        <Grid item xs={12} sm={6} md={2.4} key={index}>
                            <Paper elevation={0} sx={{ p: 2, textAlign: 'center', bgcolor: 'transparent' }}>
                                {item.icon}
                                <Typography variant="h6" gutterBottom sx={{ fontSize: '110%', mb: 2 }}>{item.title}</Typography>
                                <Typography variant="body2" sx={{ fontSize: '90%', lineHeight: 1.45 }}>{item.description}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        href="/data/Antin Programming Resume - 2018-07.pdf"
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
