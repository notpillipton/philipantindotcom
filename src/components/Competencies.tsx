import React from 'react';
import { Box, ImageList, ImageListItem, ImageListItemBar, useMediaQuery } from '@mui/material';

const itemData = [
    {
        img: '/img/comp01.jpg',
        title: 'Successfully developed, launched, improved, and maintained three major enterprise applications',
    },
    {
        img: '/img/comp02.jpg',
        title: 'Guided coding standards, tooling, automated testing, DevOps, and UI security flows',
    },
    {
        img: '/img/comp03.jpg',
        title: 'Collaborated on enterprise AI policies and adoption strategies',
    },
    {
        img: '/img/comp04.jpg',
        title: 'Matured state management strategies alongside application complexity',
    },
    {
        img: '/img/comp05.jpg',
        title: 'Developed and launched an enterprise mentoring program and forged highly effective teams',
    },
    {
        img: '/img/comp06.jpg',
        title: 'Coached public speaking with ToastMasters and taught internal classes for developers',
    },
    {
        img: '/img/comp07.jpg',
        title: 'Collaborated in an Agile enviornment with designers, product owners, and stakeholders',
    },
    {
        img: '/img/comp08.jpg',
        title: 'Pursued graduate studies in analytic philosophy and ethics',
    },
];

const Competencies: React.FC = () => {

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
