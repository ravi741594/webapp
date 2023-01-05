require('dotenv').config();
const { publicRuntimeConfig } = require('./runtime.config');

module.exports = {
  reactStrictMode: true,
  target: 'server',
  publicRuntimeConfig
};
