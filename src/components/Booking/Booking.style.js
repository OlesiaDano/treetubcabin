import { styled } from "@mui/material/styles";
import { TextField, Button } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers-pro';
import { Colors } from "../../styles";

export const BookingForm = styled('form')(() => ({
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '10px'
}));

export const BookingField = styled(TextField)(() => ({
    backgroundColor: `${Colors.dove_gray}`,
    color: `${Colors.dark}`,
    borderRadius: '5px',
}));

export const BookingDate = styled(DatePicker)(() => ({
    backgroundColor: `${Colors.dove_gray}`,
    color: `${Colors.dark}`,
    borderRadius: '5px',
}));

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
