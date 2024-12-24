import axios, { AxiosRequestConfig } from 'axios';
import { memoize } from 'lodash-es';

export const ERROR401 = '401Error';

const baseConfig: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export function creathAuthAxiosInstance(config: AxiosRequestConfig) {
  const ins = axios.create(config);
  // API 요청 전
  ins.interceptors.request.use();

  // API 요청 후
  ins.interceptors.response.use();
  return ins;
}

//일반 요청 axios 인스턴스
export const axiosInstance = memoize((ver: string) => {
  return creathAuthAxiosInstance({ ...baseConfig, baseURL: `/api/${ver}` });
});

// ExchangeRate-API
// 환율 정보 API
export const axiosExchangeInstance = memoize((ver: string) => {
  return axios.create({
    baseURL: `https://${ver}.exchangerate-api.com/${ver}/`,
  });
});
