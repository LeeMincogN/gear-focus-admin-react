import { Box, Checkbox, createTheme, Grid, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import SelectField from '../../../../products/pages/NewProduct/AddProduct/SelectField';

AccessInfoForm.propTypes = {};

const theme = createTheme({
  palette: {
    primary: {
      main: '#323259',
      contrastText: '#fff',
    },
  },
});

function AccessInfoForm(props) {
  return (
    <Box
      sx={{
        backgroundColor: '#1b1b38',
        color: '#fff',
        padding: '30px',
        borderBottom: '20px solid #323259',
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        textAlign="left"
        sx={{ marginBottom: '20px', fontSize: '26px', color: '#fff' }}
      >
        Access information
      </Typography>

      <ThemeProvider theme={theme}>
        <Box component="form" sx={{ margin: '0 auto', width: '600px' }}>
          <Grid container spacing={3}>
            <Grid item xs={3} sx={{ margin: 'auto 0' }}>
              <label htmlFor="access">Access level</label>
            </Grid>
            <Grid item xs={9}>
              <SelectField name="access" valueList={['Vendor', 'Admin']} defaultValue="Vendor" />
            </Grid>
            <Grid item xs={3} sx={{ margin: 'auto 0' }}>
              <label htmlFor="membership">Membership</label>
            </Grid>
            <Grid item xs={9}>
              <SelectField
                name="membership"
                valueList={['Ignore Membership', 'General']}
                defaultValue="Ignore Membership"
              />
            </Grid>
            <Grid item xs={3} sx={{ margin: 'auto 0' }}>
              <label htmlFor="require">Require to change password on next log in</label>
            </Grid>
            <Grid item xs={9}>
              <Checkbox />
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default AccessInfoForm;
