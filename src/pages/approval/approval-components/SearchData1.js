import { Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import PageTitle from '../../../layouts/PageTitle'
import { Typography, Stack, Box, TextField, MenuItem ,Button } from '@mui/material'
import { borderColor } from '@mui/system'
// import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
// import PageTitle from '../../../layouts/PageTitle';
import Autocomplete from '@mui/material/Autocomplete';


const options = [
    { label: 'One', id: 1 },
    { label: 'Two', id: 2 },
  ];
const SearchData1 = () => {

    const name= 'Click here to export all required data'
    const onSubmit =(e)=>{
        e.preventDefault();
        alert('Submitted')
      }
  return (
    
    <div>
      <Card>
        <CardContent>
        <PageTitle name={name}/>
            <Typography variant='h5'>Advance Search:</Typography>
        
        <Grid container columnSpacing={1} direction='row' justify="flex-end" alignItems="center">
            <Grid xs={12} sm={4} item>
            <Autocomplete
                disablePortal
                onChange={(event, value) => console.log(value)}
                margin="normal"
                fullWidth
                size="small"
                id="combo-box-demo"
                options={options}
                sx={{ width: "100%"}}
                renderInput={(params) => (
                  <TextField {...params} label="Application Type" />
                )}
              />
            </Grid>
            <Grid xs={12} sm={4} item>
            <Autocomplete
                disablePortal
                onChange={(event, value) => console.log(value)}
                margin="normal"
                fullWidth
                size="small"
                id="combo-box-demo"
                options={options}
                sx={{ width: "100%"}}
                renderInput={(params) => (
                  <TextField {...params} label="Application Type" />
                )}
              />
            </Grid>
            <Grid xs={12} sm={4} item>
            <Autocomplete
                disablePortal
                onChange={(event, value) => console.log(value)}
                margin="normal"
                fullWidth
                size="small"
                id="combo-box-demo"
                options={options}
                sx={{ width: "100%"}}
                renderInput={(params) => (
                  <TextField {...params} label="Application Type" />
                )}
              />
            </Grid>
        </Grid>
        
        </CardContent>
      </Card>
      <Stack direction="row"
            justifyContent="right"
            alignItems="center"
            spacing={1}>
            <Button  variant="contained"
              onClick={onSubmit}> <SearchOutlinedIcon color='text.primary'/>
            </Button>
          </Stack>
    </div>
  )
}

export default SearchData1
