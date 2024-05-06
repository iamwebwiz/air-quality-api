import dotenv from "dotenv";

dotenv.config();

const config = {
  apiKey: process.env.IQAIR_API_KEY || "",
  port: process.env.PORT || 3000,
  databaseUri: process.env.MONGODB_URI || "",
};

export default config;
