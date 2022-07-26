import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ILoginParams, ILoginValidation } from '../../../models/auth';
import { validateLogin, validLogin } from '../utils';
import LoginIcon from '@mui/icons-material/Login';

interface Props {
  onLogin(values: ILoginParams): void;
  loading: boolean;
  errorMessage: string;
}

const useStyles = makeStyles({
  root: {
    width: '420px',
    margin: '30px auto 0',
    backgroundColor: '#f3f3f3',
    padding: '15px',
    boxShadow: '0px 0px 3px 0px #000',
  },
  title: {
    textAlign: 'center',
    color: '#000',
    margin: '20px 0 !important',
  },
});

const LoginForm = (props: Props) => {
  const classes = useStyles();
  const { onLogin, loading, errorMessage } = props;

  const [formValues, setFormValues] = React.useState<ILoginParams>({ email: '', password: '', rememberMe: false });
  const [validate, setValidate] = React.useState<ILoginValidation>();

  const onSubmit = React.useCallback(() => {
    const validate = validateLogin(formValues);

    setValidate(validate);

    if (!validLogin(validate)) {
      return;
    }

    onLogin(formValues);
  }, [formValues, onLogin]);

  return (
    <Box className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Login
      </Typography>
      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="row g-3 needs-validation"
      >
        {!!errorMessage && (
          <div className="alert alert-danger" role="alert" style={{ width: '100%' }}>
            {errorMessage}
          </div>
        )}

        <Box>
          <input
            type="text"
            className="form-control"
            id="inputEmail"
            value={formValues.email}
            onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
            placeholder="Email"
          />

          {!!validate?.email && (
            <small className="text-danger">
              <FormattedMessage id={validate?.email} />
            </small>
          )}
        </Box>

        <Box>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            value={formValues.password}
            onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
            placeholder="Password"
          />

          {!!validate?.password && (
            <small className="text-danger">
              <FormattedMessage id={validate?.password} />
            </small>
          )}
        </Box>

        <Box>
          <Box>
            <Button variant="contained" type="submit" fullWidth disabled={loading} color="success">
              <LoginIcon />
              Login
              {loading && <div className="spinner-border spinner-border-sm text-light mr-2" role="status" />}
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default LoginForm;
