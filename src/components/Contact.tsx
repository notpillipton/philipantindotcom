import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface ContactProps {
    onOpenContact: () => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenContact }) => {
    return (
        <Box component="section" id="contact-cta" sx={{ py: 8, bgcolor: '#ffffff' }}>
            <Container maxWidth="lg">
                <Box sx={{ 
                    textAlign: 'center', 
                    mb: 4, 
                    width: { xs: '100%', md: '70%' }, 
                    mx: 'auto'
                }}>
                    <Typography variant="h4" component="h3" gutterBottom sx={{ fontSize: '180%', textTransform: 'uppercase', mb: 2 }}>
                        Interested in following up with Philip?
                    </Typography>
                    <Box sx={{ width: '100px', height: '2px', bgcolor: 'primary.main', mx: 'auto', mb: 4 }} />
                    
                    <Box sx={{ mt: 4 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={onOpenContact}
                            startIcon={<SendIcon />}
                        >
                            Send Him a Message
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;
