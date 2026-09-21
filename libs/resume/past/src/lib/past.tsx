import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import HistoryIcon from '@mui/icons-material/History';
import { useTranslation, Trans } from 'react-i18next';
import '@shared/i18n';

export const Past: React.FC = () => {
    const { t } = useTranslation();
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
                    {t('past.back')}
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
                    <Typography variant="h4" component="div" gutterBottom sx={{ fontSize: '180%', textTransform: 'uppercase', mb: 2 }}>
                        {t('past.startedTitle')}
                    </Typography>
                    <Box sx={{ width: '100px', height: '2px', bgcolor: 'primary.main', mx: 'auto', mb: 4 }} />
                    <Typography variant="body1" component="div" sx={{ fontSize: '110%', lineHeight: 1.45, mb: 4 }}>
                        {t('past.startedText')}
                    </Typography>
                </Box>
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
                    <Typography variant="h4" component="div" gutterBottom sx={{ fontSize: '180%', textTransform: 'uppercase', mb: 2 }}>
                        {t('past.goingTitle')}
                    </Typography>
                    <Box sx={{ width: '100px', height: '2px', bgcolor: 'primary.main', mx: 'auto', mb: 4 }} />
                    <Typography variant="body1" component="div" sx={{ fontSize: '110%', lineHeight: 1.45, mb: 4 }}>
                        <Trans i18nKey="past.goingText" components={{ br: <br /> }} />
                    </Typography>
                </Box>
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
                    <Typography variant="body1" component="div" sx={{ fontSize: '110%', lineHeight: 1.45, mb: 4 }}>
                        <Trans i18nKey="past.archiveNotice" components={{ em: <em /> }} />
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
                            {t('past.blastButton')}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
