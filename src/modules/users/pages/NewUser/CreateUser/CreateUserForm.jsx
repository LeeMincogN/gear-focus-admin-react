import { Box, createTheme, Grid, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import InputField from '../../../../products/pages/NewProduct/AddProduct/InputField';
import SelectField from '../../../../products/pages/NewProduct/AddProduct/SelectField';
import PasswordField from './PasswordField';

CreateUserForm.propTypes = {};

const theme = createTheme({
  palette: {
    primary: {
      main: '#323259',
      contrastText: '#fff',
    },
  },
});

function CreateUserForm(props) {
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
        sx={{ marginBottom: '20px', fontSize: '30px', color: '#fff' }}
      >
        Create profile
      </Typography>
      <Typography
        variant="h3"
        gutterBottom
        textAlign="left"
        sx={{ marginBottom: '20px', fontSize: '26px', color: '#fff' }}
      >
        Email & password
      </Typography>

      <ThemeProvider theme={theme}>
        <Box component="form" sx={{ margin: '0 auto', width: '600px' }}>
          <Grid container spacing={3}>
            <Grid item xs={3} sx={{ margin: 'auto 0' }}>
              <label htmlFor="firstName">First Name</label>
            </Grid>
            <Grid item xs={9}>
              <InputField name="firstName" />
            </Grid>
            <Grid item xs={3} sx={{ margin: 'auto 0' }}>
              <label htmlFor="lastName">Last Name</label>
            </Grid>
            <Grid item xs={9}>
              <InputField name="lastName" />
            </Grid>
            <Grid item xs={3} sx={{ margin: 'auto 0' }}>
              <label htmlFor="email">Email</label>
            </Grid>
            <Grid item xs={9}>
              <InputField name="email" />
            </Grid>
            <Grid item xs={3} sx={{ margin: 'auto 0' }}>
              <label htmlFor="password">Password</label>
            </Grid>
            <Grid item xs={9}>
              <PasswordField name="password" />
            </Grid>
            <Grid item xs={3} sx={{ margin: 'auto 0' }}>
              <label htmlFor="confirm">Confirm password</label>
            </Grid>
            <Grid item xs={9}>
              <PasswordField name="confirmPassword" />
            </Grid>
            <Grid item xs={3} sx={{ margin: 'auto 0' }}>
              <label htmlFor="type">Type</label>
            </Grid>
            <Grid item xs={9}>
              <SelectField name="type" valueList={['Individual', 'Business']} defaultValue="Individual" />
            </Grid>
            <Grid item xs={3} sx={{ margin: 'auto 0' }}>
              <label htmlFor="payment">PaymentRails ID</label>
            </Grid>
            <Grid item xs={9}></Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default CreateUserForm;
