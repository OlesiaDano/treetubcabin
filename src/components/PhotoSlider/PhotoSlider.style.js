import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { Colors } from "../../styles";

export const ArrowNav = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: 'calc(50% - 50px)',
    padding: '15px',
    border: `1px solid ${Colors.black}`,
    '&:hover': {
        backgroundColor: Colors.black,
        color: Colors.white,
    },
}));