import { useNavigate, useParams } from "react-router-dom";
import { getCoinDetails } from "../../services/coinServices";
import { useQuery } from "@tanstack/react-query";
import MainLayout from "../../components/custom/MainLayout/MainLayout";
import {
  Card,
  CardHeader,
  CardAction,
  CardTitle,
  CardDescription,
} from "../../components/ui/card";
import CustomCard from "../../components/custom/CustomCard/CustomCard";
import ContentCard from "../../components/custom/ContentCard/ContentCard";
import ValueInfoPair from "../../components/custom/ValueInfoPair/ValueInfoPair";
import { Spinner } from "../../components/custom/Spinner/Spinner";

const CoinDetails = () => {
  const { id } = useParams();
  const title = "Back to Coins Market";
  const navigate = useNavigate();

  const {
    data: coinDetails,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["coinDetails", id],
    queryFn: () => getCoinDetails(id),
    enabled: !!id,
  });

  if (isLoading)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  if (error) navigate("/error");

  const {
    name,
    symbol,
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
  } = coinDetails;

  const valueInfoPairData = [
    { info: "24 Hours", value: price_change_percentage_24h },
    { info: "7 Days", value: price_change_percentage_7d },
    { info: "14 Days", value: price_change_percentage_14d },
    { info: "1 Month", value: price_change_percentage_30d },
    { info: "2 Months", value: price_change_percentage_60d },
    { info: "200 Days", value: price_change_percentage_200d },
    { info: "1 Year", value: price_change_percentage_1y },
  ];

  const htmlContent = description["en"]
    ? description["en"]
    : "<p class='text-[var(--muted-foreground)]'>No description available</p>";

  return (
    <MainLayout title={title} hasBackNavigation>
      <div className="flex flex-col gap-4 mt-8 p-10 items-center">
        <CustomCard
          id={id}
          name={name}
          current_price={current_price_coin}
          symbol={symbol}
          className="max-w-[816px]"
        />
        <div className="flex gap-4 w-full justify-center">
          <ContentCard
            id={id}
            title="24 Hour Range"
            className="min-h-[300px] max-w-[400px] justify-start"
          >
            <div className="flex flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-[var(--muted-foreground)] font-semibold text-sm">
                  Highest Price
                </p>
                <p className="text-white">{`$${highest_24h.toFixed(2)}`}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[var(--muted-foreground)] font-semibold text-sm">
                  Lowest Price
                </p>
                <p className="text-white">{`$${lowest_24h.toFixed(2)}`}</p>
              </div>
            </div>
          </ContentCard>

          <ContentCard
            id={id}
            title="Price Changes"
            className="justify-start min-h-[300px] max-w-[400px]"
          >
            <div className="flex flex-col gap-2 flex-wrap">
              {valueInfoPairData.map((pair) => {
                return <ValueInfoPair {...pair} />;
              })}
            </div>
          </ContentCard>
        </div>
        <div className="flex w-full justify-center">
          <ContentCard id={id} title="About" className="max-w-[816px]">
            <div
              className="text-[var(--muted-foreground)]"
              dangerouslySetInnerHTML={{
                __html: htmlContent,
              }}
            />
          </ContentCard>
        </div>
      </div>
    </MainLayout>
  );
};

export default CoinDetails;
