import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { Colors } from "../../styles";


export const SubmitBtn = styled(Button)(({ theme }) => ({
    display: 'block',
    width: '30%',
    backgroundColor: `${Colors.dove_gray}`,
    color: `${Colors.dark}`,
    marginTop: '15px',
    '&:hover': {
        backgroundColor: `${Colors.complementary}`,
        color: `${Colors.dove_gray}`,
    },
    [theme.breakpoints.down('md')]: {
        width: '100%',
    },
}));
