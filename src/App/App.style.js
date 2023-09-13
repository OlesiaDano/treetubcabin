import { styled } from "@mui/system";
import { css } from '@emotion/react';
import { KeyboardArrowUp } from '@mui/icons-material';

import { Colors } from "../styles";

export const ArrowUp = styled(KeyboardArrowUp)(
    ({ showarrow }) => css`
    position: fixed;
    bottom: 25px;
    right: 40px;
    background-color: ${Colors.primary};
    border-radius: 50%;
    padding: 15px;
    z-index: 100;
    visibility: ${showarrow ? 'visible' : 'hidden'};
    opacity: ${showarrow ? 1 : 0}; // Conditionally set the opacity
    transition: opacity 0.3s ease-in-out; // Add a transition effect
`
);