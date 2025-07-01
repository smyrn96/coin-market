import {
  Card,
  CardHeader,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../../ui/card";
import { Button } from "../../ui/button";

const CustomCard = ({ coin }) => {
  const { name, symbol, current_price, price_change_24h, high_24h, low_24h } =
    coin;

  return (
    <Card
      key={symbol}
      className="w-full max-w-sm bg-[var(--card-foreground)] rounded-lg border border-[var(--card-foreground)]"
    >
      <CardHeader>
        <CardTitle className="text-white text-md font-bold">{name}</CardTitle>
        <CardDescription className="text-sm">{symbol}</CardDescription>
        <CardAction>
          <div>
            <p className="text-[var(--muted-foreground)] font-semibold text-sm">
              Current Price
            </p>
            <p className="text-white">{`$${current_price.toFixed(2)}`}</p>
          </div>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between flex-wrap gap-2">
          <div className="flex flex-col gap-2">
            <p className="text-[var(--muted-foreground)] font-semibold text-sm">
              24 High
            </p>
            <p className="text-white">{`$${high_24h.toFixed(2)}`}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[var(--muted-foreground)] font-semibold text-sm">
              24 Low
            </p>
            <p className="text-white">{`$${low_24h.toFixed(2)}`}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[var(--muted-foreground)] font-semibold text-sm">
              24h Change
            </p>
            <p
              className={`${
                parseFloat(price_change_24h) > 0
                  ? "text-[var(--chart-5)]"
                  : parseFloat(price_change_24h) < 0
                  ? "text-[var(--destructive)]"
                  : "text-white"
              }`}
            >{`${price_change_24h.toFixed(2)}%`}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="">Coin Details</Button>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
