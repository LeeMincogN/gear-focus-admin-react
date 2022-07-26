export const development: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export const API_HOST = development ? 'https://api.gearfocus.div4.pgtest.co/api' : 'https://google.com';

export const API_ADMIN_HOST = 'https://api.gearfocus.div4.pgtest.co';

export const ACCESS_TOKEN_KEY = 'token';

export enum API_METHODS {
  POST = 'post',
  GET = 'get',
  DELETE = 'delete',
  PUT = 'put',
}

export enum DATA_ACTIONS {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}
