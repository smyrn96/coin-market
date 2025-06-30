import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT || 8080,
  coinGeckoBaseURL: process.env.COINGECKO_API_URL,
};
