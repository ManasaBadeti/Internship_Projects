import React from 'react';
import { Box, Typography, Stack} from "@mui/material";
import PageTitle from '../../../layouts/PageTitle';


const Title = () => {
  const name = 'Manage Requests'
  return (
    // <Box >
    //   <Stack p={2} >
    //     <Typography variant='body1' component='h1' sx={{textAlign:'left', justifyContent:'center', fontFamily:'Lato, sans-serif'}}  color='#808080'>My Approval</Typography>
    //   </Stack>
    // </Box>
    <PageTitle name={name}/>
  )
}

export default Title
