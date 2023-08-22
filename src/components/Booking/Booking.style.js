import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers-pro';
import { Colors } from "../../styles";

export const BookingForm = styled('form')(({ theme }) => ({
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '10px'
}));

export const BookingField = styled(TextField)(({ theme }) => ({
    backgroundColor: `${Colors.dove_gray}`,
    color: `${Colors.dark}`,
    borderRadius: '5px',
}));

export const BookingDate = styled(DatePicker)(({ theme }) => ({
    backgroundColor: `${Colors.dove_gray}`,
    color: `${Colors.dark}`,
    borderRadius: '5px',
}));
