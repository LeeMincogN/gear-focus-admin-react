// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { Action } from 'redux';
// import { ThunkDispatch } from 'redux-thunk';
// import { API_PATHS } from '../../../../configs/api';
// import { AppState } from '../../../../redux/reducer';
// import { API_METHODS } from '../../../../utils/constants';
// import { fetchThunk } from '../../../common/redux/thunk';

// const defaultFilter = {
//   address: '',
//   count: 25,
//   country: '',
//   date_range: [],
//   date_type: 'R',
//   memberships: [],
//   order_by: 'DESC',
//   page: 1,
//   phone: '',
//   search: '',
//   sort: 'last_login',
//   state: '',
//   status: [],
//   types: [],
//   tz: 7,
// };
// const ManageUser: React.FC = () => {
//   const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
//   const [listFilter, setListFilter] = useState(defaultFilter);

//   const [users, setUsers] = useState([]);

//   const getUserList = async () => {
//     dispatch(fetchThunk(API_PATHS.userList, API_METHODS.POST, listFilter))
//       .then((json) => {
//         if (json.success) {
//           setUsers(json.data);
//         } else {
//           console.log(json);
//           alert('Error when getting product list');
//         }
//       })
//       .catch((error) => console.log(error));
//   };

//   useEffect(() => {
//     getUserList();
//   }, [listFilter]);

//   const onDeleteUsers = () => {
//     dispatch(
//       fetchThunk(API_PATHS.deleteUsers, API_METHODS.POST, {
//         params: [
//           {
//             id: '7166',
//             delete: 1,
//           },
//         ],
//       }),
//     )
//       .then(() => {
//         getUserList();
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div>
//       <button onClick={onDeleteUsers}>onDeleteUsers</button>
//     </div>
//   );
// };

