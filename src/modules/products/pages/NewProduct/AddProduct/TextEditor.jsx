import React from "react";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";
import { Box } from "@mui/material";

TextEditor.propTypes = {};

const myTheme = createTheme({
  //   MUIRichTextEditor: {
  //     root: {
  //       marginTop: 20,
  //       width: "80%",
  //     },
  //     editor: {
  //       borderBottom: "1px solid gray",
  //     },
  //   },
});

Object.assign(myTheme, {
  overrides: {
    MUIRichTextEditor: {
      root: {
        width: "100%",
        border: "1px solid #fff",
        height: "200px",
        "& .MuiIconButton-root": {
          color: "#fff",
        },
      },
      editor: {
        // color: "#fff",
      },
    },
  },
});

function TextEditor(props) {
  return (
    <ThemeProvider theme={myTheme}>
      <Box>
        <MUIRichTextEditor
          label="Type something here..."
          controls={[
            "bold",
            "italic",
            "underline",
            "highlight",
            "code",
            "clear",
            "save",
          ]}
        />
      </Box>
    </ThemeProvider>
  );
}

export default TextEditor;
