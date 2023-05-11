import React, { useEffect, useState } from 'react';
import { Box, Typography,Stack, Grid, TextField, MenuItem,Button, Card, CardContent} from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Autocomplete from '@mui/material/Autocomplete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Title from './Title';
import DisplayData from './DisplayData';

const Form = () => {
  const [view, setView] = useState(false);
  const [value, setValue] = useState(null);
  const [value1,setValue1]=useState(null);
  const [options, setOptions] = useState([]);
  const [dept, setDept] = useState(null);
  const [applicationType, setApplicationType] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch('http://10.48.158.197:8087/cmsapi/initiate-application');
      const data = await response.json();
      const deptOptions = data.result.Department.map((dept) => ({
        value: dept.valueName,
        id: dept.valueId,
      }));
      const applicationOptions = data.result["application type"].map((type) => ({
        value: type.valueName,
        id: type.valueId,
      }));
      setOptions({department: deptOptions, applicationType: applicationOptions})
    };
    fetchData();
  }, [])

  const onSubmit =(e)=>{
    e.preventDefault();
    alert('Submitted')
  }
  const handleShow =() =>{
    setView(true);
  }
  return (
    <>
      
      <Card>
        <CardContent>
          <Title />
          <Grid container columnSpacing={1} direction='row' justify="flex-end" alignItems="center">
            <Grid xs={12} sm={4} item>
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
            <Grid xs={12} sm={4}  item>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label=" CR raised To Date"
                  inputFormat="DD/MM/YYYY"
                  value={value1}
                  onChange={(newValue1) => {
                    setValue1(newValue1);
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
            <Grid xs={12} sm={4} item>
            <Autocomplete
                disablePortal
                onChange={(event, value) => setApplicationType(value)}
                margin="normal"
                fullWidth
                size="small"
                id="application-type-combo-box-demo"
                options={options.applicationType}
                value={applicationType}
                getOptionLabel={(option) => option.value}
                sx={{ width: "100%"}}
                renderInput={(params) => (
                  <TextField {...params} label="Application Type" />
                )}
              />
            </Grid>
            <Grid xs={12} sm={4} item>
            <Autocomplete
                disablePortal
                onChange={(event, value) => setDept(value)}
                margin="normal"
                fullWidth
                size="small"
                id="combo-box-demo"
                options={options.department}
                value = {dept}
                getOptionLabel = {(option) => option.value}
                sx={{ width: "100%"}}
                renderInput={(params) => (
                  <TextField {...params} label="Department" />
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
        <Button variant='contained' size='large' onClick={handleShow}>
          <SearchOutlinedIcon color='text.primary'/>
        </Button>
      </Stack>
      {view ? <DisplayData /> : ''}
    </>
  )
}

export default Form
