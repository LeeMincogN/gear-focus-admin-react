import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  valueList: PropTypes.array,
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiSelect-outlined": {
      background: "#323259",
      color: "#fff",
    },
    height: "100%",
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const listProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
    anchororigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformorigin: {
      vertical: "top",
      horizontal: "left",
    },
  },
};

function SelectField({ name = "", valueList = [], defaultValue = "" }) {
  const classes = useStyles();
  const [value, setValue] = useState(
    defaultValue === "" ? `Type ${name} name to select` : defaultValue
  );

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <FormControl fullWidth>
      <Select
        value={value}
        id={name}
        onChange={handleValueChange}
        MenuProps={listProps}
        size="small"
        className={classes.root}
        // defaultValue={`Type ${name} name to select`}
      >
        {defaultValue === "" && (
          <MenuItem
            value={`Type ${name} name to select`}
          >{`Type ${name} name to select`}</MenuItem>
        )}
        {valueList &&
          valueList.length > 0 &&
          valueList.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

export default SelectField;
