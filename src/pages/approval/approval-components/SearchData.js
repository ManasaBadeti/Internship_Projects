import { Typography, Stack, Box, Grid, TextField, MenuItem,Card, CardContent, Button } from '@mui/material'
import { borderColor } from '@mui/system'
import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import PageTitle from '../../../layouts/PageTitle';




const SearchData = () => {
    const [value, setValue] = useState("")
    const [text, setText] = useState("");
    console.log(value)
    const handleChange=(e)=>{
        setValue(e.target.value)
    }

    const handleText=(e)=>{
        setText(e.target.value);
    }

    const name= 'Click here to export all required data'
  return (
    <>
        {/* <Typography mb={2} variant='body1' component='h1' sx={{textAlign:'left', justifyContent:'center', fontFamily:'Lato, sans-serif'}} color='#808080' mt={2}>Click here to export all required data</Typography>  */}
        
        <Card >
            <CardContent sx={{width:'100%'}} px={3}>
        <PageTitle name={name}/>
                <Grid container columnSpacing={1}>
                    <Grid item xs={12} sm={12}  display='flex' justifyContent='space-between'>
                        <Typography  alignItems='center' variant='body2'>Advance Search :</Typography>
                        {/* <Grid item >
                            <Typography >&nbsp;&nbsp; : &nbsp;</Typography>
                        </Grid> */}
                        <Grid item xs={12} sm={3} width="200px">
                            <TextField size='small' fullWidth textAlign="center" label='CR-ID' select value={value} onChange={handleChange} fontSize="100px">
                                <MenuItem value="One">One</MenuItem>
                                <MenuItem value="Two">Two</MenuItem>
                                <MenuItem value="Three">Three</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={3} width="200px" >
                            <TextField size='small' fullWidth  label='SELECT' select value={value} onChange={handleChange} >
                                <MenuItem value="One">One</MenuItem>
                                <MenuItem value="Two">Two</MenuItem>
                                <MenuItem value="Three">Three</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={3}  >
                            <TextField size='small'  value={text} onChange={handleText} >
                            </TextField>
                        </Grid>
                        <Box item xs={12} sm={4}>
                            <Link to="/dataTable">
                                <Button variant='contained'>
                                    <SearchOutlinedIcon color='text.primary'/>
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </>
  )
}

export default SearchData
