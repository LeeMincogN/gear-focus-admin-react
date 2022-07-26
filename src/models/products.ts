export interface ProductListFilter {
  availability?: string;
  category?: string;
  count?: number;
  order_by?: string;
  page?: number;
  search?: string;
  search_type?: string;
  sort?: string;
  stock_status?: string;
  vendor?: any;
}

export interface IProduct {
  amount?: string;
  arrivalDate?: string;
  category?: string;
  condition?: string;
  created?: string;
  description?: string;
  enabled?: string;
  id: string;
  name?: string;
  participateSale?: string;
  price?: string;
  sku?: string;
  vendor?: string;
  vendorID?: string;
  weight?: string;
}
