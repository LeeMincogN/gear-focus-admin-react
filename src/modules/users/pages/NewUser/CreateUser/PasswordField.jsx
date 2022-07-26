import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import PropTypes from "prop-types";

PasswordField.propTypes = {
  name: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-input": {
      background: "#323259",
      color: "#fff",
    },
  },
}));

function PasswordField({ name }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <OutlinedInput
      id={name}
      type={values.showPassword ? "text" : "password"}
      fullWidth
      size="small"
      className={classes.root}
      value={values.password}
      onChange={handleChange("password")}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {values.showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
    />
  );
}

export default PasswordField;
