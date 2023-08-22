import { useLocation } from "react-router-dom";

const useShoworHide = (route: any) => {
  const location = useLocation();

  return location.pathname !== route;
};

export default useShoworHide;
