import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { API_PATHS } from '../../../../configs/api';
import { IProduct } from '../../../../models/products';

import { AppState } from '../../../../redux/reducer';
import { API_METHODS } from '../../../../utils/constants';
import { fetchThunk } from '../../../common/redux/thunk';

import { Box, IconButton } from '@mui/material';

import AddProductForm from './AddProduct/AddProductForm';
import MarketingForm from './Marketing/MarketingForm';
import PricesForm from './Prices/PricesForm';
import ShippingForm from './Shipping/ShippingForm';
import Header from '../../../Layout/ProductList/Header/Header';
import SideBar from '../../../Layout/ProductList/SideBar/SideBar';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

interface NewProductProps {
  isUpload?: boolean;
  // product?: object;
}

const NewProduct: React.FC<NewProductProps> = ({ isUpload = false }) => {
  const { id } = useParams<{ id?: string }>();
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
  const [existProduct, setExistProduct] = useState<IProduct | null>(null);

  const history = useHistory();

  const getProductData = async () => {
    try {
      const json = await dispatch(
        fetchThunk(API_PATHS.getProductDetail, API_METHODS.POST, {
          id,
        }),
      );
      if (json.success) {
        setExistProduct(json.data);
      } else {
        alert('Error when get product data');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSubmit = (values: IProduct) => {
  //   console.log(values);
  // };

  useEffect(() => {
    if (id) getProductData();
  }, [id]);

  const handleBack = () => {
    history.push('/pages/products/manage-product');
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div style={{ marginTop: 55, display: 'flex', height: '100%' }}>
        <SideBar />
        <div className="main-content">
          {/* <Box> */}
          <Box sx={{ textAlign: 'left' }}>
            <IconButton color="primary" size="large" onClick={handleBack}>
              <ArrowCircleLeftIcon fontSize="large" />
            </IconButton>
          </Box>
          {/* <form onSubmit={handleSubmit}> */}
          <AddProductForm />
          <PricesForm />
          <ShippingForm />
          <MarketingForm />
          {/* </form> */}
          {/* </Box> */}
        </div>
      </div>
    </>
  );
};

export default NewProduct;
