export interface AuthToken {
  accessToken: string;
  expiresIn: number;
  tokenType: string;
}

export interface IUser {
  profile_id: string;
  login?: string;
  fistName?: string;
  lastName?: string;
  countOfLoginAttempts?: string;
  dateOfLoginAttempt?: string;

  access_level?: string;
  created?: string;
  last_login?: string;
  order?: { order_as_buyer: number; order_as_buyer_total: number };
  product?: number;
  storeName?: string;
  vendor?: string;
  vendor_id?: string;
  wishlist?: string;

  companyName?: string;
  default_card_id?: string;
  earning?: number;
  email?: string;
  expense?: string;
  firstName?: string;
  first_login?: string;
  forceChangePassword?: string;
  income?: string;
  joined?: string;
  language?: string;
  membership_id?: string;
  order_as_buyer?: number;
  order_as_buyer_total?: number;
  paymentRailsId?: string;
  paymentRailsType?: string;
  pending_membership_id?: null;
  products_total?: string;
  referer?: string;
  roles?: string[];
  status?: string;
  statusComment?: string;
  taxExempt?: string;
}
