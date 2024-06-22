import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: 'https://a12-velox-server.vercel.app',
});

export default axiosPublic;
