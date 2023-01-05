require('dotenv').config();
const path = require('path');

module.exports = {
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
  }
};
