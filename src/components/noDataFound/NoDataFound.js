import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import noData from '../../assets/images/noData.svg'
import { H4 } from '../typography/Typography'

const NoDataFound = () => {
  return (
    <Grid textAlign='center' width="100%"> 
      <div height={'50vh'}>
          <img src={noData} alt='noData' style={{width:'100px', height:'100px'}}></img>
      </div>
      <H4>No data found. Please search again.</H4>
      {/* <Button size='large' mt={4} variant='contained' onClick={handleDataFound} sx={{marginTop:2}}>Okay</Button> */}
    </Grid>
  )
}

export default NoDataFound
