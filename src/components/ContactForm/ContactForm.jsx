import { useState } from 'react';
import {  Typography } from '@mui/material';
import { ContactField } from './ContactForm.style';
import FormButton from '../FormButton/FormButton';

function ContactForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if all fields are filled
        if (!name || !phone || !email || !subject || !message) {
            setErrorMessage('Please fill in all fields required.');
            return errorMessage;
        }
        console.log("errorMessage: " + errorMessage);

        // Construct the email body
        const emailBody = `
            Name: ${name}
            Phone: ${phone}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}
        `;

        // Send email
        window.location.href = `mailto:olesiadano@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

        // Reset form fields and error message
        setName('');
        setPhone('');
        setEmail('');
        setSubject('');
        setMessage('');
        setErrorMessage('');
    };

    return (
        <form>
            {errorMessage && (
                <Typography color="error" variant="body2" gutterBottom>
                    {errorMessage}
                </Typography>
            )}
            <ContactField
                label="Name"
                variant="filled"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
                fullWidth
                margin="normal"
                color="success"
            />
            <ContactField
                label="Phone"
                variant="filled"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                fullWidth
                margin="normal"
                color="success"
            />
            <ContactField
                label="Email"
                variant="filled"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
                color="success"
            />
            <ContactField
                label="Subject"
                variant="filled"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                fullWidth
                margin="normal"
                color="success"
            />
            <ContactField
                label="Message"
                variant="filled"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                multiline
                rows={4}
                fullWidth
                margin="normal"
                color="success"
            />
            <FormButton onSubmit={handleSubmit} name={'Send'} />
        </form>
    );
}

export default ContactForm;