import React from 'react'
import { Autocomplete, Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import CardContent from '@mui/material/CardContent';
import PageTitle from '../../layouts/PageTitle';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Stack } from '@mui/system';
// import StatsTable from '../cmsWorkStats/StatsTable';
import ReportTable from './ReportTable';

const StatsReport = () => {
    const [value, setValue] = React.useState(null);
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
    const [view, setView] = React.useState(false);
    const handleShow = () => {
        setView(true);
    }

    const module= [
        {label: 'Module1', id:1},
    ];
    const state = [
        { label: 'Andhra Pradesh', id: 1 },
        { label: 'United', id: 2 },
    ];
    const applications = [
        { label: 'DR YSR Aarogyasri Portal', id: 1 },
    ];
    const organization = [
        { label: 'DR YSR Aarogyasri Health Care Trust', id: 1 },
    ];
    const crRaisedDept = [
        { label: '104', id: 1 },
        { label: 'Accounts (AAROGYASRI TRUST)', id: 2 },
        { label: 'Accounts-AS-II (AAROGYASRI TRUST)', id: 3 },
        { label: 'Administration', id: 4 },
        { label: 'Administration-AS-II (AAROGYASRI TRUST)', id: 5 },
        { label: 'CEO Office', id: 6 },
        { label: 'claims_as-II (AAROGYASRI TRUST)', id: 7 },
        { label: 'CMCO (AAROGYASRI TRUST)', id: 8 },
        { label: 'Customer Care (AAROGYASRI TRUST)', id: 9 },
        { label: 'Field Operations', id: 10 },
    ];
    const workflowOptions = [  
        { label: "Technical Issues", id: "1" },
        { label: "Normal Change Request", id: "2" },
        { label: "Production Support Service Request", id: "3" },
      ];
    const name = 'CMS Statistics Report'
    return (
        <>
            <Card>
                <CardContent>
                    <PageTitle name={name} />
                    <Grid container columnSpacing={1}>
                        <Grid item xs= {12} sm={4} md={4} lg={4}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                label="CR Raised From Date"
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
                                    required
                                    />
                                )}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs= {12} sm={4} md={4} lg={4}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                label="CR Raised To Date"
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
                                    required
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
                                options={applications}
                                sx={{ width: "100%"}}
                                renderInput={(params) => (
                                <TextField {...params} label="Application" />
                                )}
                                />
                        </Grid>
                    </Grid>
                    <Grid container columnSpacing={1}>
                        <Grid item xs= {12} sm={4} md={4} lg={4}>
                            <Autocomplete
                                disablePortal
                                onChange={(event, value) => console.log(value)}
                                margin="normal"
                                fullWidth
                                size="small"
                                id="combo-box-demo"
                                options={organization}
                                sx={{ width: "100%"}}
                                renderInput={(params) => (
                                <TextField {...params} label="Parent Organization" />
                                )}
                                />
                        </Grid>
                        <Grid item xs= {12} sm={4} md={4} lg={4}>
                            <Autocomplete
                                disablePortal
                                onChange={(event, value) => console.log(value)}
                                margin="normal"
                                fullWidth
                                size="small"
                                id="combo-box-demo"
                                options={crRaisedDept}
                                sx={{ width: "100%"}}
                                renderInput={(params) => (
                                <TextField {...params} label="Department" />
                                )}
                                />
                        </Grid>
                        <Grid item xs= {12} sm={4} md={4} lg={4}>
                            <Autocomplete
                                disablePortal
                                onChange={(event, value) => console.log(value)}
                                margin="normal"
                                fullWidth
                                size="small"
                                id="combo-box-demo"
                                options={workflowOptions}
                                sx={{ width: "100%"}}
                                renderInput={(params) => (
                                <TextField {...params} label="Workflow Category" />
                                )}
                                />
                        </Grid>
                    </Grid>
                    <Grid container columnSpacing={1}>
                    <Grid item xs= {12} sm={4} md={4} lg={4}>
                            <Autocomplete
                                disablePortal
                                onChange={(event, value) => console.log(value)}
                                margin="normal"
                                fullWidth
                                size="small"
                                id="combo-box-demo"
                                options={module}
                                sx={{ width: "100%"}}
                                renderInput={(params) => (
                                <TextField {...params} label="Module" />
                                )}
                                />
                        </Grid>
                        <Grid item xs= {12} sm={4} md={4} lg={4}>
                            <Autocomplete
                                disablePortal
                                onChange={(event, value) => console.log(value)}
                                margin="normal"
                                fullWidth
                                size="small"
                                id="combo-box-demo"
                                options={state}
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
                    variant="outlined">
                    Reset
                </Button>
                <Button onClick ={handleShow}
                    variant="contained">
                    Generate Report
                </Button>
            </Stack>
            {view ? <ReportTable /> : 
                (
                <Alert  severity="warning" sx={{mt:4}}>
                    Please Select Search Criteria to get the result
                </Alert>
            )}
        </>
        
    )
}

export default StatsReport