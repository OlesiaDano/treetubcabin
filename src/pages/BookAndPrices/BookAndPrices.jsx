import React from 'react';
import { Typography, Grid, List, ListItem } from '@mui/material';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Booking from '../../components/Booking/Booking';
import { Colors } from '../../styles';

import termsOfService from '../../locales/termsOfService';

function BookAndPrices() {

  return (
    <PageWrapper>
      <Typography variant="h3" gutterBottom sx={{ marginTop: '30px', textAlign: 'center' }}>
        Check For a Free Spot
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: '20px', padding: '20px 40px', background: `${Colors.dark}`, color: `${Colors.dove_gray}` }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', }} >
          <Booking />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', }}>
          <Typography variant="h5" gutterBottom sx={{ marginTop: '30px', textTransform: 'uppercase' }}>
            Customer terms of service
          </Typography>
          <List>
            {termsOfService.map((term, index) => (
              <ListItem key={index}>{term}</ListItem>
            ))}
          </List>
        </Grid>
      </Grid>


    </PageWrapper>
  )
}

export default BookAndPrices