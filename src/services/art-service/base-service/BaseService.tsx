import Axios from 'axios';
import {API_URLS} from '../../../constants';

const baseService = Axios.create({
  baseURL: API_URLS.ART_INSTITUTE,
  timeout: 10000,
});

baseService.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (error.response) {
      return error.response.data;
    } else if (error.request) {
      return error.request;
    } else {
      return error.message;
    }
  },
);

export default baseService;
