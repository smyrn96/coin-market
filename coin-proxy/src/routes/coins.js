import express from "express";
import { fetchIconDetails, fetchMarketData } from "../services/coinService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await fetchMarketData(req.query);

    if (!Array.isArray(data.coinData) || data.coinData.length === 0) {
      return res.status(404).json({ error: "No market data found" });
    }

    console.log("Fetching all the market data", data);

    const coinData = data.coinData.map(
      ({
        name,
        symbol,
        current_price,
        high_24h,
        low_24h,
        price_change_24h,
      }) => ({
        name,
        symbol,
        current_price,
        high_24h,
        low_24h,
        price_change_24h,
      })
    );

    res.json({ data: coinData, pagination: data.pagination });
  } catch (err) {
    console.error("CoinGecko API error:", err.message);
    res.status(500).json({ error: "Failed to fetch CoinGecko data" });
  }
});

router.get("/:id", async (req, res) => {
  const defaultQuery = { vs_currency: "usd", ...req.query };

  try {
    const data = await fetchIconDetails({
      params: req.params,
      query: defaultQuery,
    });

    const currency = defaultQuery.vs_currency;

    const {
      name,
      description,
      market_data,
      price_change_percentage_24h,
      price_change_percentage_7d,
      price_change_percentage_14d,
      price_change_percentage_30d,
      price_change_percentage_60d,
      price_change_percentage_200d,
      price_change_percentage_1y,
    } = data;

    const current_price_coin = market_data.current_price[currency];
    const highest_24h = market_data.high_24h[currency];
    const lowest_24h = market_data.low_24h[currency];

    res.json({
      name,
      description,
      current_price_coin,
      price_change_percentage_24h,
      price_change_percentage_7d,
      price_change_percentage_14d,
      price_change_percentage_30d,
      price_change_percentage_60d,
      price_change_percentage_200d,
      price_change_percentage_1y,
      highest_24h,
      lowest_24h,
    });
  } catch (err) {
    console.error("CoinGecko API error:", err.message);
    res.status(500).json({ error: "Failed to fetch CoinGecko data" });
  }
});

export default router;
