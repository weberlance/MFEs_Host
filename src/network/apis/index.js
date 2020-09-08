import axios from 'common/src/network/apis';

axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  const configToUpdate = config;

  if (token) {
    console.log(config.method, ' ', config.url);
    // disabled to avoid CORS
    // configToUpdate.headers.common['X-Auth'] = token;
  }
  return configToUpdate;
});

axios.interceptors.response.use(
  response => response.data,
  error => Promise.reject({ ...error }),
);

const  api = {
  getTestData: () => {
    return axios.get(`/testData`);
  },
  getToken: () => {
    return axios.get(`/stubData/token.json`);
  },
};

export default api
