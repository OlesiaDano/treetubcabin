
import { styled } from "@mui/system";
import { Colors } from "../../styles";
import { TextField, Button } from "@mui/material";

export const ContactField = styled(TextField)`
    background-color: ${Colors.dove_gray};
    border-radius: 5px;
`

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