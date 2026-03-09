import React from 'react';
import { Box, ImageList, ImageListItem, ImageListItemBar, useMediaQuery } from '@mui/material';

const itemData = [
    {
        img: '/img/comp1-min.jpg',
        title: 'Application development and programming',
    },
    {
        img: '/img/comp2.jpg',
        title: 'Analytic philosophy, emphasizing formal logic and critical thinking',
    },
    {
        img: '/img/comp3-min.jpg',
        title: 'Fine arts (vocal music and sculpture)',
    },
    {
        img: '/img/comp4.jpg',
        title: 'Teaching',
    },
    {
        img: '/img/comp5.jpg',
        title: 'Project design and maintenance',
    },
    {
        img: '/img/comp6-min.jpg',
        title: 'Public speaking and performance',
    },
    {
        img: '/img/comp7.jpg',
        title: 'Research',
    },
    {
        img: '/img/comp8.jpg',
        title: 'Release and update of applications',
    },
];

const Competencies: React.FC = () => {
    // Media query to control col number
    // xs: 1, sm: 2, md: 4
    // MUI ImageList cols prop

    // We can't use hooks directly in styling props sometimes, but let's try responsive logic
    // Actually basic ImageList is static cols usually, or we use `cols` prop.

    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(max-width:960px)');

    let cols = 4;
    if (isMobile) cols = 1;
    else if (isTablet) cols = 2;

    return (
        <Box component="section" sx={{ width: '100%', overflow: 'hidden' }}>
            <ImageList
                sx={{
                    width: '100%',
                    height: 'auto',
                    m: 0,
                    gridTemplateColumns: `repeat(${cols}, 1fr) !important`
                }}
                cols={cols}
                gap={0}
            >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} sx={{
                        '&:hover .MuiImageListItemBar-root': {
                            opacity: 1,
                            backgroundColor: 'rgba(0,0,0,0.7)',
                        },
                        '&:hover img': {
                            transform: 'scale(1.05)',
                            filter: 'blur(2px) brightness(80%)'
                        },
                        overflow: 'hidden'
                    }}>
                        <img
                            src={`${item.img}?w=500&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=500&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            style={{
                                transition: 'transform 0.5s, filter 0.5s',
                                display: 'block',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover' // ensures full tile fill 
                            }}
                        />
                        <ImageListItemBar
                            title={
                                <Box sx={{ whiteSpace: 'normal', textAlign: 'center', fontSize: '100%', textTransform: 'uppercase', fontWeight: 300 }}>
                                    {item.title}
                                </Box>
                            }
                            position="bottom"
                            sx={{
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                background: 'transparent', // controlled by hover above
                                opacity: 0,
                                transition: 'opacity 0.5s, background-color 0.5s',
                                '& .MuiImageListItemBar-titleWrap': {
                                    textAlign: 'center',
                                    p: 2
                                },
                                '& .MuiImageListItemBar-title': {
                                    fontSize: '1rem',
                                    lineHeight: '1.5',
                                    whiteSpace: 'normal',
                                }
                            }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

export default Competencies;
