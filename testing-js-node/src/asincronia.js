/* eslint-disable import/prefer-default-export */
/* eslint-disable no-shadow */

var axios = require('axios');

// Callbacks
const callback = (callback) => setTimeout(() => callback('Hola mundo callback'), 3000);

// Promesas
const axiosGet = (url) => new Promise((resolve, reject) => {
  axios.get(url)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error.message));
});

module.exports = {
  callback,
  axiosGet
}