import { Box, Checkbox, createTheme, FormControlLabel, Grid, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import InputField from '../AddProduct/InputField';
import SelectField from '../AddProduct/SelectField';
import DateField from './DateField';
import PriceField from './PriceField';
import SaleField from './SaleField';

PricesForm.propTypes = {};

const theme = createTheme({
  palette: {
    primary: {
      main: '#323259',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgba(180,180,219,.48)',
      contrastText: '#fff',
    },
  },
});

function PricesForm(props) {
  const values = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

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
        Prices & Inventory
      </Typography>

      <ThemeProvider theme={theme}>
        <Box component="form" sx={{ margin: '0 auto', width: '600px' }}>
          <Grid container spacing={3}>
            <Grid item xs={3} sx={{ margin: 'auto 0' }}>
              <label htmlFor="memberships">Memberships</label>
            </Grid>
            <Grid item xs={9}>
              <SelectField name="memberships" valueList={values} />
            </Grid>
            <Grid item xs={3} sx={{ margin: 'auto 0' }}>
              <label htmlFor="tax">Tax class</label>
            </Grid>
            <Grid item xs={5}>
              <Typography>Default</Typography>
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel control={<Checkbox />} label="Tax Exempt" />
            </Grid>
            <Grid item xs={3} sx={{ margin: 'auto 0' }}>
              <label htmlFor="price">Price</label>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
              <PriceField />
            </Grid>
            <Grid item xs={5} sx={{ display: 'flex', alignItems: 'center' }}>
              <SaleField />
            </Grid>
            <Grid item xs={3} sx={{ margin: 'auto 0' }}>
              <label htmlFor="arrivalDate">Arrival date</label>
            </Grid>
            <Grid item xs={9}>
              <DateField />
            </Grid>
            <Grid item xs={3} sx={{ margin: 'auto 0' }}>
              <label htmlFor="memberships">Quantity in stock</label>
            </Grid>
            <Grid item xs={9}>
              <InputField name="quantity" />
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default PricesForm;
