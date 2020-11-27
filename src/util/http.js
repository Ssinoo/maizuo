import axios from 'axios'
const http = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 10000,
  headers: {'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606313308132504036048897","bc":"430100"}'}
});

export default http