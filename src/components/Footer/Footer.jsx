import React from 'react'
import { Typography } from '@mui/material';
import { FooterBox } from './Footer.style';

function Footer() {

    return (
        <FooterBox component="footer" >
            <Typography variant="body2" color="textSecondary">
                &copy; {new Date().getFullYear()} Tree Tub Cabin. All rights reserved.
            </Typography>
        </FooterBox>
    )
}

export default Footer