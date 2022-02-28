import { createUserWithEmailAndPassword } from "firebase/auth";
import { projectAuth } from "../utils/firebase";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignUp = () => {
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const signUpUser = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(projectAuth, email, password)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.user });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { error, signUpUser };
};
