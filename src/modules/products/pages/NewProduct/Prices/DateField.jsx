import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

DateField.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      border: "1px solid #a16eff",
      backgroundColor: "#252547",
      color: "#fff",
    },
  },
}));

function DateField(props) {
  const classes = useStyles();
  const [value, setValue] = useState(null);

  return (
    <>
      <Button
        variant="outlined"
        disabled
        sx={{
          backgroundColor: "rgba(180,180,219,.24)",
          backgroundImage: "none",
          height: "100%",
        }}
      >
        <CalendarMonthIcon color="secondary" />
      </Button>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => (
            <TextField className={classes.root} {...params} size="small" />
          )}
        />
      </LocalizationProvider>
    </>
  );
}

export default DateField;
