import {
  Card,
  CardHeader,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../../ui/card";

const ContentCard = ({ id, title, className = "", children }) => {
  return (
    <Card
      key={id}
      className={`w-full max-w-sm bg-[var(--card-foreground)] rounded-lg border border-[var(--card-foreground)] justify-between ${className}`}
    >
      <CardHeader>
        <CardTitle className="text-white text-md font-bold">{title}</CardTitle>
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ContentCard;
