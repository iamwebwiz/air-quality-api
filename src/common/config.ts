import dotenv from "dotenv";

dotenv.config();

const config = {
  ApiKey: process.env.IQAIR_API_KEY,
  Port: process.env.PORT || 3000,
};

export default config;
