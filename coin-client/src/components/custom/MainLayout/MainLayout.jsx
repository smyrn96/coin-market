import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MainLayout = ({ title = "", noBackNavigation = true, children }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen">
      <div className="w-full flex gap-4 items-center font-semibold flex justify-center">
        {!noBackNavigation && <ArrowLeft onClick={() => navigate(-1)} />}
        <h2 className="text-2xl pl-10 pt-10">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
