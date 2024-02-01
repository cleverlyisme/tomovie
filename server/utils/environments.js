const dotenv = require("dotenv");

dotenv.config();

const environments = {
  PUBLIC_URL: process.env.PUBLIC_URL,
  PORT: process.env.PORT,
  MONGO_ATLAS_URI: process.env.MONGO_ATLAS_URI,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  APP_EMAIL: process.env.APP_EMAIL,
  APP_EMAIL_EXPIRE: process.env.APP_EMAIL_EXPIRE,
  APP_PASSWORD: process.env.APP_PASSWORD,
};

module.exports = environments;
