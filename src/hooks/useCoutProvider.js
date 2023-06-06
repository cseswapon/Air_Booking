import { useContext } from "react";
import { CREATECONTEXT } from "../pages/Home/Home";

const useCountProvider = () => {
  return useContext(CREATECONTEXT);
};

export default useCountProvider;
