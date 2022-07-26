import { ActionType, createCustomAction, getType } from 'typesafe-actions';

import { IProduct, ProductListFilter } from '../../../models/products';

export interface ProductsState {
  productListFilter?: ProductListFilter;
  products: IProduct[];
}
export const setProductListFilter = createCustomAction('products/setProductListFilter', (data: ProductListFilter) => ({
  data,
}));

const actions = { setProductListFilter };

type Action = ActionType<typeof actions>;

const defaultProductListFilter = {
  availability: 'all',
  category: '0',
  count: 25,
  order_by: 'ASC',
  page: 1,
  search: '',
  search_type: '',
  sort: 'name',
  stock_status: 'all',
  vendor: {},
};

const initState = {
  productListFilter: defaultProductListFilter,
  products: [],
};

export default function reducer(state: ProductsState = initState, action: Action) {
  switch (action.type) {
    case getType(setProductListFilter): {
      const newFilter = action.data || defaultProductListFilter;
      return {
        ...state,
        productListFilter: {
          ...state.productListFilter,
          ...newFilter,
        },
      };
    }
    default:
      return state;
  }
}
