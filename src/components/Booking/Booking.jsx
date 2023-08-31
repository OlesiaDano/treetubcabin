import React, { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box } from '@mui/material';
import { BookingForm, BookingField, BookingDate, SubmitBtn } from './Booking.style';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles';
import dayjs from 'dayjs';

function Booking() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [cell, setCell] = useState('');
    const [email, setEmail] = useState('');
    const [telegram, setTelegram] = useState('');
    const [comments, setComments] = useState('');
    const [bookedDates, setBookedDates] = useState([]);

    useEffect(() => {
        // Retrieve the bookingRequest array from localStorage or initialize it as an empty array
        const bookingRequest = JSON.parse(localStorage.getItem('bookingRequest'));
        if (Array.isArray(bookingRequest)) {
            setBookedDates(bookingRequest);
        } else {
            localStorage.setItem('bookingRequest', JSON.stringify([]));
        }
    }, [bookedDates]);

    const handleStartDateChange = (date) => {
        const formattedDate = date.format('DD-MM-YYYY');
        setStartDate(formattedDate);
    };

    const handleEndDateChange = (date) => {
        const formattedDate = date.format('DD-MM-YYYY');
        setEndDate(formattedDate);
    };

    const isDateBooked = (date) => {
        const formattedDate = date.format('DD-MM-YYYY');
        return bookedDates.some((booking) => booking.startDate === formattedDate);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!startDate || !endDate) {
            alert('Please select both start and end dates before booking.');
            return;
        }

        const newBookingData = {
            startDate,
            endDate,
            name,
            surname,
            cell,
            email,
            telegram,
            comments,
        };

        // Retrieve the existing bookingRequest array from localStorage or initialize it as an empty array
        const existingBookings = JSON.parse(localStorage.getItem('bookingRequest')) || [];

        // Append the newBookingData to the existing bookings array
        const updatedBookings = [...existingBookings, newBookingData];

        // Save the updated bookings array to local storage
        localStorage.setItem('bookingRequest', JSON.stringify(updatedBookings));

        // Update the bookedDates state with the newly booked dates
        const newBookedDates = [];
        let currentDate = dayjs(startDate);

        while (currentDate.isSameOrBefore(dayjs(endDate), 'day')) {
            newBookedDates.push(currentDate.format('DD-MM-YYYY'));
            currentDate = currentDate.add(1, 'day');
        }
        setBookedDates(newBookedDates);

        // Clear form inputs
        setStartDate(null);
        setEndDate(null);
        setName('');
        setSurname('');
        setCell('');
        setEmail('');
        setTelegram('');
        setComments('');
    };


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ThemeProvider theme={theme}>
                <BookingForm>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '10px' }} >

                        <BookingDate
                            variant="filled"
                            label="Start Date"
                            color="primary"
                            format="DD-MM-YYYY"
                            value={startDate}
                            onChange={handleStartDateChange}
                            renderDay={(day, _selectedDate, _DayComponentProps) => {
                                const formattedDate = dayjs(day).format('DD-MM-YYYY');
                                const isBooked = isDateBooked(day);
                                return <div style={{ textDecoration: isBooked ? 'line-through' : 'none' }}>{formattedDate}</div>;
                            }}
                        />
                        <BookingDate
                            variant="filled"
                            label="End Date"
                            format="DD-MM-YYYY"
                            value={endDate}
                            onChange={handleEndDateChange}
                            renderDay={(day, _selectedDate, _DayComponentProps) => {
                                const formattedDate = dayjs(day).format('DD-MM-YYYY');
                                const isBooked = isDateBooked(day);
                                return <div style={{ textDecoration: isBooked ? 'line-through' : 'none' }}>{formattedDate}</div>;
                            }}
                        />
                    </Box>

                    <BookingField
                        variant="filled"
                        color='success'
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <BookingField
                        variant="filled"
                        color="success"
                        label="Surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    <BookingField
                        variant="filled"
                        color="success"
                        label="Cell"
                        value={cell}
                        onChange={(e) => setCell(e.target.value)}
                    />
                    <BookingField
                        variant="filled"
                        color="success"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <BookingField
                        variant="filled"
                        color="success"
                        label="Telegram"
                        value={telegram}
                        onChange={(e) => setTelegram(e.target.value)}
                    />
                    <BookingField
                        variant="filled"
                        color="success"
                        label="Comments"
                        multiline
                        rows={4}
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    />
                    <SubmitBtn type="submit" onClick={handleFormSubmit}>Book Now</SubmitBtn>
                </BookingForm >
            </ThemeProvider>
        </LocalizationProvider >
    )
}

export default Booking