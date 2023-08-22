import React from 'react'
import { AboutBanner, AboutContent, AboutTitle, AboutSubtitle } from './About.style';
import { Grid, Typography, Container, useMediaQuery } from '@mui/material';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import theme from '../../styles';
import { Colors } from '../../styles';

function About() {
  const isBelow900px = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <PageWrapper>
      <AboutBanner>
        <AboutContent >
          <AboutTitle variant="h1" > About us </AboutTitle>
          <AboutSubtitle variant="h5" sx={{ fontSize: '1.5rem' }}> Bespoke holiday. 20 years experience.</AboutSubtitle>
        </AboutContent>
      </AboutBanner>
      <Grid container spacing={2} sx={{
        mt: '20px',
      }}>
        <Grid item  sm={12} md={6} >
          <Container variant='xs' sx={{ maxWidth: '500px!important' }}>
            <AboutTitle variant="h3" sx={{ margin: '0 0 20px 20px', color: `${Colors.dark}` }} > A Dream Life... </AboutTitle>
            <Typography variant="caption" sx={{ fontSize: '1rem', padding: '40px 20px' }}>
              Hi, we are Ann and Tom and between us, we run  Holiday Cottages Ltd. We have lived in the area for over twenty years and we truly love where we live. We aim to share all there is to know about the area, so you can get the best out of your stay.
              <pre />
              Holiday Cottages Ltd came about after working in the industry for over 20 years and we decided we wanted to offer a more bespoke, family-run business to help guests and owners alike.
              <pre />
              We aim to offer a truly personal service to make your stay at one of our holiday cottages as relaxing as we possibly can. Any queries or issues you may have during your stay, we are here to help.
              <pre />
              We can't wait to welcome you to the cottages and apartments that we manage in this beautiful part of nature.
              <pre />
              We cover East and a few select cottages that sit on the borders, the best of both worlds.
              <pre />
              Many of our properties can add a dog/s to a reservation. Enquire if you need help
              <pre />
              You can book on our website or enquire by email or phone. With many years of experience in the business and a close relationship with the owners, we will be happy to answer any questions.
              <pre />
              <i>Looking forward to see you soon,
                <br />
                Ann&Tom</i>
            </Typography>
          </Container>
        </Grid>
        <Grid item sm={12} md={6}>
          <Container variant='xs' sx={{ maxWidth: '500px' }}>
            <img src="../images/owners.jpg" alt="Owners" style={{ maxWidth: '100%' }} />
          </Container>
        </Grid>
      </Grid>
    </PageWrapper>
  )
}

export default About