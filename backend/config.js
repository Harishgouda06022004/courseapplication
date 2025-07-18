import dotenv from "dotenv";
dotenv.config();

const config = {
  PORT: process.env.PORT,
  FRONTEND_URL: process.env.FRONTEND_URL,
  MONGO_URI: process.env.MONGO_URI,

  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,

  JWT_USER_PASSWORD: process.env.JWT_USER_PASSWORD,
  JWT_ADMIN_PASSWORD: process.env.JWT_ADMIN_PASSWORD,

  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,

  NODE_ENV: process.env.NODE_ENV,
};

export default config;
