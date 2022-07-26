import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Action } from 'redux';
import { Divider, Radio } from 'antd';
import { Table, Button, Input, Descriptions, PageHeader, Select } from 'antd';
import { ThunkDispatch } from 'redux-thunk';
import { API_PATHS } from '../../../../configs/api';
import { IProduct } from '../../../../models/products';
import { AppState } from '../../../../redux/reducer';
import { API_METHODS, DATA_ACTIONS } from '../../../../utils/constants';
import { fetchThunk } from '../../../common/redux/thunk';
import Header from '../../../Layout/ProductList/Header/Header';
import { PoweroffOutlined, DeleteOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/lib/table';
import SideBar from '../../../Layout/ProductList/SideBar/SideBar';
import './ManageProduct.scss';
import { Link, useHistory } from 'react-router-dom';
import NewProduct from '../NewProduct/NewProduct';
import { useRef } from 'react';
import { getKeyThenIncreaseKey } from 'antd/lib/message';
import { ProductListFilter } from '../../../../models/products';
import { Item } from 'rc-menu';

const ManageProduct: React.FC = () => {
  const { Option } = Select;
  const { user } = useSelector((state: AppState) => ({
    user: state.profile.user,
  }));
  const [listProduct, setListProduct] = useState<ProductListFilter[]>([]);

  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();

  const listFilter = useSelector((state: AppState) => state.products.productListFilter);

  const [products, setProducts] = useState<IProduct[]>([]);

  const getListProducts = async () => {
    dispatch(fetchThunk(API_PATHS.productList, API_METHODS.POST, listFilter))
      .then((json) => {
        if (json.success) {
          setProducts(json.data);
        } else {
          console.log(json);
          alert('Error when getting product list');
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getListProducts();
  }, [listFilter]);
  console.log('check products', products);

  const onUpdateList = (type: DATA_ACTIONS, items: IProduct[]) => {
    let newList = [...products];
    switch (type) {
      case DATA_ACTIONS.DELETE:
        newList = products.filter((product) => !items.find((i) => i.id === product.id));
        break;

      default:
        break;
    }
    setProducts(newList);
  };

  const onDeleteProducts = async (item: {}) => {
    const data = await dispatch(
      fetchThunk(API_PATHS.deleteProducts, API_METHODS.POST, {
        params: [{ id: '5671', delete: 1 }],
      }),
    );
    if (data.success) {
      // console.log('check data', data);
      console.log(item);
      // onUpdateList(DATA_ACTIONS.DELETE, item);
    } else {
      console.log(data);
      alert('Error when deleting products');
    }
  };
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: IProduct[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: IProduct) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const ProductColumns: ColumnsType<IProduct> = [
    {
      title: '',
      dataIndex: '',
      key: 9,
      render: (record) => (
        <>
          <Button type="link" style={{ color: '#F7EC09' }}>
            <PoweroffOutlined />
          </Button>
        </>
      ),
    },
    { title: 'SKU', dataIndex: 'sku', key: 1 },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 2,
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            history.push('/pages/products/new-product');
          },
        };
      },
    },
    { title: 'Category', dataIndex: 'category', key: 3 },
    { title: 'Price', dataIndex: 'price', key: 4 },
    { title: 'In Stock', dataIndex: 'amount', key: 5 },

    {
      title: 'Vendor',
      dataIndex: 'vendor',
      key: 6,
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            history.push('/pages/products/new-product');
          },
        };
      },
    },

    { title: 'ArivalDate', dataIndex: 'arrivalDate', key: 7 },

    {
      title: '',
      dataIndex: '',
      key: 8,
      render: (record) => (
        <>
          <Button
            type="primary"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            onClick={() => onDeleteProducts(record)}
          >
            <DeleteOutlined />
          </Button>
        </>
      ),
    },
  ];

  const RenderCard = (props: { data: IProduct; idx: number }) => {
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
        <Descriptions.Item label={'SKU'}>button</Descriptions.Item>
        <Descriptions.Item label={'SKU'}>{data.sku}</Descriptions.Item>
        <Descriptions.Item label={'Name'}>{data.name}</Descriptions.Item>
        <Descriptions.Item label={'Category'}>{data.category}</Descriptions.Item>
        <Descriptions.Item label={'Price'}>{data.price}</Descriptions.Item>
        <Descriptions.Item label={'In Stock'}>{data.amount}</Descriptions.Item>
        <Descriptions.Item label={'Vendor'}>{data.vendor}</Descriptions.Item>
        <Descriptions.Item label={'ArivalDate'}>{data.arrivalDate}</Descriptions.Item>
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
  console.log('products', products);

  const history = useHistory();

  const handleAddProduct = () => {
    history.push('/pages/products/new-product');
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
            <Button type="primary" onClick={handleAddProduct}>
              Add product
            </Button>
          </div>
          {products && (
            <div className="table-content-report">
              {window.innerWidth >= 1024 ? (
                <Table
                  locale={{ emptyText: 'Không có hóa đơn!' }}
                  columns={ProductColumns}
                  rowKey={'id'}
                  dataSource={products}
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
                products.map((x, idx) => <RenderCard data={x} key={getKeyThenIncreaseKey()} idx={idx} />)
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

export default ManageProduct;
