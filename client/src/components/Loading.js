import { ScaleLoader } from "react-spinners";

const Loading = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex-colo bg-black opacity-50 zIndex">
      <ScaleLoader color="#F20000" />
    </div>
  );
};

export default Loading;
