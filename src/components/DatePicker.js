import * as React from "react";
import { useController } from "react-hook-form";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers";

export function DatePicker({...props}) {
  const { error, label, format, name, control,value } = props;
  const { field } = useController({ name, control });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        label={label}
        inputFormat={format}
        value={value}
        {...field}
        renderInput={({ error: inputError, ...params }) => {
          return <TextField  size="small"
          sx={{ width: "100%", mt: 1 }} error={error} helperText={error} {...params} />;
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;