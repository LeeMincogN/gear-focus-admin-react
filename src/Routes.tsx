import React, { lazy, Suspense, useEffect } from 'react';
import { replace } from 'connected-react-router';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import { PRODUCT_ROUTES, ROUTES } from './configs/routes';
import ProtectedRoute from './modules/common/components/ProtectedRoute';
import { ACCESS_TOKEN_KEY } from './utils/constants';

const ProductRoutes = lazy(() => import('./modules/products/ProductRoutes'));
const UserRoutes = lazy(() => import('./modules/users/UserRoutes'));
const LoginPage = lazy(() => import('./modules/auth/pages/LoginPage'));

interface Props {}

export const Routes: React.FC = (props: Props) => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get(ACCESS_TOKEN_KEY);
    if (!token) {
      dispatch(replace(ROUTES.login));
    }
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <Switch location={location}>
        <Route path={ROUTES.login} component={LoginPage} />

        <ProtectedRoute path={ROUTES.products} component={ProductRoutes} />
        <ProtectedRoute path={ROUTES.users} component={UserRoutes} />

        <Redirect to={PRODUCT_ROUTES.manageProduct} />
      </Switch>
    </Suspense>
  );
};
