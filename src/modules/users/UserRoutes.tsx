import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { USER_ROUTES } from '../../configs/routes';
import ManageUser from './pages/ManageUser/ManageUser';
import NewUser from './pages/NewUser/NewUser';
import UserDetail from './pages/UserDetail';

const ProductRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path={USER_ROUTES.manageUser} component={ManageUser} />
      <Route path={USER_ROUTES.userDetail} component={UserDetail} />
      <Route path={USER_ROUTES.newUser} component={NewUser} />

      <Redirect to={USER_ROUTES.manageUser} />
    </Switch>
  );
};

export default ProductRoutes;
