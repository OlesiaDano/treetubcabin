
import { styled } from "@mui/system";
import { Colors } from "../../styles";
import { Box } from "@mui/material";

export const FooterBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'spase-between',
    padding: '50px 50px 10px',
    backgroundColor: `${Colors.dove_gray}`,
    [theme.breakpoints.down('md')]: {
        width: '100%',
    },
}));
