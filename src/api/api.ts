import axios from 'axios';
import URLS from '../config/env.json';

const client = axios.create({
  baseURL: URLS.BASE_URL,
});

export { client };
