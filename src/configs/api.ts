import { API_HOST, API_ADMIN_HOST } from '../utils/constants';

enum APIService {
  auth,
  protected,
  public,
  products,
  apiAdmin,
}

function getBaseUrl(service: APIService) {
  if (service === APIService.auth) {
    return `${API_HOST}/authentication`;
  } else if (service === APIService.products) {
    return `${API_HOST}/products`;
  } else if (service === APIService.protected) {
    return `${API_HOST}/protected`;
  } else if (service === APIService.apiAdmin) {
    return `${API_ADMIN_HOST}/apiAdmin`;
  } else if (service === APIService.public) {
    return `${API_HOST}`;
  }

  return '';
}

export const API_PATHS = {
  signIn: `${getBaseUrl(APIService.auth)}/login`,
  userProfile: `${getBaseUrl(APIService.public)}/user`,

  productList: `${getBaseUrl(APIService.products)}/list`,
  deleteProducts: `${getBaseUrl(APIService.apiAdmin)}/products/edit`,
  getProductDetail: `${getBaseUrl(APIService.apiAdmin)}/products/detail`,

  userList: `${getBaseUrl(APIService.apiAdmin)}/users/list`,
  userDetail: `${API_ADMIN_HOST}/apiVendor/profile/detail`,
  deleteUsers: `${getBaseUrl(APIService.apiAdmin)}/users/edit`,
};
