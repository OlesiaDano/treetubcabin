import React from 'react';
import { Typography, Grid } from '@mui/material';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Booking from '../../components/Booking/Booking';
import { Colors } from '../../styles';

function BookAndPrices() {



  return (
    <PageWrapper>
      <Typography variant="h2" gutterBottom sx={{ marginTop: '30px' }}>
        Check for free spot
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: '20px', padding: '20px 40px', background: `${Colors.dark}`, color: `${Colors.dove_gray}` }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', }} >
          <Booking />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', }}>
          <Typography variant="h5" gutterBottom sx={{ marginTop: '30px' }}>
            Booking details
          </Typography>
        </Grid>
      </Grid>


    </PageWrapper>
  )
}

export default BookAndPrices