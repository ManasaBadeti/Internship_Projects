import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Grid,
  Box,
  Autocomplete
} from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const SearchParams = props => {
  const { title, isPatientId, isCaseId, isTelephonicId, handleResult } = props

  const options = [
  { label: 'One', id: 1 },
  { label: 'Two', id: 2 },
  ];
  
  const [startDt, setStartDt] = React.useState(null);
  const [endDt, setEndDt] = React.useState(null);
  const handleReset = (event) => {
  }

  const handleSearch = () => {
    handleResult({startDt:startDt, endDt: endDt});
  }

  return (
    <Card >
      {title && <Typography sx={{ p: 2, fontSize: 18, fontWeight: 500 }}>
        {title}
      </Typography>}
      <CardContent>
        <Grid
          container
          direction="row"
          rowSpacing={0}
          columnSpacing={2}
          justify="flex-end"
          alignItems="center"
        >
          {isCaseId && <Grid item xs={12} sm={4} md={4} lg={4}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="caseId"
              label="Case Id"
              name="caseId"
              size="small"
            />
          </Grid>}
          {isTelephonicId && <Grid item xs={12} sm={4} md={4} lg={4}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="telephonicId"
              label="Telephonic Id"
              name="telephonicId"
              size="small"
            />
          </Grid>}
          {isPatientId && <Grid item xs={12} sm={4} md={3} lg={3}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Patient Number"
              name="email"
              autoComplete="email"
              size="small"
              autoFocus
            />
          </Grid>}
          {isPatientId && <Grid item xs={12} sm={4} md={3} lg={3}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Patient Name"
              name="email"
              autoComplete="email"
              size="small"
            />
          </Grid>}
          {isPatientId && <Grid item xs={12} sm={4} md={3} lg={3}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Health Card Number"
              name="email"
              autoComplete="email"
              size="small"
            />
          </Grid>}
          {isPatientId && <Grid item xs={12} sm={4} md={3} lg={3}>
            <Autocomplete
              disablePortal
              onChange={(event, value) => console.log(value)}
              margin="normal"
              fullWidth
              size="small"
              id="combo-box-demo"
              options={options}
              sx={{ width: "100%", mt: 1 }}
              renderInput={(params) => <TextField {...params} label="State" />}
            />
          </Grid>}
          {isPatientId && <Grid item xs={12} sm={4} md={3} lg={3}>
            <Autocomplete
              disablePortal
              onChange={(event, value) => console.log(value)}
              margin="normal"
              fullWidth
              size="small"
              id="combo-box-demo"
              options={options}
              sx={{ width: "100%", mt: 1 }}
              renderInput={(params) => (
                <TextField {...params} label="District" />
              )}
            />
          </Grid>}
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="From Date"
                inputFormat="MM/DD/YYYY"
                value={startDt}
                onChange={(newValue) => {
                  setStartDt(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    size="small"
                    sx={{ width: "100%", mt: 1 }}
                    fullWidth
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="To Date"
                inputFormat="MM/DD/YYYY"
                value={endDt}
                onChange={(newValue) => {
                  setEndDt(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    size="small"
                    sx={{ width: "100%", mt: 1 }}
                    fullWidth
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </CardContent>
      <Box
        spacing={2}
        sx={{ flexGrow: 1, spacing: 2, m: 2, pb: 3, float: "right" }}
      >
        <Button
          sx={{ minWidth: 100, ml: 1 }}
          variant="contained"
          onClick={handleSearch}
          type="submit"
        >
          Search
        </Button>
        <Button
          sx={{ minWidth: 100, ml: 1 }}
          onClick={handleReset}
          variant="outlined"
        >
          Reset
        </Button>
      </Box>
    </Card>
  );
};

export default SearchParams;
