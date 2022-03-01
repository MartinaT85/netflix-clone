import { useState } from "react";

import styled from "styled-components";
import { useLogIn } from "../hooks/useLogIn";

const SignIn = () => {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const { logInUser } = useLogIn();

  const handleSubmit = (e) => {
    e.preventDefault();
    logInUser(signInEmail, signInPassword);
  };
  return (
    <StyledDiv>
      <div className="form-container">
        <form className="signUpForm" onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <input
            placeholder="Email"
            type="email"
            required
            onChange={(e) => {
              setSignInEmail(e.target.value);
            }}
          />
          <input
            placeholder="Password"
            type="password"
            required
            onChange={(e) => {
              setSignInPassword(e.target.value);
            }}
          />
          <button type="submit" className="submitBtn btn btn-primary">
            Sign In
          </button>
        </form>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  .form-container {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    width: 80%;
    max-width: 25rem;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 2rem;
    border-radius: 5px;
  }

  .signUpForm {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      align-self: start;
      margin-bottom: 1.5rem;
    }

    input {
      width: 100%;
      padding: 0.5rem 1rem;
      height: 2.5rem;
      border: 1px solid transparent;
      border-radius: 4px;
      margin-bottom: 0.9rem;
      background-color: #333;
      color: #9c9c9c;
    }

    button {
      width: 100%;
      padding: 1rem 1.25rem;
      /* I know they're collapsing */
      margin-top: 1.25rem;
      margin-bottom: 1rem;
      border-radius: 4px;
    }
  }
`;

export default SignIn;
