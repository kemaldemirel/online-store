import { useRoutes } from "react-router-dom";
import { authRoutes } from "../routes";

const AppRouts = () => {
  return useRoutes(authRoutes);
};

export default AppRouts;
