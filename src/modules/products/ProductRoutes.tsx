import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { PRODUCT_ROUTES } from '../../configs/routes';
import ManageProduct from './pages/ManageProduct/ManageProduct';
import NewProduct from './pages/NewProduct/NewProduct';

const ProductRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path={PRODUCT_ROUTES.manageProduct} component={ManageProduct} />
      <Route path={PRODUCT_ROUTES.newProduct}>
        <NewProduct isUpload />
      </Route>
      <Route path={PRODUCT_ROUTES.detailProducts} component={NewProduct} />

      <Redirect to={PRODUCT_ROUTES.manageProduct} />
    </Switch>
  );
};

export default ProductRoutes;
