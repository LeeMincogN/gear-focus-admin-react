import React, { useState } from 'react';
import { replace } from 'connected-react-router';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { API_PATHS } from '../../../configs/api';
import { PRODUCT_ROUTES } from '../../../configs/routes';
import logo from '../../../logo-420-x-108.png';
import { ILoginParams } from '../../../models/auth';
import { AppState } from '../../../redux/reducer';
import { ACCESS_TOKEN_KEY, API_METHODS } from '../../../utils/constants';
import { fetchThunk } from '../../common/redux/thunk';
import LoginForm from '../components/LoginForm';
import { setUserInfo } from '../redux/authReducer';

const LoginPage = () => {
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onLogin = React.useCallback(
    async (values: ILoginParams) => {
      setErrorMessage('');
      setLoading(true);

      const json = await dispatch(
        fetchThunk(API_PATHS.signIn, API_METHODS.POST, { email: values.email, password: values.password }),
      );

      setLoading(false);

      if (json.success) {
        dispatch(setUserInfo(json.user));
        Cookies.set(ACCESS_TOKEN_KEY, json.user_cookie, { expires: values.rememberMe ? 7 : undefined });
        dispatch(replace(PRODUCT_ROUTES.manageProduct));
        return;
      } else {
        return setErrorMessage(json.errors.email);
      }
    },
    [dispatch],
  );

  return (
    <div
      className="container"
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <LoginForm onLogin={onLogin} loading={loading} errorMessage={errorMessage} />
    </div>
  );
};

export default LoginPage;
