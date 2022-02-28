import { AuthContext } from "../components/context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext is not placed in the right place");
  }

  return context;
};
