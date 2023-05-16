import React from "react";
import { Grid, Autocomplete, TextField, Box, Button, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const PreAuth = (props) => {
  const { isDisabled, data } = props;
  const options = [
    { label: "One", id: 1 },
    { label: "Two  ", id: 2 },
  ];
  const admTypes = [
    { label: "Planned", id: 1 },
    { label: "Emergency  ", id: 2 },
  ];
  const yesno = [
    { label: "Yes", id: 1 },
    { label: "No", id: 2 },
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Name"
              name="email"
              size="small"
              disabled={true}
              sx={{
                "& .MuiInputBase-input.Mui-disabled": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={9} md={9} lg={9}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Address"
              name="email"
              size="small"
              disabled={true}
              sx={{
                "& .MuiInputBase-input.Mui-disabled": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Diagnosis Type"
              name="email"
              disabled={true}
              size="small"
              sx={{
                "& .MuiInputBase-input.Mui-disabled": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Main Category Name"
              name="email"
              disabled={true}
              size="small"
              sx={{
                "& .MuiInputBase-input.Mui-disabled": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Category Name"
              name="email"
              disabled={true}
              size="small"
              sx={{
                "& .MuiInputBase-input.Mui-disabled": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Sub Category Name"
              name="email"
              disabled={true}
              size="small"
              sx={{
                "& .MuiInputBase-input.Mui-disabled": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Disease Name"
              name="email"
              disabled={true}
              size="small"
              sx={{
                "& .MuiInputBase-input.Mui-disabled": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Disease Anatomical Name"
              name="email"
              disabled={true}
              size="small"
              sx={{
                "& .MuiInputBase-input.Mui-disabled": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
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
              options={admTypes}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField {...params} label="Admission Type " />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Admission Date"
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
              options={yesno}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField {...params} label="Procedure Consent" />
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
              options={yesno}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Medical or cardiology clearance "
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
              options={yesno}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField {...params} label="Blood transfusion " />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={9} md={9} lg={9}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Total Package Amount Admissible under the scheme Rs."
              name="email"
              size="small"
            />
          </Grid>
        </Grid>
      </Box>

      <Typography sx={{ fontSize: 12, float: "left", color: "red" }}>
        <ol>
          <li>
            Final Total Package Amount Admissible under the scheme can be viewed
            only after Saving but can be varied based on Preauth initiated Date.
          </li>
          <li>
            Final Preauth Amount and additional NABH Amount will be calculated
            based on the preauth initiation Date's package prices and NABH
            eligibility of the hospital
          </li>
          <li>
            {" "}
            Note :
            <ul>
              <li>
                NABH Amount for Andhra Pradesh Cases and will vary according to
                the final claim amount approved for the particular case.
              </li>
              <li>
                NABH Amount for Telangana Cases and will be added in the Package
                amount itself and will not be shown seperately.
              </li>
            </ul>
          </li>
        </ol>
      </Typography>
      <Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Remarks for cancellation "
            name="email"
            size="small"
            multiline
            rows={2}
          />
        </Grid>
      </Grid>
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
          Preauthorization
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
};

export default PreAuth;
