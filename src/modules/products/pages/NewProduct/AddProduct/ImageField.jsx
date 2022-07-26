import React from "react";
import PropTypes from "prop-types";
import { Box, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

ImageField.propTypes = {};

function ImageField(props) {
  return (
    <IconButton color="primary" aria-label="upload picture" component="label">
      <Box
        sx={{
          padding: "30px",
          border: "1px dashed #fff",
          color: "#fff",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input hidden accept="image/*" type="file" />
        <PhotoCamera fontSize="large" />
      </Box>
    </IconButton>
  );
}

export default ImageField;
