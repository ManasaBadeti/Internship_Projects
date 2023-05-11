import React from 'react'
import { Autocomplete, Button, FormLabel, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import PageTitle from '../../layouts/PageTitle';
import { Stack } from '@mui/system';
import Link from '@mui/material/Link';
import MyDepartmentTable from './MyDepartmentTable';
const MyDepartmentReport = () => {

    const [view, setView] = React.useState(false);
    const handleShow = () => {
        setView(true);
    }



  const [crfd, setCrfd] = React.useState(null);
  const [crtd, setCrtd] = React.useState(null);
  const [ap, setAp] = React.useState('');
  const [po, setPo] = React.useState('');
  const [dept, setDept] = React.useState('');
  const [wfcat, setWfcat] = React.useState('');
  const [section, setSection] = React.useState('');
  const [crid, setCrid] = React.useState('');
  const [astate, setAstate] = React.useState('');
  const resetForm = () => {
    setCrfd(null)
    setCrtd(null)
    setAp('')
    setPo("")
    setDept("")
    setWfcat("")
    setSection("")
    setCrid("")
    setAstate("")
  }
    const options = [
        { label: 'Andhra Pradesh', id: 1 },
        { label: 'United', id: 2 },
      ];
    const name='My Department Report'
    return (
        <>
            <Card>
                <CardContent>
                    <PageTitle name={name}/>

                    <Grid container mb={4}>
                        <Grid item xs={6} sm={2} md={2} lg={2}>
                            <FormLabel id="demo-row-radio-buttons-group-label" >
                                <b>
                                    Emp Code:
                                </b>
                            </FormLabel>
                        
                        </Grid>
                        
                        <Grid item xs={6}  sm={2} md={2} lg={2}  >
                            <Typography sx={{textAlign:'left'}}>  AP_C277_CD264</Typography>
                        </Grid>
                        <Grid item xs={6}  sm={2} md={2} lg={2}>
                            <FormLabel id="demo-row-radio-buttons-group-label">
                                <b>
                                    Emp Name:
                                </b>
                            </FormLabel>
                        
                        </Grid>
                        
                        <Grid item xs={6}  sm={2} md={2} lg={2}  >
                            <Typography>  S VAMSI KRISNA</Typography>
                        </Grid>

                        <Grid item xs={6} sm={2} md={2} lg={2}>
                            <FormLabel id="demo-row-radio-buttons-group-label" >
                                <b>
                                    Designation:
                                </b>
                            </FormLabel>
                        
                        </Grid>
                        
                        <Grid item xs={6} sm={2} md={2} lg={2}  >
                            <Typography sx={{textAlign:'left'}}>  Assistant Manager</Typography>
                        </Grid>
                    </Grid>

                    <Grid container columnSpacing={4}>
                        
                        
                        <Grid item xs={12} sm={6} md={6} lg={6}     >
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
                            <TextField {...params} label="Department" />
                            )}
                        />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} lg={6}  >
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
                            <TextField {...params} label="State" />
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
            
                <Button onClick={() => resetForm()} 
                // sx={{ minWidth: 100, color: '#3F51B5', border: '1px solid #3F51B5', fontWeight: 'bold' }}
                variant="outlined">
                Reset
                </Button>
                <Button onClick ={handleShow}
                variant="contained">
                    Generate Report
                </Button>
            </Stack>

            {view ? <MyDepartmentTable /> : 
            (
                <Alert  severity="warning" sx={{mt:4}}>
                    Please Select Search Criteria to get the result
                </Alert>
            )}
        </>
        
    )
}

export default MyDepartmentReport