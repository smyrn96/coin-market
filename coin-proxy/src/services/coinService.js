import axios from "axios";
import { config } from "../config/index.js";

export async function fetchMarketData({ vs_currency = "usd", per_page, page }) {
  const url = `${config.coinGeckoBaseURL}/coins/markets`;

  const response = await axios.get(url, {
    params: {
      vs_currency,
      per_page,
      page,
      sparkline: false,
    },
  });

  const estimatedTotal = 100;
  const totalPages = Math.ceil(estimatedTotal / (per_page ?? estimatedTotal));

  return {
    coinData: response.data,
    pagination: {
      currentPage: Number(page ?? 1),
      totalPages,
    },
  };
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
