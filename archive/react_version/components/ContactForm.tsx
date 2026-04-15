import React, { useState } from 'react';
import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    MenuItem,
    Select,
    FormControl,
    Alert,
    Snackbar,
    CircularProgress,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    useMediaQuery,
    useTheme,
    type SelectChangeEvent
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
    open: boolean;
    onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ open, onClose }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        findUs: 'jobapp',
        followup: true,
        message: '',
        passphrase: ''
    });

    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [loading, setLoading] = useState(false);
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

    const handleClose = () => {
        setStatus('idle');
        onClose();
    };

    const handleSubmit = async (e: React.FormEvent) => {
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

        setLoading(true);

        try {
            const templateParams = {
                name: formData.name,
                email: formData.email,
                findUs: formData.findUs,
                followup: formData.followup ? 'Yes' : 'No',
                message: formData.message,
            };

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            console.log('Form submitted successfully via EmailJS');
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                findUs: 'jobapp',
                followup: true,
                message: '',
                passphrase: ''
            });
            setTimeout(() => {
                handleClose();
            }, 2000);
        } catch (error) {
            console.error('Failed to send email:', error);
            setStatus('error');
        } finally {
            setLoading(false);
            setOpenSnackbar(true);
        }
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullScreen={isMobile}
            maxWidth="md"
            fullWidth
        >
            <DialogTitle sx={{ m: 0, p: 2, textAlign: 'center' }}>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <Typography variant="h4" component="span" sx={{ fontSize: '150%', textTransform: 'uppercase', display: 'block', mt: 2 }}>
                    Philip would love to hear from you!
                </Typography>
                <Box sx={{ width: '100px', height: '2px', bgcolor: 'primary.main', mx: 'auto', mt: 2 }} />
            </DialogTitle>

            <DialogContent>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <Grid container spacing={3} sx={{ mt: 1 }}>
                        <Grid size={{ xs: 12, sm: 4 }}>
                            <Typography sx={{ mt: 2 }}>Name</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 8 }}>
                            <TextField
                                fullWidth
                                name="name"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Grid>

                        <Grid size={{ xs: 12, sm: 4 }}>
                            <Typography sx={{ mt: 2 }}>Email</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 8 }}>
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

                        <Grid size={{ xs: 12, sm: 4 }}>
                            <Typography sx={{ mt: 2 }}>How did you find this site?</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 8 }}>
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

                        <Grid size={{ xs: 12, sm: 4 }}>
                            <Typography sx={{ mt: 1 }}>Follow-up requested?</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 8 }}>
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

                        <Grid size={{ xs: 12, sm: 4 }}>
                            <Typography sx={{ mt: 2 }}>Drop Philip a line</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 8 }}>
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

                        <Grid size={{ xs: 12, sm: 4 }}>
                            <Typography sx={{ mt: 2 }}>Anti-bot: Spell Philip's last name, backwards, ALL CAPS</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 8 }}>
                            <TextField
                                fullWidth
                                name="passphrase"
                                placeholder="Passphrase"
                                value={formData.passphrase}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>

            <DialogActions sx={{ p: 3, justifyContent: 'flex-end' }}>
                <Button
                    onClick={handleClose}
                    color="inherit"
                    sx={{ mr: 1 }}
                >
                    Cancel
                </Button>
                <Button
                    form="contact-form"
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={loading}
                    startIcon={loading && <CircularProgress size={20} color="inherit" />}
                >
                    {loading ? 'Sending...' : 'Send it!'}
                </Button>
            </DialogActions>

            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
                <Alert onClose={() => setOpenSnackbar(false)} severity={status === 'success' ? 'success' : 'error'} sx={{ width: '100%' }}>
                    {status === 'success' ? 'Your message was sent! Thank you!' : 'Your message was not sent. Please check for errors.'}
                </Alert>
            </Snackbar>
        </Dialog>
    );
};

export default ContactForm;
