// import { Box } from '@mui/material';
// import React from 'react';
// import AccessInfoForm from './AccessInfo/AccessInfoForm';
// import CreateUserForm from './CreateUser/CreateUserForm';
// import TaxInfoForm from './TaxInfo/TaxInfoForm';

// const NewUser: React.FC = () => {
//   return (
//     <Box>
//       <CreateUserForm />
//       <AccessInfoForm />
//       <TaxInfoForm />
//     </Box>
//   );
// };

// export default NewUser;

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

import Header from '../../../Layout/ProductList/Header/Header';
import SideBar from '../../../Layout/ProductList/SideBar/SideBar';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CreateUserForm from './CreateUser/CreateUserForm';
import AccessInfoForm from './AccessInfo/AccessInfoForm';
import TaxInfoForm from './TaxInfo/TaxInfoForm';
import { IUser } from '../../../../models/user';

interface NewUserProps {
  isUpload?: boolean;
  // product?: object;
}

const NewUser: React.FC<NewUserProps> = ({ isUpload = false }) => {
  const { id } = useParams<{ id?: string }>();
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
  const [existUser, setExistUser] = useState<IUser | null>(null);

  const history = useHistory();

  //
  const getProductData = async () => {
    try {
      const json = await dispatch(
        fetchThunk(API_PATHS.getProductDetail, API_METHODS.POST, {
          id,
        }),
      );
      if (json.success) {
        setExistUser(json.data);
      } else {
        alert('Error when get product data');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (values: IProduct) => {
    console.log(values);
  };

  useEffect(() => {
    if (id) getProductData();
  }, [id]);
  //
  const handleBack = () => {
    history.push('/pages/user/manage-user');
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
          <CreateUserForm />
          <AccessInfoForm />
          <TaxInfoForm />
          {/* </form> */}
          {/* </Box> */}
        </div>
      </div>
    </>
  );
};

export default NewUser;
