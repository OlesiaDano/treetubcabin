import React from 'react'
import Logo from '../Header/Logo';
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { ArrowNav } from './PhotoSlider.style';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles';

function PhotoSlider({
    selectedImage,
    closeLightbox,
    navigateToPreviousImage,
    navigateToNextImage,
}) {

    return (
        <>
            <ThemeProvider theme={theme}>
                <Dialog
                    open={selectedImage !== null}
                    onClose={closeLightbox}
                    maxwidth="lg"
                    maxheight="lg"
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                            m: 1,
                            mb: 0
                        }}
                    >
                        <Logo />
                        <DialogTitle sx={{ alignSelf: 'center' }}>Tub Tree Cabin</DialogTitle>
                    </Typography>
                    <DialogContent sx={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '20px 80px 40px 80px' }}>
                        <img src={selectedImage} alt="Selected Image" style={{ width: '100%', height: 'auto' }} />
                        <ArrowNav onClick={navigateToPreviousImage} sx={{ left: '10px'}}>
                            <ArrowBack />
                        </ArrowNav>
                        <ArrowNav onClick={navigateToNextImage} sx={{ right: '10px' }} >
                            <ArrowForward />
                        </ArrowNav>

                    </DialogContent>
                </Dialog >
            </ThemeProvider>
        </>
    )
}

export default PhotoSlider