import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { API_PATHS } from '../../../configs/api';
import { PRODUCT_ROUTES } from '../../../configs/routes';
import { IUser } from '../../../models/user';
import { AppState } from '../../../redux/reducer';
import { API_METHODS } from '../../../utils/constants';
import { fetchThunk } from '../../common/redux/thunk';

const UserDetail: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [userData, setUserData] = useState<IUser | null>(null);

  const getUserData = () => {
    if (id) {
      dispatch(
        fetchThunk(API_PATHS.userDetail, API_METHODS.POST, {
          id,
        }),
      )
        .then((json) => {
          if (json.success) {
            setUserData(json.data?.info);
          } else {
            alert('Error when get user data');
          }
        })
        .catch((error) => console.log(error));
    } else {
      history.replace(PRODUCT_ROUTES.manageProduct);
    }
  };

  useEffect(() => {
    getUserData();
  }, [id]);

  return userData ? <div> day la trang detail user</div> : null;
};

export default UserDetail;
