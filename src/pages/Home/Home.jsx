import React from 'react'
import { Typography } from '@mui/material'
import { Banner } from './Home.style'
import { BannerContent } from './Home.style'
import { BannerTitle } from './Home.style'
import PageWrapper from '../../components/PageWrapper/PageWrapper'

function Home() {
  return (
    <>
      <PageWrapper>
      <Banner>
        <BannerContent>
          <Typography variant="h5" sx={{ fontSize: '1em' }}> Holiday Cottage Retreat</Typography>
          <BannerTitle>TreeTub Cabin</BannerTitle>
          <Typography variant="h6" > - Since 2023 -</Typography>
        </BannerContent>
      </Banner>
      </PageWrapper>
    </>
  )
}

export default Home