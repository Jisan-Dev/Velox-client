import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: 'https://vercel.com/jisans-projects/a12-velox-server',
});

export default axiosPublic;
