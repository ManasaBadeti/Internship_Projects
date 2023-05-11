import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import PageTitle from '../../layouts/PageTitle';
// import PageTitle from '../../layouts/PageTitle';
const options = [
  { label: 'One', id: 1 },
  { label: 'Two', id: 2 },
];
const parentorg=[
  {label:'Technical Issues',id:1},
  {label:'SAS/Portal Report Request',id:2},
  {label:'User Issues',id:3},
  {label:'Emergency Change Request',id:4},
  {label:'Production Support ServiceRequest',id:5},
  {label:'Complaint Logger',id:6},
]


const CMSReport = () => {

  // CR raised From Date, CR raised To Date, Application Type, Parent Organization, Department, WorkFlow Category, Section, CR ID, State
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
  const name='CMS Section Wise Report'
  return (
    <>
          
      <Card className="Searchcard" variant='outlined'>
        <CardContent>
      {/* <Typography variant="h4"  color="text.secondary" gutterBottom>
           CMS Section Wise Report
          </Typography> */}
          <PageTitle name={name}/>
          {/* <Typography sx={{ fontSize: 22,fontWeight:'bold' }} color="#414fe1" gutterBottom>
            CMS Section Wise Report
          </Typography> */}
          <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            
          >
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="CR raised From Date"
                  inputFormat="MM/DD/YYYY"
                  value={crfd}
                  onChange={(newValue) => {
                    setCrfd(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      sx={{ width: "100%"}}
                      fullWidth
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label=" CR raised To Date"
                  inputFormat="MM/DD/YYYY"
                  value={crtd}
                  onChange={(newValue) => {
                    setCrtd(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      sx={{ width: "100%"}}
                      fullWidth
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Autocomplete
                disablePortal
                value={ap}
                onChange={(event, newValue) => {
                  setAp(newValue);
                }}
                margin="normal"
                fullWidth
                size="small"
                id="combo-box-demo"
                options={options}
                sx={{ width: "100%"}}
                renderInput={(params) => (
                  <TextField  {...params} label="Application Type" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Autocomplete
                disablePortal
                value={po}
                onChange={(event, newValue) => {
                  setPo(newValue);
                }}
                margin="normal"
                fullWidth
                size="small"
                id="combo-box-demo"
                options={parentorg}
                sx={{ width: "100%"}}
                renderInput={(params) => (
                  <TextField {...params} label="Parent Organization" />
                )}
              />
            </Grid>
            </Grid>
            <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            
          >
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Autocomplete
                disablePortal
                value={dept}
                onChange={(event, newValue) => { setDept(newValue); }}
                margin="normal"
                fullWidth
                size="small"
                id="combo-box-demo"
                options={options}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label="Department" />
                )}
              />

            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Autocomplete
                disablePortal
                value={wfcat}
                onChange={(event, value) => { setWfcat(value); }}
                margin="normal"
                fullWidth
                size="small"
                id="combo-box-demo"
                options={options}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label="WorkFlow Category" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Autocomplete
                disablePortal
                value={section}
                onChange={(event, value) => {
                  setSection(value);
                }}
                margin="normal"
                fullWidth
                size="small"
                id="combo-box-demo"
                options={options}
                sx={{ width: "100%"}}
                renderInput={(params) => (
                  <TextField {...params} label="Section" />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="0"
                required
                fullWidth
                id="crid"
                label="CR Id"
                value={crid}
                onChange={(newValue) => setCrid(newValue.target.value)}
                autoComplete="email"
                size="small"
              />
            </Grid>
            </Grid>
            <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            
          >
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Autocomplete
                disablePortal
                value={astate}
                onChange={(event, value) => { setAstate(value) }}
                margin="normal"
                fullWidth
                size="small"
                id="combo-box-demo"
                options={options}
                sx={{ width: "100%"}}
                renderInput={(params) => (
                  <TextField {...params} label="Status" />
                )}
              />
            </Grid>
               <br></br>

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
            <Button 
            // sx={{ minWidth: 100, ml: 1, backgroundColor: '#3F51B5', ":hover": { backgroundColor: '#3F51B5', color: 'white', fontWeight: 'bold' } }} 
            variant="contained">
              <Link href="/cms/#/page2" 
              sx={{color: 'white' }}
              > 
              Generate Report</Link>
            </Button>
          </Stack>
    </>
  )
}

export default CMSReport
