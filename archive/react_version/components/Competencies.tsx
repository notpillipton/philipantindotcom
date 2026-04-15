import React, { useState, useMemo } from 'react';
import { Box, Chip, Container, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import data from '../assets/competencies.json';
import OldCompetencies from './OldCompetencies';

const Competencies: React.FC = () => {
    const navigate = useNavigate();
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const categories = useMemo(() => {
        const cats = new Set<string>();
        data.competencies.forEach(comp => cats.add(comp.category));
        return Array.from(cats);
    }, []);

    const toggleCategory = (cat: string) => {
        setSelectedCategories(prev => 
            prev.includes(cat) 
                ? prev.filter(c => c !== cat) 
                : [...prev, cat]
        );
    };

    return (
        <>
            <Box component="section" id="competencies" sx={{ py: 8, bgcolor: '#f9f9f9', minHeight: '100vh', position: 'relative' }}>
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
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography variant="h4" component="h3" gutterBottom sx={{ fontSize: '180%', textTransform: 'uppercase', mb: 2 }}>
                            Core Competencies
                        </Typography>
                        <Box sx={{ width: '100px', height: '2px', bgcolor: 'primary.main', mx: 'auto', mb: 4 }} />
                        <Typography variant="body1" sx={{ fontSize: '110%', lineHeight: 1.45, mb: 4 }}>
                            A diverse set of skills spanning technical implementation, team leadership, and abstract problem solving<br/>... with a smattering of artistic flair.
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                            justifyContent: 'center',
                            mb: 6
                        }}
                    >
                        {categories.map((cat) => {
                            const isActive = hoveredCategory === cat || selectedCategories.includes(cat);
                            return (
                                <Button
                                    key={cat}
                                    variant={isActive ? "contained" : "outlined"}
                                    color={isActive ? "primary" : "secondary"}
                                    size="large"
                                    onMouseEnter={() => setHoveredCategory(cat)}
                                    onMouseLeave={() => setHoveredCategory(null)}
                                    onClick={() => toggleCategory(cat)}
                                    sx={{
                                        borderWidth: 2,
                                        '&:hover': {
                                            borderWidth: 2,
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {cat}
                                </Button>
                            );
                        })}
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 1.5,
                            justifyContent: 'center',
                            maxWidth: '800px',
                            mx: 'auto'
                        }}
                    >
                        {data.competencies.map((comp, idx) => {
                            const isActive = hoveredCategory === comp.category || selectedCategories.includes(comp.category);
                            return (
                                <Chip
                                    key={idx}
                                    label={comp.name}
                                    color={isActive ? 'primary' : 'secondary'}
                                    variant="filled"
                                    sx={{
                                        fontSize: '1rem',
                                        py: 2.5,
                                        transition: 'background-color 0.3s ease'
                                    }} />
                            );
                        })}
                    </Box>
                </Container>
            </Box>
            <OldCompetencies />
        </>
    );
};

export default Competencies;
