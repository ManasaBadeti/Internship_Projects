import React from 'react'
import {
    Box,
    CardContent,
    Grid,
    Autocomplete,
    TextField,
  } from "@mui/material";
import { H3, H4 } from "../../components/Typography";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import noImage from "../../assets/images/noImage.jpg";

const IpDetails = props => {
    const { isDisabled, data} = props;

    const [value, setValue] = React.useState(null);
    const options = [
      { label: "One", id: 1 },
      { label: "Two", id: 2 },
    ];
  return (
    <Box>
      <H3 lineHeight={2.2}>Patient Details</H3>
      <Grid
        container
        direction="row"
        rowSpacing={0}
        columnSpacing={2}
        justify="flex-end"
        alignItems="center"
      >
        <Grid item xs={12} sm={9} md={9} lg={9}>
          <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
          >
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Name"
                name="email"
                disabled={isDisabled}
                size="small"
                value={data?.name}
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Autocomplete
              
                disabled={isDisabled}
                onChange={(event, value) => console.log(value)}
                margin="normal"
                fullWidth
                size="small"
                id="combo-box-demo"
                options={options}
                sx={{ width: "100%", mt: 1 }}
                renderInput={(params) => (
                  <TextField {...params} label="Gender" 
                  sx={{
                    "& .MuiInputBase-input.Mui-disabled": {
                      backgroundColor: "#f0f0f0",
                    },
                  }}/>
                )}
                
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Autocomplete
                disabled={isDisabled}
                onChange={(event, value) => console.log(value)}
                margin="normal"
                fullWidth
                size="small"
                id="combo-box-demo"
                options={options}
                sx={{ width: "100%", mt: 1 }}
                renderInput={(params) => (
                  <TextField {...params} label="Martial Status" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  disabled={isDisabled}
                  label="Date of Birth"
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
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Age"
                name="email"
                disabled={isDisabled}
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Autocomplete
                disabled={isDisabled}
                onChange={(event, value) => console.log(value)}
                margin="normal"
                fullWidth
                size="small"
                id="combo-box-demo"
                options={options}
                sx={{ width: "100%", mt: 1 }}
                renderInput={(params) => (
                  <TextField {...params} label="Relationship" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Designation"
                disabled={isDisabled}
                autoComplete="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Contact Number"
                name="email"
                disabled={isDisabled}
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Autocomplete
                disabled={isDisabled}
                onChange={(event, value) => console.log(value)}
                margin="normal"
                fullWidth
                size="small"
                id="combo-box-demo"
                options={options}
                sx={{ width: "100%", mt: 1 }}
                renderInput={(params) => <TextField {...params} label="Slab" />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3} sx={{ mt: 1.5 }}>
          <img src={noImage} width="170px" />
        </Grid>
      </Grid>
      <Grid container direction="row" rowSpacing={0} columnSpacing={2}>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Card Number"
            name="email"
            disabled={isDisabled}
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Case Number"
            name="email"
            disabled={isDisabled}
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="IP Number"
            name="email"
            disabled={isDisabled}
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="IP Reg Date"
            name="email"
            disabled={isDisabled}
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Claim Number"
            name="email"
            disabled={isDisabled}
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
        <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="NWH Name"
            name="email"
            disabled={isDisabled}
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}>
        <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Case Status"
            name="email"
            disabled={isDisabled}
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}>
        <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Referred Patient Details"
            name="email"
            disabled={isDisabled}
            size="small"
          />
        </Grid>
      </Grid>

      <H4 lineHeight={3.2}>Card Address</H4>
      <Grid container direction="row" rowSpacing={0} columnSpacing={2}>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="House Number"
            name="email"
            disabled={isDisabled}
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Street"
            name="email"
            disabled={isDisabled}
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <Autocomplete
            disabled={isDisabled}
            onChange={(event, value) => console.log(value)}
            margin="normal"
            fullWidth
            size="small"
            id="combo-box-demo"
            options={options}
            sx={{ width: "100%", mt: 2 }}
            renderInput={(params) => <TextField {...params} label="State" />}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <Autocomplete
            disabled={isDisabled}
            onChange={(event, value) => console.log(value)}
            margin="normal"
            fullWidth
            size="small"
            id="combo-box-demo"
            options={options}
            sx={{ width: "100%", mt: 2 }}
            renderInput={(params) => <TextField {...params} label="District" />}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <Autocomplete
            disabled={isDisabled}
            onChange={(event, value) => console.log(value)}
            margin="normal"
            fullWidth
            size="small"
            id="combo-box-demo"
            options={options}
            sx={{ width: "100%", mt: 2 }}
            renderInput={(params) => (
              <TextField {...params} label="Mandal/Municipality" />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <Autocomplete
            disabled={isDisabled}
            onChange={(event, value) => console.log(value)}
            margin="normal"
            fullWidth
            size="small"
            id="combo-box-demo"
            options={options}
            sx={{ width: "100%", mt: 2 }}
            renderInput={(params) => <TextField {...params} label="Mandal" />}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <Autocomplete
            disabled={isDisabled}
            onChange={(event, value) => console.log(value)}
            margin="normal"
            fullWidth
            size="small"
            id="combo-box-demo"
            options={options}
            sx={{ width: "100%", mt: 2 }}
            renderInput={(params) => (
              <TextField {...params} label="City/Town/Village" />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Pincode"
            name="email"
            // inputComponent={TextMaskCustom}
            disabled={isDisabled}
            size="small"
          />
        </Grid>
      </Grid>

      <H4 lineHeight={3.2}>Communication Address</H4>
      <Grid container direction="row" rowSpacing={0} columnSpacing={2}>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="House Number"
            name="email"
            disabled={isDisabled}
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Street"
            name="email"
            disabled={isDisabled}
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <Autocomplete
            disabled={isDisabled}
            onChange={(event, value) => console.log(value)}
            margin="normal"
            fullWidth
            size="small"
            id="combo-box-demo"
            options={options}
            sx={{ width: "100%", mt: 2 }}
            renderInput={(params) => <TextField {...params} label="State" />}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <Autocomplete
            disabled={isDisabled}
            onChange={(event, value) => console.log(value)}
            margin="normal"
            fullWidth
            size="small"
            id="combo-box-demo"
            options={options}
            sx={{ width: "100%", mt: 2 }}
            renderInput={(params) => <TextField {...params} label="District" />}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <Autocomplete
            disabled={isDisabled}
            onChange={(event, value) => console.log(value)}
            margin="normal"
            fullWidth
            size="small"
            id="combo-box-demo"
            options={options}
            sx={{ width: "100%", mt: 2 }}
            renderInput={(params) => (
              <TextField {...params} label="Mandal/Municipality" />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <Autocomplete
            disabled={isDisabled}
            onChange={(event, value) => console.log(value)}
            margin="normal"
            fullWidth
            size="small"
            id="combo-box-demo"
            options={options}
            sx={{ width: "100%", mt: 2 }}
            renderInput={(params) => <TextField {...params} label="Mandal" />}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <Autocomplete
            disabled={isDisabled}
            onChange={(event, value) => console.log(value)}
            margin="normal"
            fullWidth
            size="small"
            id="combo-box-demo"
            options={options}
            sx={{ width: "100%", mt: 2 }}
            renderInput={(params) => (
              <TextField {...params} label="City/Town/Village" />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Pincode"
            name="email"
            disabled={isDisabled}
            size="small"
          />
        </Grid>
      </Grid>

      <H4 lineHeight={3.2}>Medical Details</H4>
      <Grid container direction="row" rowSpacing={0} columnSpacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Complaint Type"
            name="email"
            disabled={isDisabled}
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Patient Complaint"
            name="email"
            disabled={isDisabled}
            size="small"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default IpDetails