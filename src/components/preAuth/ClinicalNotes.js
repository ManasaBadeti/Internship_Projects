import React from 'react'
import {
    Box,
    CardContent,
    Grid,
    Autocomplete,
    TextField,
    Button
  } from "@mui/material";
import { H3, H4 } from "../../components/Typography";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const ClinicalNotes = props => {
    const { isDisabled, data} = props;
    const options = [
        { label: "One", id: 1 },
        { label: "Two", id: 2 },
      ];
      const [value, setValue] = React.useState(null);

    return (
      <>
        <Box>
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
                  label="Date"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField size="small" fullWidth {...params} />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
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
                  <TextField {...params} label="BP" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
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
                  <TextField {...params} label="Pulse Rate" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
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
                  <TextField {...params} label="Temperature" />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={3} md={3} lg={3}>
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
                  <TextField
                    {...params}
                    label="Ward Type"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
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
                  <TextField
                    {...params}
                    label="Respiratory Rate"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
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
                  <TextField {...params} label="Heart Sounds" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Lungs"
                name="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Fluid Input"
                name="email"
                size="small"
              />
            </Grid>

            <Grid item xs={12} sm={3} md={3} lg={3}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Fluid Output"
                name="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Doctor Name"
                name="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Daily Doctor Notes"
                name="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Abdomen"
                name="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Nervous System "
                name="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="SPO2"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
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
                  <TextField {...params} label="Specialists Referred" />
                )}
              />
            </Grid>
          </Grid>

          <H4 lineHeight={3}>Plasma/Blood Glucose</H4>
          <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
          >
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="BBF(7:00am)"
                name="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="BL(1:00pm)"
                name="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="BD(7:00pm)"
                name="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="MN"
                name="email"
                size="small"
              />
            </Grid>
          </Grid>

          <H4 lineHeight={3}>Insulin Dosage</H4>
          <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
          >
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="BBF(7:00am)"
                name="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="SR(1:00pm)"
                name="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="BD(7:00pm)"
                name="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="MN"
                name="email"
                size="small"
              />
            </Grid>
          </Grid>

          <H4 lineHeight={3}>Medication Chart</H4>
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
                onChange={(event, value) => console.log(value)}
                margin="normal"
                fullWidth
                size="small"
                id="combo-box-demo"
                options={options}
                sx={{ width: "100%", mt: 1 }}
                renderInput={(params) => (
                  <TextField {...params} label="Main Group Name" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Main Group Code"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
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
                  <TextField {...params} label="Therapeutic Main Group Name" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Therapeutic Main Group Code"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>

            <Grid item xs={12} sm={3} md={3} lg={3}>
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
                  <TextField
                    {...params}
                    label="Pharmacological SubGroup Name"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Pharmacological SubGroup Code"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
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
                  <TextField {...params} label="Chemical SubGroup Name" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Chemical SubGroup Code"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>

            <Grid item xs={12} sm={3} md={3} lg={3}>
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
                  <TextField {...params} label="Chemical Substance Name" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Chemical Substance Code"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
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
                  <TextField {...params} label="Route" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
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
                  <TextField {...params} label="Strength" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
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
                  <TextField {...params} label="Dosage(per day)" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Medication Period(Days)"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Button sx={{ minWidth: 100 }} fullWidth variant="outlined">
                Add Drugs
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box
        spacing={2}
        sx={{ flexGrow: 1, spacing: 2, m: 2, pb: 3, float: "right" }}
      >
        <Button
          sx={{ minWidth: 100, ml: 1 }}
          variant="contained"
          //   onClick={handleSearch}
          type="submit"
        >
          Submit
        </Button>
        <Button
          sx={{ minWidth: 100, ml: 1 }}
          //   onClick={handleReset}
          variant="outlined"
        >
          Cancel
        </Button>
      </Box>
      </>
    );
}

export default ClinicalNotes