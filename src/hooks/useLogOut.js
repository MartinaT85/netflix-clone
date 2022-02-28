import { useAuthContext } from "./useAuthContext";
import { projectAuth } from "../utils/firebase";
import { signOut } from "firebase/auth";

export const useLogOut = () => {
  const { dispatch } = useAuthContext();

  const logOut = () => {
    signOut(projectAuth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { logOut };
};
