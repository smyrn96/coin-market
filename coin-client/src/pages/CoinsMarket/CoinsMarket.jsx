import MainLayout from "../../components/custom/MainLayout/MainLayout";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../../services/coinServices";
import { useState } from "react";
import CustomPagination from "../../components/custom/CustomPagination/CustomPagination";
import CustomCard from "../../components/custom/CustomCard/CustomCard";

const CoinsMarket = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPageItems = 20;

  const { data, isLoading, error } = useQuery({
    queryKey: ["coins", currentPage, perPageItems],
    queryFn: () => fetchCoins({ page: currentPage, per_page: perPageItems }),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { data: coinData, pagination } = data ?? {};
  const { totalPages } = pagination ?? {};

  return (
    <MainLayout
      title="Track real-time cryptocurrency prices and market data"
      noBackNavigation
    >
      <div className="flex flex-col justify-between h-auto mt-10  items-center mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {coinData.map((coin) => (
            <CustomCard coin={coin} />
          ))}
        </div>

        <CustomPagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </MainLayout>
  );
};

export default CoinsMarket;
