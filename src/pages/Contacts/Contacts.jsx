import React from 'react'
import PageWrapper from '../../components/PageWrapper/PageWrapper';

import { Grid, Typography, Card, CardMedia } from '@mui/material';
import SocialMedia from '../../components/SocialMedia.jsx/SocialMedia';
import ContactForm from '../../components/ContactForm/ContactForm';
import { Colors } from '../../styles';


function Contacts() {

  return (
    <>
      <PageWrapper>

        <Card sx={{ maxWidth: '600', margin: '0 auto', }}>
          <CardMedia
            component="iframe"
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2636.1397962447336!2d22.436037!3d48.6454408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739106009e73f17%3A0xbd4bc7549ccccd2!2sYarok%2C%20Zakarpattia%20Oblast%2C%2089414!5e0!3m2!1sen!2sua!4v1687621929643!5m2!1sen!2sua"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </Card>
        <Grid container spacing={2} sx={{ justifyContent: 'space-between', marginTop: '20px', padding: '20px 40px', background: `${Colors.dark}`, color: `${Colors.dove_gray}`}}>
          <Grid item xs={12} md={6} >
            <ContactForm />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom sx={{ marginTop: '30px' }}>
              Address
            </Typography>
            <Typography variant="body1">
              Yarok 123, Zakarpattia Oblast, 89414, Ukraine
            </Typography>
            <Typography variant="h6" gutterBottom>
              Phone
            </Typography>
            <Typography variant="body1">
              +1 123-456-7890
            </Typography>
            <Typography variant="h6" gutterBottom>
              Email
            </Typography>
            <Typography variant="body1">
              info@example.com
            </Typography>
            <SocialMedia />
          </Grid>
        </Grid>
      </PageWrapper>
    </>
  )
}

export default Contacts