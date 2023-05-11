import React from 'react'
import { Typography, Card,CardContent, Grid, Autocomplete,TextField, Box } from '@mui/material'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import RecommendRoundedIcon from '@mui/icons-material/RecommendRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
// import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
// import PendingActionsRoundedIcon from '@mui/icons-material/PendingActionsRounded';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import OfflinePinRoundedIcon from '@mui/icons-material/OfflinePinRounded';
import PageTitle from '../layouts/PageTitle';
import { Stack } from '@mui/system';
import { Tiny } from '../components/typography/Typography';
// import Footer from './footer/Footer';
// import StickyFooter from '../layouts/Footer';
// const cardNums= [
//     {num1:2241},
//     {num2: 2222},
//     {num3: 251},
//     {num4: 600},
//     {num5: 1200},
//     {num6: 400},
// ]

const DashboardCards = () => {
  const name = "CMS Dashboard"
  return (
    <>
      <PageTitle name={name}/>
      <Box>
        <Stack>
            <Grid container rowSpacing={2} columnSpacing={2} direction='row' justify="flex-end" alignItems="center">
              <Grid xs={12} sm={4} item >
                <Card  >
                  <CardContent>
                    <Box display='flex' justifyContent='space-between'>
                      <Typography sx={{ fontFamily:'Lato, sans-serif' }} color='#808080' >
                        Total No. of CRs
                      <br></br>
                      <Tiny sx={{ fontFamily:'Lato, sans-serif' }} color='#79B5F2'>Last 10 days</Tiny>
                      </Typography>
                      <CheckCircleRoundedIcon style={{color:"#79B5F2", fontSize:'50px'}}/>
                    </Box>
                    <Box mt={2}>
                      <Typography variant='h3' sx={{ fontFamily:'Lato, sans-serif' }}>
                        100
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} sm={4} item>
                <Card >
                  <CardContent>
                    <Box display='flex' justifyContent='space-between'>
                      <Typography sx={{  fontFamily:'Lato, sans-serif' }} color='#808080' >
                          Approved CRs
                          <br></br>
                          <Tiny sx={{ fontFamily:'Lato, sans-serif' }} color='#73cf32'>Last 10 days</Tiny>
                      </Typography>
                      <RecommendRoundedIcon style={{color:"#97D36C", fontSize:'50px'}}/>
                    </Box>
                    <Typography variant='h3' mt={2} sx={{ fontFamily:'Lato, sans-serif' }}>
                     50
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} sm={4} item>
                <Card >
                  <CardContent>
                    <Box display='flex' justifyContent='space-between'>
                    <Typography sx={{ fontFamily:'Lato, sans-serif' }} color='#808080' >
                        Rejected CRs
                        <br></br>
                        <Tiny sx={{ fontFamily:'Lato, sans-serif' }} color='#EE5555'>Last 10 days</Tiny>
                      </Typography>
                      <CancelRoundedIcon style={{color:"#EE5555", fontSize:'50px'}}/>
                    </Box>
                    <Typography variant='h3' mt={2} sx={{ fontFamily:'Lato, sans-serif' }}>
                      20
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} sm={4} item>
                <Card >
                  <CardContent>
                    <Box display='flex' justifyContent='space-between'>
                      <Typography sx={{ fontFamily:'Lato, sans-serif' }} color='#808080'>
                        In Progress CRs
                        <br></br>
                        <Tiny sx={{ fontFamily:'Lato, sans-serif' }} color='#e0b928'>Last 10 days</Tiny>
                      </Typography>
                      <AccessTimeFilledIcon style={{color:"#FDDF75", fontSize:'50px'}}/>
                    </Box>
                    <Typography variant='h3' mt={2} sx={{ fontFamily:'Lato, sans-serif' }}>
                      20
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} sm={4} item>
                <Card >
                  <CardContent>
                    <Box display='flex' justifyContent='space-between'>
                    <Typography sx={{fontFamily:'Lato, sans-serif' }} color='#808080'>
                        Pending CRs
                        <br></br>
                        <Tiny sx={{ fontFamily:'Lato, sans-serif' }} color='#b55bfc'>Last 10 days</Tiny>
                      </Typography>
                      <ChangeCircleIcon style={{color:"#D8A7FF", fontSize:'50px'}}/>
                    </Box>
                    <Typography variant='h3' mt={2} sx={{ fontFamily:'Lato, sans-serif' }}>
                      5
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} sm={4} item>
                <Card >
                  <CardContent>
                    <Box display='flex' justifyContent='space-between'>
                      <Typography sx={{ fontFamily:'Lato, sans-serif' }} color='#808080' >
                        Closed CRs
                        <br></br>
                        <Tiny sx={{ fontFamily:'Lato, sans-serif' }} color='#CCCCCC'>Last 10 days</Tiny>
                      </Typography>
                      <OfflinePinRoundedIcon style={{color:"#CCCCCC", fontSize:'50px'}}/>
                    </Box>
                    <Typography variant='h3' mt={2} sx={{ fontFamily:'Lato, sans-serif' }}>
                      5
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              {/* <Footer/> */}
            </Grid>
        </Stack>
      </Box>
    </>
  )
}

export default DashboardCards;
