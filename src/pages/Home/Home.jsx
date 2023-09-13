import React from 'react'
import { NavLink } from "../../components/Header/Header.style";
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
            <NavLink to="/Photos" sx={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h5" sx={{ fontSize: '1em' }}> Holiday Cottage Retreat</Typography>
              <BannerTitle>TreeTub Cabin</BannerTitle>
              <Typography variant="h6" > - Since 2023 -</Typography>
            </NavLink>
          </BannerContent>
        </Banner>
      </PageWrapper>
    </>
  )
}

export default Home