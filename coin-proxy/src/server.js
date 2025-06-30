import express from "express";
import cors from "cors";
import coinsRouter from "./routes/coins.js";
import { config } from "./config/index.js";

const app = express();

app.use(cors());
app.use("/api/coins", coinsRouter);

app.get("/", (req, res) => {
  res.send("CoinGecko Proxy API is running.");
});

app.listen(config.port, () => {
  console.log(`Server running at http://localhost:${config.port}`);
});
