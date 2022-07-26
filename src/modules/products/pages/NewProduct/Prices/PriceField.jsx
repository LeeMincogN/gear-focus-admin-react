import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

PriceField.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#252547",
      border: "1px solid #a16eff",
      color: "#fff",
    },
  },
}));

function PriceField(props) {
  const classes = useStyles();

  return (
    <>
      <Button
        variant="outlined"
        disabled
        sx={{
          backgroundColor: "rgba(180,180,219,.24)",
          backgroundImage: "none",
        }}
      >
        <AttachMoneyIcon color="secondary" />
      </Button>
      <TextField
        variant="outlined"
        className={classes.root}
        placeholder="0.00"
        size="small"
      />
    </>
  );
}

export default PriceField;
