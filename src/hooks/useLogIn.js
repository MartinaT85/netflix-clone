import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { projectAuth } from "../utils/firebase";
import { useAuthContext } from "./useAuthContext";

export const useLogIn = () => {
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const logInUser = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(projectAuth, email, password)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.user });
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return { logInUser, error };
};
