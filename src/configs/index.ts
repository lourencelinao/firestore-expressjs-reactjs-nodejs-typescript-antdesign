import production from '../configs/config.production.json';
import staging from '../configs/config.staging.json';

const LOCAL = 'localhost';
const STAGING = 'staging';

const isDevelopment =
  window.location.hostname.includes(LOCAL) || window.location.hostname.includes(STAGING);

const config = isDevelopment ? staging : production;

export default config;
