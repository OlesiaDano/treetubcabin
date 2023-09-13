import React, { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { Box } from '@mui/material';
import { BookingForm, BookingField, BookingDate, SubmitBtn } from './Booking.style';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles';
// import moment from 'moment'; // Import moment

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
        const bookingRequest = JSON.parse(localStorage.getItem('bookingRequest'));
        if (Array.isArray(bookingRequest)) {
            setBookedDates(bookingRequest);
        } else {
            localStorage.setItem('bookingRequest', JSON.stringify([]));
        }
        if (startDate) {
            console.log('startdate', startDate)
        }

    }, [bookedDates]);

    const handleStartDateChange = (date) => {
        // const formattedDate = date.format('YYYY-MM-DD');
        // console.log('date: ', moment(date));
        // const momentDate = moment(date); // Initialize a moment object from the selected date
        console.log('date', date)
        setStartDate(date); // Set the moment object as the startDate
    };

    const handleEndDateChange = (date) => {
        // const formattedDate = date.format('YYYY-MM-DD');
        // const momentDate = moment(date); // Initialize a moment object from the selected date
        setEndDate(date); // Set the moment object as the startDate
    };

    const isDateBooked = (date) => {
        // const momentDate = moment(date);

        return bookedDates.some((booking) => {
            const bookingStartDate = new Date(booking.startDate);
            const bookingEndDate = new Date(booking.endDate);
            const selectedDate = new Date(date);

            // Check if the selected date is within the range of any booking
            // return momentDate.isBetween(bookingStartDate, bookingEndDate, null, '[]');
            return (
                selectedDate >= bookingStartDate &&
                selectedDate <= bookingEndDate
            )
        });
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

        const existingBookings = JSON.parse(localStorage.getItem('bookingRequest')) || [];
        const updatedBookings = [...existingBookings, newBookingData];

        localStorage.setItem('bookingRequest', JSON.stringify(updatedBookings));

        const newBookedDates = [];
        let currentDate = startDate;

        // console.log('currentDate', startDate)

        // console.log(currentDate)

        while (currentDate.isSameOrBefore(endDate, 'day')) {
            newBookedDates.push(currentDate.format('YYYY-MM-DD'));
            currentDate = currentDate.add(1, 'day');
        }
        setBookedDates(newBookedDates);

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
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <ThemeProvider theme={theme}>
                <BookingForm>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '10px' }} >
                        <BookingDate
                            variant="filled"
                            label="Start Date"
                            color="primary"
                            format="YYYY-MM-DD"
                            value={startDate}
                            onChange={handleStartDateChange}
                            renderDay={(day, _selectedDate, _DayComponentProps) => {
                                // const momentDate = moment(day);
                                const isBooked = isDateBooked(day);
                                return <div style={{ textDecoration: isBooked ? 'line-through' : 'none' }}>{day}</div>;
                            }}
                        />
                        <BookingDate
                            variant="filled"
                            label="End Date"
                            format="YYYY-MM-DD"
                            value={endDate}
                            onChange={handleEndDateChange}
                            renderDay={(day, _selectedDate, _DayComponentProps) => {
                                // const momentDate = moment(day);
                                const isBooked = isDateBooked(day);
                                return <div style={{ textDecoration: isBooked ? 'line-through' : 'none' }}>{day}</div>;
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

export default Booking;