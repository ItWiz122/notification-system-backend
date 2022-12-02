import dotenv from "dotenv";
dotenv.config();

export const {
  APP_PORT,
  DEBUG_MODE,
  DB_URL,
  JWT_SECRET,
  GOOGLE_API_KEY,
  IMAGE_KIT_PUBLIC_KEY,
  IMAGE_KIT_PRIVATE_KEY,
  IMAGE_KIT_URL_ENDPOINT,
} = process.env;
