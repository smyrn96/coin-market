import axios from "axios";
import { config } from "../config/index.js";

export async function fetchMarketData({
  vs_currency = "usd",
  per_page = 10,
  page = 1,
}) {
  const url = `${config.coinGeckoBaseURL}/coins/markets`;

  const response = await axios.get(url, {
    params: {
      vs_currency,
      order: "market_cap_desc",
      per_page,
      page,
      sparkline: false,
    },
  });

  return response.data;
}

export async function fetchIconDetails({ params, query }) {
  const { id } = params;
  const { vs_currency = "usd" } = query ?? {};
  const url = `${config.coinGeckoBaseURL}/coins/${id}`;

  const response = await axios.get(url, {
    params: {
      vs_currency,
    },
  });

  return response.data;
}
