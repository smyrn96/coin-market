import axiosInstance from "./axios";

export const fetchCoins = async ({ vs_currency = "usd", page, per_page }) => {
  const response = await axiosInstance.get("/coins", {
    params: {
      vs_currency: vs_currency,
      page: page,
      per_page: per_page,
      sparkline: false,
    },
  });

  return response.data;
};
