import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      background: "#323259",
      color: "#fff",
    },
    "& .MuiFormHelperText-root": {
      color: "#a8a8a8",
    },
  },
}));

function InputField({ name = "", text = "" }) {
  const classes = useStyles();
  return (
    <TextField
      required
      id={name}
      name={name}
      fullWidth
      size="small"
      autoComplete="given-name"
      variant="outlined"
      className={classes.root}
      placeholder={name === "vendor" ? `Type ${name} name to select` : ""}
      helperText={text ? text : null}
    />
  );
}

export default InputField;