// export default ManageUser;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Action } from 'redux';
import { Divider, Radio } from 'antd';
import { Table, Button, Input, Descriptions, PageHeader, Select } from 'antd';
import { ThunkDispatch } from 'redux-thunk';
import { API_PATHS } from '../../../../configs/api';
import { AppState } from '../../../../redux/reducer';
import { API_METHODS, DATA_ACTIONS } from '../../../../utils/constants';
import { fetchThunk } from '../../../common/redux/thunk';
import Header from '../../../Layout/ProductList/Header/Header';
import { DeleteOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/lib/table';
import SideBar from '../../../Layout/ProductList/SideBar/SideBar';
import './ManageUser.scss';
import { Link, useHistory } from 'react-router-dom';
import { useRef } from 'react';
import { getKeyThenIncreaseKey } from 'antd/lib/message';
import { Item } from 'rc-menu';
import { IUser } from '../../../../models/user';

// const ManageUser: React.FC = () => {
//   const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
//   const [listFilter, setListFilter] = useState(defaultFilter);

//   const [users, setUsers] = useState([]);

const ManageUser: React.FC = () => {
  const { Option } = Select;
  const { user } = useSelector((state: AppState) => ({
    user: state.profile.user,
  }));

  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();

  // const [listUser, setListUser] = useState<ProductListFilter[]>([]);
  const [listUser, setListUser] = useState([]);

  // const listFilter = useSelector((state: AppState) => state.products.productListFilter);
  const listFilter = useSelector((state: AppState) => state.products.productListFilter);

  const [users, setUsers] = useState<IUser[]>([]);

  const getUserList = async () => {
    dispatch(fetchThunk(API_PATHS.userList, API_METHODS.POST, listFilter))
      .then((json) => {
        if (json.success) {
          setUsers(json.data);
        } else {
          console.log(json);
          alert('Error when getting user list');
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUserList();
  }, [listFilter]);

  // const onUpdateList = (type: DATA_ACTIONS, items: IProduct[]) => {
  //   let newList = [...products];
  //   switch (type) {
  //     case DATA_ACTIONS.DELETE:
  //       newList = products.filter((product) => !items.find((i) => i.id === product.id));
  //       break;

  //     default:
  //       break;
  //   }
  //   setProducts(newList);
  // };

  const onDeleteUsers = (item: {}) => {
    dispatch(
      fetchThunk(API_PATHS.deleteUsers, API_METHODS.POST, {
        params: [
          {
            id: '7166',
            delete: 1,
          },
        ],
      }),
    )
      .then(() => {
        getUserList();
      })
      .catch((error) => console.log(error));
  };

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: IUser[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: IUser) => ({
      disabled: record.firstName === 'Disabled User', // Column configuration not to be checked
      name: record.fistName,
    }),
  };

  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const UserColumns: ColumnsType<IUser> = [
    { title: 'Login/Email', dataIndex: 'login', key: 1 },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 2,
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            history.push('/pages/user/new-user');
          },
        };
      },
    },
    { title: 'Access level', dataIndex: 'accessLevel', key: 3 },
    { title: 'Products', dataIndex: 'products', key: 4 },
    { title: 'Orders', dataIndex: 'orders', key: 5 },

    {
      title: 'Wishlist',
      dataIndex: 'wishlist',
      key: 6,
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            history.push('/pages/user/new-user');
          },
        };
      },
    },

    { title: 'Created', dataIndex: 'created', key: 7 },
    { title: 'Last Login', dataIndex: 'lastLogin', key: 8 },

    {
      title: '',
      dataIndex: '',
      key: 9,
      render: (record) => (
        <>
          <Button
            type="primary"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            onClick={() => onDeleteUsers(record)}
          >
            <DeleteOutlined />
          </Button>
        </>
      ),
    },
  ];

  const RenderCard = (props: { data: IUser; idx: number }) => {
    const { data, idx } = props;
    console.log(data);
    const key = useRef(0);

    return (
      <Descriptions
        bordered
        column={{ lg: 2, md: 1, sm: 1, xs: 1 }}
        labelStyle={{
          color: 'white',
          backgroundColor: '#17202A',
          width: '40%',
        }}
        contentStyle={{
          color: '#17202A',
          backgroundColor: '#D5D8DC',
        }}
        size={'small'}
        style={{ marginTop: idx === 0 ? 10 : 50 }}
      >
        <Descriptions.Item label={'Login/Email'}>{data.login}</Descriptions.Item>
        <Descriptions.Item label={'Name'}>{`${data.fistName} ${data.lastName}`}</Descriptions.Item>
        <Descriptions.Item label={'Access level'}>{data.access_level}</Descriptions.Item>
        <Descriptions.Item label={'Products'}>{data.product}</Descriptions.Item>
        <Descriptions.Item label={'Orders'}>{data.order}</Descriptions.Item>
        <Descriptions.Item label={'Wishlist'}>{data.wishlist}</Descriptions.Item>
        <Descriptions.Item label={'Created'}>{data.created}</Descriptions.Item>
        <Descriptions.Item label={'Last Login'}>{data.last_login}</Descriptions.Item>
        <Descriptions.Item label={'Xử lý'}>
          <>
            <Button type="link" danger>
              Xóa
            </Button>
          </>
        </Descriptions.Item>
      </Descriptions>
    );
  };
  // const UpdateReceiptAfterCreate = () => {
  //   setPage({ ...page, pageSize: page.pageSize - 1 });
  // };

  const history = useHistory();

  const handleAddUser = () => {
    history.push('/pages/user/new-user');
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div style={{ marginTop: 55, display: 'flex', height: '100%' }}>
        <SideBar />
        <div className="main-content">
          {/* <PageHeader title="Products" extra={[<NewProduct key={getKeyThenIncreaseKey()} />]} className="pageheader" /> */}
          <div className="search-products">
            <div className="search-item1">
              <Input placeholder="Search keywords" className="input-item1" />
            </div>
            <div className="search-item2">
              <Select defaultValue="Any category" style={{}}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>

            <div className="search-item3">
              <Select defaultValue="Any category" style={{}}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
              <Button type="primary">Search</Button>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'start', margin: '20px 0px ' }}>
            <Button type="primary" onClick={handleAddUser}>
              Add User
            </Button>
          </div>
          {users && (
            <div className="table-content-report">
              {window.innerWidth >= 1024 ? (
                <Table
                  locale={{ emptyText: 'Không có hóa đơn!' }}
                  columns={UserColumns}
                  rowKey={'id'}
                  dataSource={users}
                  rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                  }}
                  style={{ backgroundColor: '#474072' }}
                  // onRow={(record, rowIndex) => {
                  //   return {
                  //     onClick: (event) => {
                  //       // console.log(record);
                  //       // <NewProduct product={record} />;
                  //       history.push('/pages/products/new-product');
                  //     },
                  //   };
                  // }}
                />
              ) : (
                users.map((x, idx) => <RenderCard data={x} key={getKeyThenIncreaseKey()} idx={idx} />)
              )}
            </div>
          )}

          <div className="footer-table">
            <Button>Save changes</Button>
            <Button>Exports all: CSV</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUser;
