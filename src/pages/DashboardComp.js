import React from 'react'
import { styled } from '@mui/material/styles';
import { Typography, Card,CardContent, Grid, Autocomplete,TextField, Box, Avatar, Divider } from '@mui/material'
import Person2Icon from '@mui/icons-material/Person2';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import { BsFillTelephoneFill } from "react-icons/bs";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import CancelIcon from '@mui/icons-material/Cancel';
// import PendingActionsRoundedIcon from '@mui/icons-material/PendingActionsRounded';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import OfflinePinRoundedIcon from '@mui/icons-material/OfflinePinRounded';
import PageTitle from '../layouts/PageTitle';
import { Stack } from '@mui/system';
import { Tiny } from '../components/typography/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
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

  

const DashboardComp = () => {
//   const name = "Welcome Shivkumar Prasad"
  const [dense, setDense] = React.useState(true);
  const [secondary, setSecondary] = React.useState(false);
  const StyledListItemIcon = styled(ListItemIcon)({
    marginRight: 0,

  })
  const StyledListText = styled(ListItemText)({
    // marginLeft: 0,
    marginRight: 0,
  })
  return (
    <>
    {/* 79B5F2 */}
      {/* <PageTitle name={name}/> */}
      <Grid item my={1}>
        <Typography variant='h2'>Welcome Shivkumar Prasad</Typography>
      </Grid>
      
        <Grid container rowSpacing={2} columnSpacing={2} direction='row' justify="flex-end" alignItems="center">
            <Grid xs={12} sm={3} item>
            <Card sx={{borderLeft: '5px solid #79B5F2'}}>
                <CardContent>
                <Box display='flex' justifyContent='space-between'>
                    <Typography variant='h5' marginTop={'5px'}>
                        Direct Patients
                        {/* <br></br>
                        <Tiny sx={{ fontFamily:'Lato, sans-serif' }} color='#FDDF75'>Last 10 days</Tiny> */}
                    </Typography>
                    <CancelIcon style={{color:"#79B5F2", fontSize:'50px'}}/>
                </Box>
                <Grid display={'flex'} alignItems='center'>
                <Typography variant='h3' sx={{ fontFamily:'Lato, sans-serif', color:"#79B5F2" }}>
                    150 
                </Typography>
                <Typography fontSize={'15px'} fontFamily='serif' mt={1}>(TODAY)</Typography>
                </Grid>
                </CardContent>
            </Card>
            </Grid>
            <Grid xs={12} sm={3} item>
            <Card sx={{borderLeft: '5px solid #FDDF75'}}>
                <CardContent>
                <Box display='flex' justifyContent='space-between'>
                    <Typography variant='h5' marginTop={'5px'}>
                        Telephonic Registrations
                        {/* <br></br>
                        <Tiny sx={{ fontFamily:'Lato, sans-serif' }} color='#FDDF75'>Last 10 days</Tiny> */}
                    </Typography>
                    <CancelIcon style={{color:"#FDDF75", fontSize:'50px'}}/>
                </Box>
                <Grid display={'flex'} alignItems='center'>
                <Typography variant='h3' sx={{ fontFamily:'Lato, sans-serif', color:"#FDDF75" }}>
                    50 
                </Typography>
                <Typography fontSize={'15px'} fontFamily='serif' mt={1}>(TODAY)</Typography>
                </Grid>
                </CardContent>
            </Card>
            </Grid>
            <Grid xs={12} sm={3} item>
            <Card sx={{borderLeft: '5px solid #97D36C'}}>
                <CardContent>
                <Box display='flex' justifyContent='space-between'>
                <Typography variant='h5' marginTop={'5px'}>
                    Claim Approved
                    {/* <br></br>
                    <Tiny sx={{ fontFamily:'Lato, sans-serif' }} color='#97D36C'>Last 10 days</Tiny> */}
                    </Typography>
                    <CheckCircleIcon style={{color:"#97D36C", fontSize:'50px'}}/>
                </Box>
                <Grid display={'flex'} alignItems='center'>
                <Typography variant='h3' sx={{ fontFamily:'Lato, sans-serif', color:"#97D36C" }}>
                    20 
                </Typography>
                <Typography fontSize={'15px'} fontFamily='serif' mt={1}>(TODAY)</Typography>
                </Grid>
                </CardContent>
            </Card>
            </Grid>
            <Grid xs={12} sm={3} item>
            <Card sx={{borderLeft: '5px solid #EE5555'}}>
                <CardContent>
                <Box display='flex' justifyContent='space-between'>
                    <Typography variant='h5' marginTop={'5px'}>
                    Claims Cancelled
                    {/* <br></br>
                    <Tiny sx={{ fontFamily:'Lato, sans-serif' }} color='#EE5555'>Last 10 days</Tiny> */}
                    </Typography>
                    <CancelIcon style={{color:"#EE5555", fontSize:'50px'}}/>
                </Box>
                <Grid display={'flex'} alignItems='center'>
                <Typography variant='h3' sx={{ fontFamily:'Lato, sans-serif', color:"#EE5555" }}>
                    20 
                </Typography>
                <Typography fontSize={'15px'} fontFamily='serif' mt={1}>(TODAY)</Typography>
                </Grid>
                </CardContent>
            </Card>
            </Grid>
        </Grid>
        
        <Grid container>
            <Grid item height='48vh' xs={12} sm={3.5} md={3.5} lg={3.5}>
            <Box mt={2} >
                <Typography variant='h2'>USER DETAILS</Typography>
                {/*root bgColor = 2169B2 */}
                    <Card sx={{height: '48vh', backgroundColor:'#2169b3'}} > 
                        <CardContent >
                            <Grid container>
                                <Grid item display={'flex'} justifyContent={'space-between'}  alignItems={'center'} >
                                <Box border={2} borderColor='#e8e8e8' borderRadius='50%' padding={0.3}>
                                <Avatar
                                alt=""
                                src="/static/images/avatar/1.jpg"
                                sx={{ width: 50, height: 50 }}
                                >
                                </Avatar>
                                </Box>
                                <Grid item ml={5}>
                                    <Typography my={1} color={'white'}>Username: ShivKumar</Typography>
                                    <Typography my={1} color={'white'}>Designation: Admin</Typography>
                                </Grid>
                                </Grid>
                            </Grid>
                            {/* <Typography width={'100%'} borderBottom ='solid 1px white' mt={2}></Typography> */}
                            <Grid item  mt={2}>
                                <Divider  sx={{backgroundColor:'white', height:1, minWidth: '100%'}} variant='fullWidth'/>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                    <List dense={dense}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <AddIcon sx={{color:'white'}}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary ={
                                                    <Typography sx={{color:'white', fontSize:'11px'}} >CONTACT INFORMATION</Typography>
                                                }
                                                // secondary="CONTACT INFORMATION" 
                                                // value1="Sobadadh"
                                                // secondary={secondary ? 'Secondary text' : null}
                                            />
                                        </ListItem>,
                                        <ListItem>
                                            <ListItemIcon>
                                                <StyledListItemIcon>
                                                <AddIcon sx={{color:'white'}}/>
                                                </StyledListItemIcon> 
                                            </ListItemIcon>
                                            <StyledListText>
                                            <ListItemText
                                            // inset={true}
                                            
                                            primary ={
                                                <Typography sx={{color:'white', fontSize:'11px'}} >HEALTH CARD ENROLLED REPORTS</Typography>
                                            } 
                                                // primary 
                                                // value1="Sobadadh"
                                                // secondary={secondary ? 'Secondary text' : null}
                                            />
                                            </StyledListText>
                                            
                                        </ListItem>    
                                    </List>
                            </Grid>
                        </CardContent>
                    </Card>

            </Box>
            </Grid>
        </Grid>
    </>
  )
}

export default DashboardComp;
