import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1',
};

export const api = axios.create(axiosConfig);
