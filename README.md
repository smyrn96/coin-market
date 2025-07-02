# 🪙 Full-Stack Crypto Price Tracker

A lightweight full-stack application built for the **Cyberscope Assignment** that displays cryptocurrency market data using the [CoinGecko API](https://www.coingecko.com/en/api). The app consists of:

- **List Page**: View paginated market data of various cryptocurrencies.
- **Details Page**: View detailed information for a selected coin.
- **Proxy Backend**: Node.js server acting as a proxy to the CoinGecko API, serving only the necessary data.

## 📚 Tech Stack

### 🖥️ Frontend

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router v7](https://reactrouter.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Radix UI + shadcn/ui](https://ui.shadcn.dev/)
- [Axios](https://axios-http.com/)
- [TanStack React Query](https://tanstack.com/query)

### ⚙️ Backend

- [Express.js](https://expressjs.com/)
- [Axios](https://axios-http.com/)

## 📦 Project Structure
```
coin-proxy/ # Backend (Express)
├── routes/
│ └── coinsRouter.js
├── services/
│ └── coinService.js
├── config/
│ └── index.js
├── .env
└── server.js

coin-client/ # Frontend (React Vite)
├── src/
│ ├── pages/
│ │ ├── CoinsMarket.jsx
│ │ ├── CoinDetails.jsx
│ │ └── ErrorPage.jsx
│ ├── components/
│ ├── App.jsx
│ └── main.jsx
└── tailwind.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/crypto-price-tracker.git
cd crypto-price-tracker
```

### 2. Backend Setup
```bash
cd coin-proxy
npm install
```

Create a .env file with:
```bash
PORT=8080
COINGECKO_BASE_URL=https://api.coingecko.com/api/v3
```

Start the server:
```bash
node server.js
```

### 3. Frontend Setup
```bash
cd ../coin-client
npm install
npm run dev
```
The frontend runs by default at http://localhost:5173 and will communicate with the backend proxy at http://localhost:8080

## 🌐 API Routes

### 🔁 Proxy API (Backend)

| Endpoint         | Description                    |
|------------------|--------------------------------|
| `/api/coins`     | Paginated market data list     |
| `/api/coins/:id` | Details of a specific coin     |

**Query parameters accepted:**

- `page` (default: 1)
- `per_page` (default: 10)
- `vs_currency` (default: `usd`, fixed for this project)

---

## 🧩 Features

- Proxy backend to avoid CORS and limit data sent to frontend
- Pagination support
- Data loading indicators
- Error handling
- Responsive UI
- Clean design with [shadcn/ui](https://ui.shadcn.dev/) components
- Strict data shaping on backend to reduce payload

---

## 🙌 Acknowledgements
- CoinGecko API
- shadcn/ui
- TanStack React Query

# 📄 License
MIT – free to use for educational and assignment purposes.

