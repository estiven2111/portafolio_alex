import loading from "../assets/lottie/loading.json";
import Lottie from "lottie-react";

const Loading: React.FC = () => {
  return (
    <div className=" ">
      <Lottie animationData={loading} loop={true} className="h-screen" />
    </div>
  );
};

export default Loading;
