import React, { useState } from 'react';
import { Box, Container, GridLegacy as Grid, Typography, TextField, Button, Checkbox, FormControlLabel, MenuItem, Select, FormControl, Alert, Snackbar, type SelectChangeEvent } from '@mui/material';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        findUs: 'jobapp',
        followup: true,
        message: '',
        passphrase: ''
    });

    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSelectChange = (e: SelectChangeEvent) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            followup: e.target.checked
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error');
            setOpenSnackbar(true);
            return;
        }

        // Anti-bot check
        if (formData.passphrase !== 'NITNA') {
            setStatus('error');
            setOpenSnackbar(true);
            alert('Incorrect passphrase! Hint: Philip\'s last name backwards, ALL CAPS.');
            return;
        }

        // Simulate sending - Integration with EmailJS or similar service required here
        // TODO: Implement actual email sending functionality.
        // options:
        // 1. EmailJS (https://www.emailjs.com/) - Frontend only, secure.
        // 2. Formspree (https://formspree.io/) - Simple form backend.
        // 3. Serverless function (AWS Lambda, Netlify Functions) to send via SES/SendGrid.

        console.log('Form submitted:', formData);
        setStatus('success');
        setOpenSnackbar(true);
        setFormData({
            name: '',
            email: '',
            findUs: 'jobapp',
            followup: true,
            message: '',
            passphrase: ''
        });
    };

    return (
        <Box component="section" id="contact" sx={{ py: 8, bgcolor: '#fff' }}>
            <Container maxWidth="md">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h4" component="h3" gutterBottom sx={{ fontSize: '180%', textTransform: 'uppercase' }}>
                        Philip would love to hear from you!
                    </Typography>
                    <Box sx={{ width: '100px', height: '2px', bgcolor: 'primary.main', mx: 'auto', mb: 4 }} />
                </Box>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Typography sx={{ mt: 2 }}>Name</Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <TextField
                                fullWidth
                                name="name"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Typography sx={{ mt: 2 }}>Email</Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <TextField
                                fullWidth
                                name="email"
                                type="email"
                                placeholder="Your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Typography sx={{ mt: 2 }}>How did you find this site?</Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <FormControl fullWidth>
                                <Select
                                    name="findUs"
                                    value={formData.findUs}
                                    onChange={handleSelectChange}
                                >
                                    <MenuItem value="jobapp">Job application or resume</MenuItem>
                                    <MenuItem value="linkedin">LinkedIn</MenuItem>
                                    <MenuItem value="search">Search engine</MenuItem>
                                    <MenuItem value="friend">Personal recommendation</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Typography sx={{ mt: 1 }}>Follow-up requested?</Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formData.followup}
                                        onChange={handleCheckboxChange}
                                        name="followup"
                                    />
                                }
                                label="Yes, please"
                            />
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Typography sx={{ mt: 2 }}>Drop Philip a line</Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <TextField
                                fullWidth
                                multiline
                                rows={4}
                                name="message"
                                placeholder="Your message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Typography sx={{ mt: 2 }}>Anti-bot: Spell Philip's last name, backwards, ALL CAPS</Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <TextField
                                fullWidth
                                name="passphrase"
                                placeholder="Passphrase"
                                value={formData.passphrase}
                                onChange={handleChange}
                                required
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} />
                        <Grid item xs={12} sm={8}>
                            <Button type="submit" variant="contained" color="primary" size="large">
                                Send it!
                            </Button>
                        </Grid>
                    </Grid>
                </form>

                <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
                    <Alert onClose={() => setOpenSnackbar(false)} severity={status === 'success' ? 'success' : 'error'} sx={{ width: '100%' }}>
                        {status === 'success' ? 'Your message was sent! Thank you!' : 'Your message was not sent. Please check for errors.'}
                    </Alert>
                </Snackbar>
            </Container>
        </Box>
    );
};

export default Contact;
