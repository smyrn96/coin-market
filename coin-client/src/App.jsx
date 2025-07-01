import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import CoinsMarket from "./pages/CoinsMarket/CoinsMarket";
import CoinDetails from "./pages/CoinDetails/CoinDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/coins" replace />} />
      <Route path="/coins" element={<CoinsMarket />} />
      <Route path="/coins/:id" element={<CoinDetails />} />
    </Routes>
  );
}

export default App;
