import React from 'react'
import { SocialList, SocialItem } from './SocialMedia.style'
import { SocialLink } from './SocialMedia.style';
import { FaFacebook, FaInstagram, FaViber, FaTelegram } from 'react-icons/fa';
import { IconButton } from '@mui/material';
import { Colors } from '../../styles';

function SocialMedia() {
    return (
        <div>
            <SocialList >
                <SocialItem >
                    <SocialLink sx={{ color: 'inherit' }} href="https://www.facebook.com/your-facebook-page-url" target="_blank" rel="noopener">
                        <FaFacebook />
                    </SocialLink>
                </SocialItem>
                <SocialItem >
                    <SocialLink href="https://www.instagram.com/your-instagram-page-url" target="_blank" rel="noopener">
                        <FaInstagram />
                    </SocialLink>
                </SocialItem>
                <SocialItem >
                    <SocialLink href="viber://chat/?number=+1234567890">
                        <FaViber />
                    </SocialLink>
                </SocialItem>
                <SocialItem >
                    <SocialLink href="https://t.me/your-telegram-channel-url" target="_blank" rel="noopener">
                        <FaTelegram />
                    </SocialLink>
                </SocialItem>
            </SocialList>
        </div>
    )
}

export default SocialMedia