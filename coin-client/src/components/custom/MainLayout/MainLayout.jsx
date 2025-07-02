import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MainLayout = ({ title = "", hasBackNavigation = false, children }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen">
      <div className="w-full flex gap-4 items-center font-semibold flex justify-center pl-10 pt-10">
        {hasBackNavigation && (
          <ArrowLeft className="color-white" onClick={() => navigate(-1)} />
        )}
        <h2 className="text-2xl ">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
