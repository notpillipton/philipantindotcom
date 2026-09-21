import React from 'react';
import { Box, ImageList, ImageListItem, ImageListItemBar, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import '@shared/i18n';

const itemConfig = [
    { img: '/img/comp01.jpg', key: 'comp01' },
    { img: '/img/comp02.jpg', key: 'comp02' },
    { img: '/img/comp03.jpg', key: 'comp03' },
    { img: '/img/comp04.jpg', key: 'comp04' },
    { img: '/img/comp05.jpg', key: 'comp05' },
    { img: '/img/comp06.jpg', key: 'comp06' },
    { img: '/img/comp07.jpg', key: 'comp07' },
    { img: '/img/comp08.jpg', key: 'comp08' },
];

export const OldCompetencies: React.FC = () => {
    const { t } = useTranslation();
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
                {itemConfig.map((item) => {
                    const title = t(`competencies.oldCompetencies.${item.key}`);
                    return (
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
                                alt={title}
                                loading="lazy"
                                style={{
                                    transition: 'transform 0.5s, filter 0.5s',
                                    display: 'block',
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                            <ImageListItemBar
                                title={
                                    <Box sx={{ whiteSpace: 'normal', textAlign: 'center', fontSize: '100%', textTransform: 'uppercase', fontWeight: 300 }}>
                                        {title}
                                    </Box>
                                }
                                position="bottom"
                                sx={{
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    background: 'transparent',
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
                    );
                })}
            </ImageList>
        </Box>
    );
};
