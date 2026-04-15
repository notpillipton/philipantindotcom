import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import HistoryIcon from '@mui/icons-material/History';

const Past: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Box component="section" id="past" sx={{ py: 8, bgcolor: '#ffffff', minHeight: '100vh', position: 'relative' }}>
            <Container maxWidth="lg">
                <Button 
                    startIcon={<ArrowBackIcon />} 
                    onClick={() => navigate('/')}
                    sx={{ 
                        position: 'absolute', 
                        top: 24, 
                        left: 24,
                        color: 'text.secondary',
                        '&:hover': { color: 'primary.main' }
                    }}
                >
                    Back
                </Button>
                <Box sx={{ 
                    textAlign: 'center', 
                    mb: 6, 
                    width: { xs: '100%', md: '70%' }, 
                    mx: 'auto',
                    bgcolor: '#e8e8e8',
                    p: { xs: 4, md: 8 },
                    borderRadius: 2,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                }}>
                    <Typography variant="h4" component="h3" gutterBottom sx={{ fontSize: '180%', textTransform: 'uppercase', mb: 2 }}>
                        "How it's going" vs. "How it started"
                    </Typography>
                    <Box sx={{ width: '100px', height: '2px', bgcolor: 'primary.main', mx: 'auto', mb: 4 }} />
                    <Typography variant="body1" sx={{ fontSize: '110%', lineHeight: 1.45, mb: 4 }}>
                        This website started in 2018, when Philip was first transitioning his career from education to software engineering. 
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '110%', lineHeight: 1.45, mb: 4 }}>
                        You can see the original <em>hand-coded, PHP version</em> using the link below. It's a fun way to compare how his technical experience has evolved.
                    </Typography>
                    
                    <Box sx={{ mt: 4 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            href="https://philipantin.com/archive"
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<HistoryIcon />}
                        >
                            Blast Me to the Past!
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Past;
