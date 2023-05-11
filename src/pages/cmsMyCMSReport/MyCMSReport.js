import React from 'react'
import { Autocomplete, Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PageTitle from '../../layouts/PageTitle';
import { Stack } from '@mui/system';
import MyDepartmentTable from '../cmsMyDeptReports/MyDepartmentTable';

const MyCMSReport = () => {
    const [value, setValue] = React.useState(null);
    const [view, setView] = React.useState(false);
    const handleShow = () => {
        setView(true);
    }

    const options = [
        { label: 'Andhra Pradesh', id: 1 },
        { label: 'United', id: 2 },
    ];
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
    const name='My CMS Report'
    return (
        <>
            <Card>
                <CardContent>
                    <PageTitle name={name}/>
                    <Grid container columnSpacing={1}>
                        <Grid item xs= {12} sm={4} md={4} lg={4}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                            label="CR raised From Date"
                            inputFormat="DD/MM/YYYY"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => (
                                <TextField
                                size="small"
                                sx={{ width: "100%" }}
                                fullWidth
                                {...params}
                                />
                            )}
                            />
                        </LocalizationProvider>
                        </Grid>
                        <Grid item xs= {12} sm={4} md={4} lg={4}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                            label="CR raised To Date"
                            inputFormat="DD/MM/YYYY"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => (
                                <TextField
                                size="small"
                                sx={{ width: "100%" }}
                                fullWidth
                                {...params}
                                />
                            )}
                            />
                        </LocalizationProvider>
                        </Grid>
                        <Grid item xs= {12} sm={4} md={4} lg={4}>
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

export default MyCMSReport