import { Avatar, Button, Card, CardContent, FormLabel, Grid, LinearProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import { useHistory} from 'react-router-dom'
import PageTitle from '../layouts/PageTitle'

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);

  const fetchData = async() =>{
    const response = await fetch('http://10.48.158.197:8087/cmsapi/initiate-application')
    const data = await response.json()
    setProfile(data.result.profile[0])
  }
  useEffect(() => {
    fetchData();
  }, [])

  // const history = useHistory();
  const name = 'User Profile'
  // const goToLogin =() =>{
  //   window.location.href = '/cms';
  // }
  if(!profile){
    return (
      <Card>
        <CardContent>
          <Box sx={{width: '100%'}} textAlign={'center'} mt={3}>
            <LinearProgress />
          </Box>
        </CardContent>
      </Card>
    )
  }
  return (
    <>
      <Box>
        <PageTitle name= {name}/>
      </Box>
      <Grid container xs={12} sm={12} md={12} height='65vh' display='flex' justifyContent={'center'} fullWidth mt={2}>
        <Card sx={{minWidth:8*35}}>
          <CardContent>
            <Grid display={'flex'} justifyContent={'center'}>
              <Box border={2} borderColor='#e8e8e8' borderRadius='50%' padding={0.3}>
                <Avatar
                  alt=""
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 100, height: 100 }}
                >
                  {/* <Typography variant='body2'>NO PHOTO</Typography> */}
                  </Avatar>
              </Box>
            </Grid>
            {profile && (
              <>
                <Grid container xs={12} sm={12} md={12} display='flex' justifyContent={'center'} mt={2}>
                  <Grid item >
                    <Typography variant='h5' color={'#2169B2'}>{profile.empname}</Typography>
                  </Grid>
                </Grid>
                <Grid container xs={12} sm={12} md={12} display='flex' justifyContent={'center'} mt={0.5}>
                  <Grid item >
                    <Typography variant='body1'>{profile.desgn}</Typography>
                  </Grid>
                </Grid>

                <Grid container display={'flex'} justify="center" alignItems="center" marginTop={6} marginBottom={2}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    <Typography variant='body2' fontWeight={700}>
                        Username:
                    </Typography>
                  </FormLabel> 
                </Grid>
                <Grid item xs={12} sm={8} md={8} lg={8}  >
                  <Typography variant='body2'> {profile.username}</Typography>
                </Grid>
              </Grid>
              <Grid container
              display={'flex'}
              justify="center"
              alignItems="center"
              marginBottom={2}>

                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    <Typography variant='body2' fontWeight={700}>
                        Email ID:
                    </Typography>
                  </FormLabel>  
                </Grid>
                <Grid item xs={12} sm={8} md={8} lg={8}  >
                  <Typography variant='body2'>{profile.emailId}</Typography>
                </Grid>
              </Grid>
              <Grid container
              display={'flex'}
              justify="center"
              alignItems="center"
              marginBottom={2}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <FormLabel id="demo-row-radio-buttons-group-label"  >
                    <Typography variant='body2' fontWeight={700}>
                        Mobile No:
                    </Typography>
                  </FormLabel>                 
                </Grid>
                <Grid item xs={12} sm={8} md={8} lg={8}  >
                  <Typography variant='body2'>{profile.mobileNo}</Typography>
                </Grid>
              </Grid>
              </>
            )}
            

            <Grid container display={'flex'} justifyContent={'center'}>
              <Button component={Link} to='/' variant='contained' size='small' > LOGOUT</Button> 
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default ProfilePage
