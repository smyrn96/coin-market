import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-8">
      <img src="/error-404.jpg" alt="error" className="w-[500px] rounded-lg" />
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="font-bold text-xl">Oops, something went wrong!</div>
        <div className="font-semibold text-lg text-[var(--muted-foreground)]">
          Try again later.
        </div>
      </div>
      <Button className="" onClick={() => navigate(`/coins`)}>
        Back to home
      </Button>
    </div>
  );
};

export default ErrorPage;
